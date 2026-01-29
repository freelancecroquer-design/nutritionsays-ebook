
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
  Heart,
  Download,
  BookOpen
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
    <main className="min-h-screen pb-32 bg-[#fdfbf7] selection:bg-[#c8db6c] selection:text-[#240046]">
      {/* Abstract Background Elements Global */}
      <div className="fixed inset-0 z-0 pointer-events-none print:hidden overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[120vh] bg-gradient-to-b from-[#efe8f8] via-[#fdfbf7] to-[#ffffff] opacity-100" />
        {/* Floating Orbs - More intense colors but refined with blur */}
        <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-[#c8db6c]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-[#b9b1ff]/10 rounded-full blur-[100px]" />
      </div>

      {/* Navigation / Header Brand */}
      <nav className="fixed top-0 left-0 w-full p-6 md:p-8 z-50 flex justify-between items-center no-print pointer-events-none mix-blend-multiply">
        <span className="font-serif font-bold text-xl tracking-tight text-[#240046]">{ebookContent.brand}</span>
        <span className="bg-[#240046] text-[#c8db6c] px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold">Guía Oficial</span>
      </nav>

      {/* Hero Section - Magazine Cover Style */}
      <section className="relative min-h-[100svh] flex flex-col justify-center px-6 print:min-h-0 print:h-auto print:block">
        <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center h-full pt-20 md:pt-0">

          {/* Visual Cover (Image + Title Treatment) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-6 relative h-[60vh] md:h-[80vh] w-full print:hidden group"
          >
            <div className="relative w-full h-full rounded-[3rem] overflow-hidden shadow-2xl bg-[#efe8f8]">
              <Image
                src="/arianna-hero.png"
                alt="Arianna García"
                fill
                className="object-cover object-top hover:scale-105 transition-transform duration-[1.5s] ease-out mix-blend-overlay opacity-90"
                priority
              />
              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#240046]/80 via-transparent to-transparent opacity-60" />

              {/* Embedded Cover Text */}
              <div className="absolute bottom-12 left-8 right-8 text-white z-20">
                <p className="font-serif italic text-2xl mb-2 text-[#c8db6c]">{ebookContent.subtitle}</p>
                <h1 className="text-5xl md:text-6xl font-bold leading-[0.9] tracking-tighter mb-4">
                  Nutrir es <br /> más que comer
                </h1>
                <div className="flex items-center gap-3 pt-4 border-t border-white/20 mt-6">
                  <div className="w-10 h-10 rounded-full bg-[#c8db6c] flex items-center justify-center text-[#240046] font-bold">A</div>
                  <div className="text-sm tracking-widest uppercase opacity-90">Por {ebookContent.author}</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Intro Text & CTA Side */}
          <div className="md:col-span-6 space-y-8 md:pl-8 text-center md:text-left pb-12 md:pb-0 print:col-span-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold leading-none tracking-tighter text-[#240046] mb-6 hidden md:block print:block">
                Nutrición <br />
                <span className="font-serif italic text-[#008b92]">Humana</span>
              </h1>

              <p className="text-xl md:text-2xl text-[#240046]/70 leading-relaxed font-light mb-10">
                {ebookContent.sections[0].content[0]}
              </p>

              <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start print:hidden">
                <button
                  onClick={() => document.getElementById('content-start')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex items-center justify-center gap-3 px-8 py-5 bg-[#240046] text-white rounded-full font-bold text-lg hover:bg-[#3a0a63] transition-all hover:-translate-y-1 shadow-xl shadow-[#240046]/20 group"
                >
                  <BookOpen size={20} className="group-hover:rotate-12 transition-transform" />
                  Comenzar Lectura
                </button>
                <button
                  onClick={() => window.print()}
                  className="flex items-center justify-center gap-3 px-8 py-5 bg-[#fff] border-2 border-[#240046]/10 text-[#240046] rounded-full font-bold text-lg hover:bg-[#f3f4f6] hover:border-[#240046]/30 transition-all"
                >
                  <Download size={20} /> PDF
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Stream */}
      <section id="content-start" className="relative px-6 py-32 max-w-4xl mx-auto space-y-24 print:py-0 print:space-y-12">

        {ebookContent.sections.map((section, index) => (
          <SectionCard
            key={section.id}
            {...section}
            icon={iconMap[section.icon] || Sparkles}
            index={index}
          />
        ))}

        {/* Closing / Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center pt-32 pb-20 border-t border-[#240046]/10 mt-32 print:hidden"
        >
          <div className="w-16 h-1 bg-[#c8db6c] mx-auto mb-8 rounded-full" />
          <p className="text-2xl md:text-3xl font-serif text-[#240046] italic mb-6 leading-relaxed max-w-2xl mx-auto">
            {ebookContent.footer.thanks}
          </p>
          <p className="text-[#008b92] font-bold tracking-widest uppercase text-sm">
            {ebookContent.footer.tagline}
          </p>
        </motion.div>
      </section>
    </main>
  );
}
