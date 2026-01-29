
"use client";

import { ebookContent } from "@/lib/content";
import {
  Sparkles,
  Scale,
  Utensils,
  Stethoscope,
  Activity,
  Move,
  Heart,
  Download,
  BookOpen,
  ArrowDown,
  Menu,
  X,
  Instagram,
  Phone
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { clsx } from "clsx";

const iconMap: Record<string, any> = {
  Sparkles, Scale, Utensils, Stethoscope, Activity, Move, Heart
};

export default function Home() {
  const [showTOC, setShowTOC] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-900 selection:bg-[#c8db6c] selection:text-[#240046] print:bg-white pb-32">

      {/* 1. Header Fijo (Like Reference) */}
      <header className={clsx(
        "fixed top-0 left-0 right-0 z-40 p-4 flex justify-between items-center pointer-events-none transition-all duration-300 print:hidden",
        scrolled ? "opacity-100 translate-y-0" : "opacity-100 translate-y-0"
      )}>
        <a href="#" className="bg-white/80 backdrop-blur-md p-2 pl-3 pr-4 rounded-full shadow-sm border border-white/50 pointer-events-auto flex items-center gap-3 transition-transform hover:scale-105 group">
          <div className="w-8 h-8 relative">
            <Image src="/images/logo-brand.png" alt="Logo" fill className="object-contain" />
          </div>
          <span className="font-serif font-bold text-[#240046] text-sm group-hover:text-[#008b92] transition-colors">NutritionSays</span>
        </a>
      </header>

      {/* 2. Floating TOC Button (Like Reference) */}
      <div className="fixed bottom-8 right-8 z-40 print:hidden pointer-events-auto">
        <button
          onClick={() => setShowTOC(!showTOC)}
          className="rounded-full w-14 h-14 bg-[#240046] hover:bg-[#3a0a63] text-white shadow-2xl flex items-center justify-center transition-all hover:scale-105 active:scale-95"
        >
          {showTOC ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Floating TOC Panel */}
      <AnimatePresence>
        {showTOC && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-8 bg-white/95 backdrop-blur-md border border-neutral-200 shadow-2xl rounded-2xl p-6 w-80 z-40 origin-bottom-right overflow-hidden print:hidden"
          >
            <h3 className="font-serif font-bold text-[#240046] mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#c8db6c] rounded-full block"></span>
              Índice
            </h3>
            <nav className="flex flex-col gap-2 max-h-[60vh] overflow-y-auto">
              <a href="#hero" onClick={() => setShowTOC(false)} className="text-sm py-2 px-3 rounded-lg hover:bg-[#f7ffd0] text-neutral-600 transition-colors truncate">Inicio</a>
              {ebookContent.sections.map((section, idx) => (
                <a key={section.id} href={`#${section.id}`} onClick={() => setShowTOC(false)} className="text-sm py-2 px-3 rounded-lg hover:bg-[#f7ffd0] text-neutral-600 transition-colors truncate">
                  {idx + 1}. {section.title}
                </a>
              ))}
              <a href="#bio" onClick={() => setShowTOC(false)} className="text-sm py-2 px-3 rounded-lg hover:bg-[#f7ffd0] text-neutral-600 transition-colors truncate">Sobre la Autora</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="max-w-5xl mx-auto px-4 py-8 print:max-w-none print:px-0 print:py-0 relative z-10">

        {/* HERO SECTION (Rounded & Immersive) */}
        <section id="hero" className="min-h-[92vh] flex flex-col justify-center items-center text-center mb-20 relative overflow-hidden rounded-[3rem] shadow-2xl border border-white/50 backdrop-blur-sm print:rounded-none print:shadow-none print:min-h-0 print:border-none print:mb-0">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/arianna-hero.jpg"
              alt="Arianna Hero"
              fill
              className="object-cover opacity-90 object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent md:to-white/10" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/90" />
          </div>

          {/* Content */}
          <div className="relative z-10 p-8 flex flex-col items-center max-w-4xl mx-auto">
            <Image src="/images/logo-brand-full.png" alt="NutritionSays" width={180} height={60} className="mb-8 drop-shadow-md invert brightness-0" />

            <span className="text-[#240046] font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-6 px-5 py-2 bg-[#c8db6c]/30 rounded-full backdrop-blur-md border border-[#c8db6c]/50 shadow-sm">
              Guía de Bienestar
            </span>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-[#240046] mb-8 leading-[0.9] tracking-tight">
              Nutrir es <br />
              <span className="text-[#008b92] italic px-2">más que comer</span>
            </h1>

            <p className="text-xl md:text-2xl text-neutral-800 font-medium mb-12 max-w-2xl mx-auto leading-relaxed text-balance drop-shadow-sm">
              {ebookContent.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center print:hidden">
              <button
                onClick={() => document.getElementById('intro')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 h-12 rounded-full bg-[#240046] hover:bg-[#3a0a63] text-white px-10 text-lg shadow-xl transition-all hover:scale-105 active:scale-95 font-medium"
              >
                <BookOpen size={20} /> Leer Guía
              </button>
              <button
                onClick={() => window.print()}
                className="inline-flex items-center justify-center gap-2 h-12 rounded-full bg-white border border-[#240046]/20 text-[#240046] hover:bg-[#f7ffd0] px-8 text-lg shadow-lg hover:scale-105 transition-all font-medium"
              >
                <Download size={20} /> Descargar PDF
              </button>
            </div>
          </div>
        </section>

        {/* PROSE CONTENT */}
        <div className="prose prose-lg prose-indigo mx-auto text-neutral-700 space-y-32">

          {/* Loop through sections using the Reference Layout Style */}
          {ebookContent.sections.map((section, idx) => {
            const Icon = iconMap[section.icon] || Sparkles;
            const isEven = idx % 2 === 0;

            return (
              <section key={section.id} id={section.id} className="scroll-mt-32 print:break-inside-avoid">

                {/* Chapter Header */}
                <div className="flex items-center gap-4 mb-8">
                  <span className="bg-[#c8db6c] text-[#240046] w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold font-serif shadow-sm">
                    {idx + 1}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#240046] m-0">
                    {section.title}
                  </h2>
                </div>

                {/* Card Main */}
                <div className="bg-white rounded-3xl shadow-sm border border-neutral-100 overflow-hidden">
                  {/* Image Banner */}
                  {section.image && (
                    <div className="relative h-64 md:h-80 w-full overflow-hidden">
                      <Image
                        src={section.image}
                        alt={section.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-[2s]"
                      />
                      {/* Gradient fade */}
                      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-80" />
                    </div>
                  )}

                  <div className="p-8 md:p-12 relative">
                    {/* Subtle subtitle */}
                    <h3 className="text-xl text-[#008b92] font-serif italic mb-8 mt-0">
                      {section.subtitle}
                    </h3>

                    {/* Content List */}
                    <div className="space-y-6">
                      {section.content.map((p, i) => (
                        <p key={i} className="text-lg leading-relaxed text-neutral-600 m-0">
                          {p.startsWith("•") || p.match(/^\d\./) ? (
                            <span className="block pl-4 border-l-4 border-[#c8db6c]/50 font-medium text-[#240046]">
                              {p}
                            </span>
                          ) : (
                            p
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Signature Special Feature */}
                {section.isSignature && (
                  <div className="mt-8 flex justify-end px-12">
                    <Image src="/images/signature.png" alt="Signature" width={180} height={80} className="rotate-[-6deg] opacity-80" />
                  </div>
                )}
              </section>
            );
          })}

        </div>

      </main>

      {/* BIO SECTION (Full width rounded at bottom) */}
      <section id="bio" className="max-w-5xl mx-auto px-4 mt-20 mb-20 print:break-inside-avoid">
        <div className="rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl bg-[#240046]">
          {/* Background Texture/Image */}
          <div className="absolute inset-0 z-0 opacity-40">
            <Image src="/images/arianna-lifestyle.jpg" alt="Bg" fill className="object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#240046] via-[#240046]/90 to-transparent z-0" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
            {/* Avatar */}
            <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 rounded-full border-4 border-white/20 overflow-hidden shadow-2xl ring-4 ring-[#c8db6c]/30">
              <Image src="/images/arianna-bio.png" alt="Arianna Bio" width={400} height={400} className="w-full h-full object-cover" />
            </div>

            {/* Bio Text */}
            <div className="text-center md:text-left">
              <h3 className="text-4xl font-serif font-bold mb-4 tracking-tight text-white">
                {ebookContent.author}
              </h3>
              <p className="text-[#c8db6c] text-lg font-medium mb-6 uppercase tracking-widest text-xs">
                Nutricionista & Dietista
              </p>
              <p className="text-white/80 text-lg leading-relaxed max-w-xl mb-8">
                Mi misión es empoderarte para que tomes el control de tu salud a través del conocimiento real, sin culpas y con mucha ciencia.
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-4 print:hidden">
                <a href="https://instagram.com/nutritionsays" target="_blank" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3 rounded-full transition-all hover:scale-105 backdrop-blur-sm">
                  <Instagram size={18} /> <span className="font-medium">@nutritionsays</span>
                </a>
                <a href="#" className="flex items-center gap-2 bg-[#c8db6c] hover:bg-[#d4e67d] text-[#240046] px-6 py-3 rounded-full transition-all hover:scale-105 font-bold shadow-lg">
                  <Phone size={18} /> Agendar Consulta
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-neutral-400 py-12 print:hidden relative z-10">
        <Image src="/images/logo-brand.png" alt="Logo" width={40} height={40} className="mx-auto mb-4 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
        <p>© 2026 NutritionSays. Todos los derechos reservados.</p>
      </footer>

    </div>
  );
}
