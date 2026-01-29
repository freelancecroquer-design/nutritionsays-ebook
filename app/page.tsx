
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
    <main className="min-h-screen pb-32">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6 pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#240046] via-[#3a0a63] to-[#1a0033] opacity-100" />
          <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-[#c8db6c]/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-[20%] right-[20%] w-[600px] h-[600px] bg-[#b9b1ff]/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 w-full max-w-5xl text-center md:text-left flex flex-col md:grid md:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:col-span-8 space-y-8"
          >
            <span className="inline-block px-4 py-2 rounded-full border border-secondary/30 text-secondary-DEFAULT bg-secondary/5 backdrop-blur-sm text-sm tracking-widest uppercase font-bold">
              Ebook Premium 2026
            </span>
            <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter text-white">
              {ebookContent.title}
            </h1>
            <p className="text-2xl md:text-3xl text-[#c8db6c] italic font-light">
              {ebookContent.subtitle}
            </p>
            <p className="text-white/70 max-w-lg text-lg leading-relaxed">
              Una guía de {ebookContent.brand} para entender la nutrición humana sin reglas absurdas. Por {ebookContent.author}.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 pt-4 no-print"
            >
              <button
                onClick={() => window.print()}
                className="px-8 py-4 bg-[#c8db6c] text-[#240046] rounded-full font-bold text-lg hover:bg-[#d9ec7d] transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#c8db6c]/20"
              >
                Descargar PDF
              </button>
              <button
                onClick={() => document.getElementById('content-start')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all"
              >
                Comenzar a leer
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Content Stream */}
      <section id="content-start" className="relative px-6 py-24 max-w-4xl mx-auto space-y-12">
        <div className="text-center mb-24 space-y-4">
          <span className="w-1 h-24 bg-primary/20 block mx-auto mb-8 rounded-full" />
          <p className="text-primary/60 uppercase tracking-widest text-sm font-bold">Índice de Contenidos</p>
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
        <div className="text-center pt-24 border-t border-primary/10 mt-32">
          <h4 className="text-primary font-bold text-2xl mb-2">{ebookContent.brand}</h4>
          <p className="text-primary/60">Designed by freelancecroquer-design</p>
        </div>
      </section>
    </main>
  );
}
