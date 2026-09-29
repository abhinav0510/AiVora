"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface HeroOrb3DProps {
  progress?: number; // 0 (start) to 1 (expanded)
  className?: string;
}

export const HeroOrb3D: React.FC<HeroOrb3DProps> = ({
  progress = 0,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const progressRef = useRef(progress);
  progressRef.current = progress;

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 5.2);

    // Group for mouse parallax & transforms
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Soft Translucent Outer Orb
    const outerGeo = new THREE.IcosahedronGeometry(1.4, 32);
    const outerMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color("#FAF9F5"),
      roughness: 0.12,
      metalness: 0.05,
      transmission: 0.92,
      ior: 1.4,
      thickness: 1.2,
      specularIntensity: 0.8,
      clearcoat: 0.5,
      clearcoatRoughness: 0.1,
      attenuationColor: new THREE.Color("#EAF76A"),
      attenuationDistance: 1.5,
      transparent: true,
      opacity: 0.88,
    });
    const outerOrb = new THREE.Mesh(outerGeo, outerMat);
    mainGroup.add(outerOrb);

    // 2. Inner Crystalline Structure (Internal Network)
    const innerGeo = new THREE.IcosahedronGeometry(0.9, 2);
    const innerMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#1A1A1A"),
      wireframe: true,
      transparent: true,
      opacity: 0.18,
      roughness: 0.4,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    mainGroup.add(innerMesh);

    // 3. Central Glowing Intelligence Node
    const coreGeo = new THREE.SphereGeometry(0.35, 24, 24);
    const coreMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#EAF76A"),
      emissive: new THREE.Color("#EAF76A"),
      emissiveIntensity: 0.6,
      roughness: 0.2,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    mainGroup.add(coreMesh);

    // 4. Subtle Orbital Nodes & Particles
    const particlesCount = 70;
    const particlePositions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      const radius = 1.05 + Math.random() * 0.7;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = radius * Math.cos(phi);
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );

    const particleMat = new THREE.PointsMaterial({
      color: new THREE.Color("#0F0F11"),
      size: 0.035,
      transparent: true,
      opacity: 0.35,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    mainGroup.add(particles);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xfffdf5, 1.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xeaf76a, 2.4);
    keyLight.position.set(4, 5, 4);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xe0e5eb, 1.6);
    fillLight.position.set(-4, -2, -2);
    scene.add(fillLight);

    const bottomGlow = new THREE.PointLight(0xf2f7a0, 1.5, 8);
    bottomGlow.position.set(0, -2, 2);
    scene.add(bottomGlow);

    // Mouse Interaction
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetMouseX = x * 0.8;
      targetMouseY = y * 0.8;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Resize Handler
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    handleResize();
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();
      const p = progressRef.current;

      if (!prefersReducedMotion) {
        // Slow idle rotation
        outerOrb.rotation.y = elapsed * 0.08 + p * Math.PI * 0.8;
        outerOrb.rotation.x = Math.sin(elapsed * 0.05) * 0.1 + p * 0.4;

        innerMesh.rotation.y = -elapsed * 0.12 - p * Math.PI * 1.2;
        innerMesh.rotation.z = Math.cos(elapsed * 0.07) * 0.15;

        particles.rotation.y = elapsed * 0.04;
        particles.rotation.x = elapsed * 0.02;

        // Subtle breathing scale
        const breathe = 1 + Math.sin(elapsed * 1.2) * 0.02;
        // Scroll transformation scale: from normal (1.0) to dramatic hero expand (up to 2.4)
        const scrollScale = 1 + p * 1.4;
        mainGroup.scale.setScalar(breathe * scrollScale);

        // Core pulse
        coreMesh.scale.setScalar(1 + Math.sin(elapsed * 2.5) * 0.08);

        // Smooth mouse damping
        currentMouseX += (targetMouseX - currentMouseX) * 0.05;
        currentMouseY += (targetMouseY - currentMouseY) * 0.05;

        mainGroup.position.x = currentMouseX * 0.5;
        mainGroup.position.y = -currentMouseY * 0.5;
      }

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);

      // Disposal
      outerGeo.dispose();
      outerMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full flex items-center justify-center select-none pointer-events-none ${className}`}
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};
