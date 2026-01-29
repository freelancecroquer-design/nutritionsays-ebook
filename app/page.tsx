
"use client";

import { ebookContent } from "@/lib/content";
import { SectionCard } from "@/components/SectionCard";
import {
  Sparkles,
  Scale,
  Utensils,
  Stethoscope,
  Activity,
  Move,
  Heart
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const iconMap: Record<string, any> = {
  Sparkles,
  Scale,
  Utensils,
  Stethoscope,
  Activity,
  Move,
  Heart
};

export default function Home() {
  return (
    <main className="min-h-screen pb-32 bg-[#efe8f8]">
      {/* Navigation / Header Brand */}
      <nav className="fixed top-0 left-0 w-full p-6 z-50 flex justify-between items-center mix-blend-difference text-white no-print pointer-events-none">
        <span className="font-bold text-xl tracking-tighter opacity-80">{ebookContent.brand}</span>
        <span className="text-xs uppercase tracking-widest opacity-60">Ebook Series 2026</span>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6 pt-20 print:min-h-0 print:h-auto print:pt-0">
        {/* Background Visuals */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none print:hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#240046] via-[#4c1d95] to-[#c8db6c] opacity-100" />
          {/* Abstract Shapes resembling organic cells / nutrients */}
          <div className="absolute top-[10%] right-[10%] w-[600px] h-[600px] bg-[#c8db6c] rounded-full blur-[100px] opacity-20 animate-pulse delay-1000" />
          <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] bg-[#b9b1ff] rounded-full blur-[120px] opacity-20" />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:col-span-7 space-y-8 text-center md:text-left print:col-span-12 print:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white/90 text-xs tracking-widest uppercase font-bold print:hidden">
              <Sparkles size={12} className="text-[#c8db6c]" />
              <span>Guía de Bienestar</span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tighter text-white drop-shadow-2xl print:text-black print:text-5xl">
              Nutrir es <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c8db6c] to-[#f7ffd0] italic font-serif print:text-black">más que comer</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 max-w-lg leading-relaxed font-light print:text-black print:text-xl">
              {ebookContent.subtitle}
            </p>

            <div className="pt-8 flex flex-wrap gap-4 justify-center md:justify-start print:hidden">
              <button
                onClick={() => document.getElementById('content-start')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-8 py-4 bg-[#c8db6c] text-[#240046] rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl shadow-[#c8db6c]/20"
              >
                <div className="absolute inset-0 w-full h-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative flex items-center gap-2">
                  Leer Guía <Move size={18} />
                </span>
              </button>
              <button
                onClick={() => window.print()}
                className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center gap-2"
              >
                Descargar PDF
              </button>
            </div>
          </motion.div>

          {/* Hero Image / Composer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="md:col-span-5 relative h-[500px] md:h-[700px] w-full print:hidden"
          >
            <div className="absolute inset-0 bg-[#c8db6c] rounded-full blur-[80px] opacity-20" />
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-[#240046]/50">
              {/* Fallback pattern if image fails to load, but we anticipate it working */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#240046]/80 z-10" />
              <Image
                src="/arianna-hero.png"
                alt="Arianna García"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-1000"
                priority
              />
              <div className="absolute bottom-8 left-8 z-20 text-white">
                <p className="text-sm uppercase tracking-widest opacity-70">Autor</p>
                <p className="text-2xl font-serif italic">Arianna García</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Stream */}
      <section id="content-start" className="relative px-6 py-24 max-w-4xl mx-auto space-y-16 print:py-0">

        {/* Intro Branding */}
        <div className="text-center mb-16 space-y-6 print:hidden">
          <div className="w-[1px] h-24 bg-[#240046]/20 mx-auto" />
          <Image src="/logo.png" width={150} height={50} alt="NutritionSays" className="mx-auto grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
        </div>

        {ebookContent.sections.map((section, index) => (
          <SectionCard
            key={section.id}
            {...section}
            icon={iconMap[section.icon] || Sparkles}
            index={index}
          />
        ))}

        {/* Footer */}
        <div className="text-center pt-24 border-t border-[#240046]/10 mt-32 print:hidden">
          <h4 className="text-[#240046] font-bold text-3xl mb-4 font-serif italic">{ebookContent.brand}</h4>
          <p className="text-[#240046]/60 max-w-md mx-auto">
            “La nutrición no empieza en el plato, empieza en ti.”
          </p>
        </div>
      </section>
    </main>
  );
}
