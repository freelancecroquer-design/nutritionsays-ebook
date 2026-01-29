
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
    <main className="min-h-screen pb-32 bg-[#fdfbf7] overflow-x-hidden selection:bg-[#c8db6c] selection:text-[#240046]">

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full p-8 z-50 flex justify-between items-center mix-blend-difference text-white no-print pointer-events-none">
        <span className="font-serif font-bold text-2xl tracking-tighter">NutritionSays</span>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex flex-col justify-center px-6 print:min-h-0 print:h-auto">
        <div className="absolute inset-0 z-0 bg-[#fdfbf7]">
          {/* Organic Mesh Gradient Background */}
          <div className="absolute top-[-20%] right-[-10%] w-[70vw] h-[70vw] bg-[#c8db6c] rounded-full blur-[150px] opacity-20" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-[#b9b1ff] rounded-full blur-[150px] opacity-20" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center pt-20">

          {/* Hero Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-12 lg:col-span-5 text-center lg:text-left order-2 lg:order-1"
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-[#240046]/20 text-[#240046] text-xs font-bold tracking-widest uppercase mb-8">
              Ebook Guide 2026
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold leading-[0.9] text-[#240046] mb-8 tracking-tight">
              Nutrir es <br />
              <span className="italic text-[#008b92]">más que comer</span>
            </h1>
            <p className="text-xl text-[#240046]/70 leading-relaxed font-sans max-w-lg mx-auto lg:mx-0 mb-10">
              {ebookContent.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start print:hidden">
              <button
                onClick={() => document.getElementById('content-start')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-[#240046] text-white rounded-full font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Comenzar Lectura <BookOpen size={18} />
              </button>
              <button
                onClick={() => window.print()}
                className="px-8 py-4 bg-white border border-[#240046]/10 text-[#240046] rounded-full font-bold hover:bg-[#f0ece5] transition-all flex items-center justify-center gap-2"
              >
                <Download size={18} /> PDF
              </button>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-12 lg:col-span-7 relative h-[60vh] lg:h-[80vh] w-full order-1 lg:order-2"
          >
            <div className="relative w-full h-full rounded-tl-[100px] rounded-br-[100px] rounded-tr-[20px] rounded-bl-[20px] overflow-hidden shadow-2xl">
              <Image
                src="/images/cover.png"
                alt="Arianna García"
                fill
                className="object-cover object-top hover:scale-105 transition-transform duration-[2s]"
                quality={100}
                priority
              />
              <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-[#240046]/80 to-transparent text-white">
                <p className="font-serif italic text-2xl">Por {ebookContent.author}</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#240046]/30 animate-bounce print:hidden"
        >
          <ArrowDown size={32} />
        </motion.div>
      </section>

      {/* Content Stream */}
      <section id="content-start" className="relative px-6 py-32 max-w-7xl mx-auto print:py-0">

        <div className="text-center mb-32 max-w-3xl mx-auto space-y-8">
          <Image src="/images/logo-brand.png" alt="NutritionSays" width={120} height={120} className="mx-auto rounded-full shadow-lg" />
          <p className="text-2xl font-serif italic text-[#240046]/80 leading-relaxed">
            "No vengo a venderte milagros, vengo a ofrecerte herramientas para que navegues tu alimentación con criterio propio y paz mental."
          </p>
        </div>

        <div className="space-y-12">
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
        <div className="mt-32 pt-20 border-t border-[#240046]/10 text-center pb-12 print:hidden">
          <h2 className="text-4xl font-serif font-bold text-[#240046] mb-6">NutritionSays</h2>
          <p className="max-w-md mx-auto text-[#240046]/60 mb-8">{ebookContent.footer.thanks}</p>
          <div className="inline-block px-6 py-3 bg-[#c8db6c]/20 text-[#5c662d] rounded-full text-sm font-bold tracking-widest uppercase">
            {ebookContent.instagram}
          </div>
        </div>
      </section>

    </main>
  );
}
