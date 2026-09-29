import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full bg-[#FAF9F5] flex flex-col items-center justify-center p-6 text-center select-none">
      <div className="mb-6">
        <Image
          src="/logo.png"
          alt="AI VORA"
          width={220}
          height={136}
          className="h-16 w-auto object-contain"
        />
      </div>
      <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
        ERROR 404 // NOT FOUND
      </span>
      <h1 className="text-4xl sm:text-6xl font-black tracking-tightest text-vora-black uppercase mt-2">
        SYSTEM UNREACHABLE
      </h1>
      <p className="text-sm font-mono text-neutral-600 max-w-sm mt-3">
        The requested system endpoint does not exist or has been relocated to another neural node.
      </p>
      <div className="mt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-vora-black text-white text-xs font-mono uppercase font-bold tracking-wider hover:bg-neutral-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>RETURN TO AI VORA</span>
        </Link>
      </div>
    </div>
  );
}
