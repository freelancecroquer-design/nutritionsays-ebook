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

      {/* 1. Header Fijo */}
      <header className={clsx(
        "fixed top-0 left-0 right-0 z-40 p-4 flex justify-between items-center pointer-events-none transition-all duration-300 print:hidden",
        scrolled ? "opacity-100 translate-y-0" : "opacity-100 translate-y-0"
      )}>
        <a href="#" className="bg-white/90 backdrop-blur-md p-2 pl-4 pr-5 rounded-full shadow-sm border border-white/50 pointer-events-auto flex items-center gap-3 transition-transform hover:scale-105 group">
          <div className="w-24 h-8 relative">
            <Image src="/images/logo-arianna-new.png" alt="Arianna Logo" fill className="object-contain" />
          </div>
        </a>
      </header>

      {/* 2. Floating TOC Button */}
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

      <main className="max-w-6xl mx-auto px-4 py-8 print:max-w-none print:px-0 print:py-0 relative z-10">

        {/* HERO SECTION */}
        <section id="hero" className="min-h-[95vh] flex flex-col justify-center items-center text-center mb-24 relative overflow-hidden rounded-[3rem] shadow-2xl border border-white/50 backdrop-blur-sm print:rounded-none print:shadow-none print:min-h-0 print:border-none print:mb-0 group">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/arianna-pointing.jpg" // Using one of the new images
              alt="Arianna Hero"
              fill
              className="object-cover opacity-90 object-top group-hover:scale-105 transition-transform duration-[3s]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent md:to-white/20" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/90" />
          </div>

          {/* Content */}
          <div className="relative z-10 p-8 flex flex-col items-center max-w-4xl mx-auto mt-20 md:mt-0">
            <div className="w-64 md:w-80 h-32 relative mb-2 drop-shadow-lg">
              <Image src="/images/logo-arianna-new.png" alt="NutritionSays" fill className="object-contain" />
            </div>

            <span className="text-[#240046] font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-6 px-5 py-2 bg-[#c8db6c]/40 rounded-full backdrop-blur-md border border-[#c8db6c]/60 shadow-sm mt-4">
              Guía de Bienestar Integral
            </span>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-[#240046] mb-8 leading-[1.1] tracking-tight drop-shadow-sm">
              Nutrir es más que <br />
              <span className="text-[#008b92] italic relative inline-block">
                comer
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#c8db6c]" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-neutral-800 font-medium mb-12 max-w-2xl mx-auto leading-relaxed text-balance">
              {ebookContent.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center print:hidden">
              <button
                onClick={() => document.getElementById('intro')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 h-14 rounded-full bg-[#240046] hover:bg-[#3a0a63] text-white px-10 text-lg shadow-xl transition-all hover:scale-105 active:scale-95 font-medium"
              >
                <BookOpen size={20} /> Leer Guía
              </button>
              <button
                onClick={() => window.print()}
                className="inline-flex items-center justify-center gap-2 h-14 rounded-full bg-white/80 backdrop-blur-md border border-[#240046]/20 text-[#240046] hover:bg-[#f7ffd0] px-8 text-lg shadow-lg hover:scale-105 transition-all font-medium"
              >
                <Download size={20} /> Descargar PDF
              </button>
            </div>
          </div>
        </section>

        {/* PROSE CONTENT with ZIG-ZAG Layout */}
        <div className="space-y-32">

          {ebookContent.sections.map((section, idx) => {
            const Icon = iconMap[section.icon] || Sparkles;
            const isReverse = idx % 2 !== 0; // Alternate layout

            return (
              <section key={section.id} id={section.id} className="scroll-mt-32 print:break-inside-avoid">

                {/* Chapter Header */}
                <div className="flex items-center gap-4 mb-10 justify-center">
                  <span className="bg-[#c8db6c] text-[#240046] w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold font-serif shadow-sm">
                    {idx + 1}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#240046] m-0">
                    {section.title}
                  </h2>
                </div>

                {/* Card Complex Layout */}
                <div className={clsx(
                  "bg-white rounded-[2.5rem] shadow-sm border border-neutral-100 overflow-hidden flex flex-col md:flex-row gap-0 group hover:shadow-lg transition-shadow duration-500",
                  isReverse ? "md:flex-row-reverse" : ""
                )}>
                  {/* Image Side (50%) */}
                  {section.image && (
                    <div className="w-full md:w-1/2 min-h-[300px] md:min-h-[500px] relative overflow-hidden">
                      <Image
                        src={section.image}
                        alt={section.title}
                        fill
                        className="object-cover transition-transform duration-[3s] group-hover:scale-105"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-[#240046]/10 mix-blend-multiply transition-opacity group-hover:opacity-0" />
                    </div>
                  )}

                  {/* Content Side (50%) */}
                  <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-white relative">
                    {/* Decorative Icon */}
                    <div className="absolute top-8 right-8 text-[#f7ffd0] rotate-12">
                      <Icon size={120} strokeWidth={0.5} />
                    </div>

                    <div className="relative z-10">
                      <span className="text-[#008b92] font-bold uppercase tracking-widest text-xs mb-4 block">
                        Capítulo {idx + 1}
                      </span>

                      <h3 className="text-3xl font-serif text-[#240046] mb-6 leading-tight">
                        {section.subtitle}
                      </h3>

                      <div className="space-y-6 text-lg text-neutral-600 leading-relaxed font-light">
                        {section.content.map((p, i) => (
                          <p key={i} className={clsx(
                            p.startsWith("•") || p.match(/^\d\./) ? "pl-4 border-l-2 border-[#c8db6c] italic text-neutral-700" : ""
                          )}>
                            {p}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}

        </div>

      </main>

      {/* BIO SECTION */}
      <section id="bio" className="max-w-6xl mx-auto px-4 mt-32 mb-20 print:break-inside-avoid">
        <div className="rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl bg-[#240046] flex flex-col md:flex-row items-center gap-12">

          {/* Background Texture*/}
          <div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay">
            <Image src="/images/arianna-hero.jpg" alt="Bg" fill className="object-cover grayscale" />
          </div>

          {/* Avatar - NEW STYLE */}
          <div className="relative z-10 shrink-0">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-[8px] border-white/10 overflow-hidden shadow-2xl relative">
              <Image src="/images/arianna-bio.png" alt="Arianna Bio" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#c8db6c] rounded-full flex items-center justify-center text-[#240046] animate-pulse">
              <Heart size={40} fill="currentColor" />
            </div>
          </div>

          {/* Bio Text */}
          <div className="text-center md:text-left relative z-10 max-w-2xl">
            <div className="w-48 h-20 relative mb-6 mx-auto md:mx-0 invert brightness-0">
              <Image src="/images/logo-arianna-new.png" alt="Arianna Logo" fill className="object-contain" />
            </div>

            <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6 tracking-tight text-white leading-tight">
              Hola, soy Arianna.
            </h3>
            <p className="text-white/90 text-xl leading-relaxed mb-8 font-light">
              Nutricionista apasionada por enseñar a comer con conciencia. Mi misión es empoderarte para que tomes el control de tu salud a través del conocimiento real, sin culpas y con mucha ciencia.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 print:hidden">
              <a href="https://instagram.com/nutritionsays" target="_blank" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 px-8 py-4 rounded-full transition-all hover:scale-105 backdrop-blur-sm text-lg">
                <Instagram size={20} /> <span className="font-medium">@nutritionsays</span>
              </a>
              <a href="#" className="flex items-center gap-2 bg-[#c8db6c] hover:bg-[#d4e67d] text-[#240046] px-8 py-4 rounded-full transition-all hover:scale-105 font-bold shadow-lg text-lg">
                <Phone size={20} /> Agendar Cita
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-neutral-400 py-12 print:hidden relative z-10 bg-white border-t border-neutral-100">
        <div className="max-w-md mx-auto flex flex-col items-center">
          <div className="w-32 h-12 relative mb-4 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
            <Image src="/images/logo-arianna-new.png" alt="Logo" fill className="object-contain" />
          </div>
          <p className="text-sm font-medium text-neutral-500">
            © 2026 NutritionSays. Todos los derechos reservados.
          </p>
        </div>
      </footer>

    </div>
  );
}
