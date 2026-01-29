
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
  BookOpen,
  ArrowDown
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
    <main className="min-h-screen pb-32 bg-[#fff] overflow-x-hidden selection:bg-[#c8db6c] selection:text-[#240046] font-sans">

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full p-8 z-50 flex justify-between items-center mix-blend-difference text-white no-print pointer-events-none">
        <Image src="/images/logo-brand-full.png" alt="NutritionSays" width={140} height={40} className="invert brightness-0" />
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex flex-col justify-center px-6 print:min-h-0 print:h-auto print:block">

        <div className="relative z-10 w-full max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-0 items-center pt-0 h-screen">

          {/* Hero Text Overlay (Kinfolk Style - Centered or overlapping) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5 h-full flex flex-col justify-center z-20 px-4 md:px-12 bg-white/30 backdrop-blur-sm md:bg-transparent"
          >
            <div className="mb-6">
              <span className="text-[#240046] font-bold tracking-[0.3em] uppercase text-xs border-b border-[#240046] pb-2">
                Guía Oficial 2026
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold leading-[0.85] text-[#240046] mb-8 tracking-tighter">
              Nutrir es <br />
              <span className="italic text-[#008b92] font-normal">más que</span> <br />
              comer.
            </h1>
            <p className="text-xl text-[#240046] leading-relaxed font-normal max-w-lg mb-12">
              {ebookContent.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 print:hidden">
              <button
                onClick={() => document.getElementById('content-start')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-4 bg-[#240046] text-white rounded-none font-bold hover:bg-[#3a0a63] transition-all duration-300 tracking-widest uppercase text-xs"
              >
                Leer Ebook
              </button>
              <button
                onClick={() => window.print()}
                className="px-10 py-4 border border-[#240046] text-[#240046] rounded-none font-bold hover:bg-[#240046] hover:text-white transition-all duration-300 tracking-widest uppercase text-xs"
              >
                Descargar PDF
              </button>
            </div>
          </motion.div>

          {/* Hero Image - Full Height Right Side */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute top-0 right-0 w-full md:w-[60%] h-full z-0 md:relative md:col-span-7 md:h-full"
          >
            <div className="relative w-full h-full">
              <Image
                src="/images/arianna-hero.jpg"
                alt="Arianna García"
                fill
                className="object-cover object-center md:object-left" // Focus on her
                quality={100}
                priority
              />
              {/* Gradient for text readability only on mobile */}
              <div className="absolute inset-0 bg-white/70 md:hidden" />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-8 hidden md:block text-[#240046] font-serif italic text-lg"
        >
          Por {ebookContent.author}
        </motion.div>
      </section>

      {/* Content Stream */}
      <section id="content-start" className="relative px-6 py-40 max-w-[1200px] mx-auto print:py-0">

        <div className="text-center mb-40 max-w-4xl mx-auto space-y-12">
          <div className="w-[1px] h-32 bg-[#240046] mx-auto mb-8" />
          <p className="text-3xl md:text-4xl font-serif text-[#240046] leading-tight italic">
            "No vengo a venderte milagros, vengo a ofrecerte herramientas para que navegues tu alimentación con criterio propio y paz mental."
          </p>
          <Image src="/images/signature.png" alt="Firma Arianna" width={200} height={100} className="mx-auto opacity-80" />
        </div>

        <div className="space-y-4">
          {ebookContent.sections.map((section, index) => (
            <SectionCard
              key={section.id}
              {...section}
              icon={iconMap[section.icon] || Sparkles}
              index={index}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="mt-40 pt-24 border-t border-[#240046]/10 text-center pb-24 bg-[#f8f8f8] -mx-6 px-6 print:hidden">
          <Image src="/images/logo-brand-full.png" alt="NutritionSays" width={200} height={60} className="mx-auto mb-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all" />
          <p className="max-w-md mx-auto text-[#240046]/60 mb-8 font-serif italic">{ebookContent.footer.thanks}</p>
          <div className="text-xs tracking-[0.2em] uppercase text-[#240046]/40">
            © 2026 NutritionSays. All Rights Reserved.
          </div>
        </div>
      </section>

    </main>
  );
}
