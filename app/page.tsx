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

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  const [showTOC, setShowTOC] = useState(false);

  // Scroll Spy for simple active state
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((sec, idx) => {
        const rect = sec.getBoundingClientRect();
        if (rect.top >= -200 && rect.top < window.innerHeight / 2) {
          setActiveSection(idx);
        }
      });
    };
    const container = document.body; // usually body handles scroll for snap
    // Note: With h-screen and overflow-y-scroll on body, listener might need to be on window or specific container. 
    // Usually window scroll works if body has default overflow. Let's try standard window first.
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-neutral-50 text-[#240046] font-sans selection:bg-[#c8db6c] selection:text-[#240046]">

      {/* --- FLOATING NAVIGATION (DOTS) LEFT --- */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4 print:hidden">
        {ebookContent.sections.map((_, idx) => (
          <a
            key={idx}
            href={`#${ebookContent.sections[idx].id}`}
            className={clsx(
              "w-3 h-3 rounded-full transition-all duration-300 border border-[#240046]",
              activeSection === idx
                ? "bg-[#c8db6c] scale-150 shadow-[0_0_10px_#c8db6c]"
                : "bg-transparent opacity-40 hover:opacity-100 hover:bg-[#240046]"
            )}
            aria-label={`Ir a sección ${idx + 1}`}
          />
        ))}
      </div>

      <main className="w-full">

        {/* --- SECTION 1: PORTADA PIXEL PERFECT --- */}
        <section id="intro" className="h-screen w-full snap-start relative overflow-hidden flex flex-col justify-center items-center bg-[radial-gradient(circle_at_center,_#240046_0%,_#1a0033_100%)] text-white">

          {/* Background Texture/Noise */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/linen.png')] mix-blend-overlay pointer-events-none"></div>

          {/* Logo: Absolute Top Left (Reduced Size) */}
          <div className="absolute top-8 left-8 md:top-12 md:left-12 opacity-90 z-20">
            <div className="w-20 md:w-24 h-12 relative">
              <Image src="/images/logo-arianna-new.png" alt="NutritionSays" fill className="object-contain brightness-0 invert" />
            </div>
          </div>

          <div className="relative z-10 container mx-auto px-4 flex flex-col md:flex-row items-center h-full">

            {/* Text Content Center/Left */}
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left pt-20 md:pt-0">
              <span className="font-serif font-bold tracking-widest text-sm md:text-base mb-6 text-[#c8db6c] uppercase">
                Ebook Oficial 2026
              </span>
              <h1 className="font-serif font-extrabold text-5xl md:text-7xl lg:text-8xl leading-[0.9] mb-8 text-shadow-lg">
                NUTRIR ES<br />MÁS QUE<br />COMER
              </h1>
              <p className="font-serif italic text-xl md:text-2xl opacity-90 font-light max-w-lg leading-relaxed">
                {ebookContent.subtitle}
              </p>

              <button
                onClick={() => document.getElementById('nutricion-real')?.scrollIntoView({ behavior: 'smooth' })}
                className="mt-12 bg-[#c8db6c] hover:bg-[#b9b1ff] text-[#240046] hover:text-white font-bold py-4 px-10 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Leer Ebook
              </button>
            </div>

            {/* Image Hero Right 55% with Custom Radius */}
            <div className="w-full md:w-1/2 h-[50vh] md:h-[85vh] relative mt-10 md:mt-0">
              <div className="absolute top-0 right-0 bottom-0 left-4 md:left-20 bg-[#240046] rounded-tl-[100px] md:rounded-bl-[100px] overflow-hidden border-l-4 border-[#c8db6c]/30 shadow-2xl">
                <Image
                  src={ebookContent.sections[0].image || "/images/arianna-pointing.jpg"}
                  alt="Arianna Hero"
                  fill
                  className="object-cover object-top opacity-90 hover:scale-105 transition-transform duration-[2s]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#240046] via-transparent to-transparent opacity-60"></div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 animate-bounce text-white/50">
            <ArrowDown size={32} />
          </div>
        </section>


        {/* --- SECTION 2: NUTRICION REAL (Clean Layout) --- */}
        <section id="nutricion-real" className="h-screen w-full snap-start relative flex items-center bg-white overflow-hidden">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="relative z-10 pl-8 md:pl-20">
              {/* Decorative Dot */}
              <div className="absolute -left-4 top-0 w-20 h-20 rounded-full border border-[#c8db6c] opacity-50 -z-10"></div>

              <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#240046] leading-[1.1] mb-12">
                QUÉ ES REALMENTE<br />LA NUTRICIÓN
              </h2>

              <div className="space-y-6 text-lg text-neutral-600 font-light leading-relaxed">
                {ebookContent.sections[1].content.map((p, i) => {
                  if (p.startsWith("•")) {
                    return (
                      <div key={i} className="flex items-start gap-4 pl-4">
                        <span className="w-2 h-2 mt-2.5 bg-[#c8db6c] rounded-full shrink-0" />
                        <p className="font-medium text-[#240046]">{p.replace("•", "").trim()}</p>
                      </div>
                    );
                  }
                  return <p key={i}>{p}</p>;
                })}
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-[60vh] w-full rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500">
              <Image src={ebookContent.sections[1].image || "/images/arianna-can.jpg"} alt="Nutricion Real" fill className="object-cover" />
            </div>
          </div>
        </section>


        {/* --- SECTION 3: DIETA (Gradient BG) --- */}
        <section id="dieta" className="h-screen w-full snap-start relative flex items-center bg-gradient-to-b from-[#efe8f8]/50 to-white">
          <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row gap-12 items-center">
            {/* Left Image */}
            <div className="relative w-full md:w-1/2 h-[60vh] rounded-[3rem] overflow-hidden shadow-xl border-4 border-white">
              <Image src={ebookContent.sections[2].image || "/images/arianna-bag.jpg"} alt="Dieta" fill className="object-cover" />
              {/* Floating Badge */}
              <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg">
                <Utensils className="text-[#c8db6c] w-10 h-10" />
              </div>
            </div>

            {/* Right Content */}
            <div className="w-full md:w-1/2">
              <h2 className="text-5xl md:text-7xl font-serif font-bold text-[#b9b1ff]/30 absolute -top-20 right-0 pointer-events-none select-none">
                DIETA
              </h2>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#240046] mb-8 relative z-10">
                La dieta es todo...<br />pero no lo que piensas
              </h2>
              <div className="bg-white p-8 rounded-2xl shadow-sm border-l-8 border-[#c8db6c]">
                {ebookContent.sections[2].content.map((p, i) => (
                  <p key={i} className="mb-4 text-neutral-600 leading-relaxed">{p}</p>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* --- SECTION 4: CONSULTA (Quote Focus) --- */}
        <section id="consulta" className="h-screen w-full snap-start relative flex flex-col justify-center items-center bg-white">
          <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
            <Stethoscope className="w-16 h-16 text-[#b9b1ff] mx-auto mb-8 opacity-50" strokeWidth={1} />

            <blockquote className="font-serif italic text-3xl md:text-5xl text-[#240046] leading-tight mb-12">
              "No vienes a recibir un menú;<br />vienes a ser <span className="text-[#008b92] underline decoration-[#c8db6c] decoration-4 underline-offset-4">escuchado</span>."
            </blockquote>

            <div className="flex flex-col md:flex-row items-center gap-8 text-left mt-12 bg-[#fafafa] p-8 rounded-3xl mx-auto shadow-inner max-w-3xl">
              <div className="w-24 h-24 relative rounded-full overflow-hidden shrink-0 border-4 border-white shadow-md">
                <Image src={ebookContent.sections[3].image || "/images/arianna-consult.jpg"} alt="Arianna" fill className="object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-[#240046] text-xl mb-2">En consulta trabajamos:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-neutral-600">
                  <li className="flex items-center gap-2"><div className="w-2 h-2 bg-[#c8db6c] rounded-full" /> Historia Clínica</li>
                  <li className="flex items-center gap-2"><div className="w-2 h-2 bg-[#c8db6c] rounded-full" /> Entorno Laboral</li>
                  <li className="flex items-center gap-2"><div className="w-2 h-2 bg-[#c8db6c] rounded-full" /> Emociones</li>
                  <li className="flex items-center gap-2"><div className="w-2 h-2 bg-[#c8db6c] rounded-full" /> Hábitos Reales</li>
                </ul>
              </div>
            </div>
          </div>
        </section>


        {/* --- SECTION 5: SACIEDAD (3 Pillars Cards) --- */}
        <section id="saciedad" className="h-screen w-full snap-start relative flex flex-col justify-center bg-gradient-to-b from-[#f7ffd0]/20 to-white px-4">
          <div className="text-center mb-12">
            <span className="text-[#008b92] font-bold tracking-widest uppercase text-sm">Metodología NutritionSays</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#240046] mt-2">Los 3 Pilares</h2>
          </div>

          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
            {/* Card 1 */}
            <div className="bg-white/60 backdrop-blur-xl border border-[#b9b1ff]/30 p-8 rounded-[2rem] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="bg-[#c8db6c] w-12 h-12 rounded-full flex items-center justify-center text-[#240046] mb-6">1</div>
              <h3 className="text-2xl font-serif font-bold text-[#240046] mb-4">Saciedad</h3>
              <p className="text-neutral-600 leading-relaxed">Aprender a escuchar cuando tu cuerpo dice "es suficiente", sin culpa ni exceso. Conexión interna real.</p>
            </div>
            {/* Card 2 */}
            <div className="bg-white/80 backdrop-blur-xl border border-[#b9b1ff] p-8 rounded-[2rem] shadow-xl scale-105 z-10">
              <div className="bg-[#240046] w-12 h-12 rounded-full flex items-center justify-center text-white mb-6">2</div>
              <h3 className="text-2xl font-serif font-bold text-[#240046] mb-4">Equilibrio</h3>
              <p className="text-neutral-600 leading-relaxed">Comer nutritivo y disfrutable. El equilibrio flexible es la única forma de sostenibilidad.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white/60 backdrop-blur-xl border border-[#b9b1ff]/30 p-8 rounded-[2rem] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="bg-[#008b92] w-12 h-12 rounded-full flex items-center justify-center text-white mb-6">3</div>
              <h3 className="text-2xl font-serif font-bold text-[#240046] mb-4">Personalización</h3>
              <p className="text-neutral-600 leading-relaxed">Tu fórmula es única. Adaptamos el plan a tu vida, no tu vida al plan.</p>
            </div>
          </div>
        </section>


        {/* --- SECTION 6: MOVIMIENTO (Full Image Overlay) --- */}
        <section id="movimiento" className="h-screen w-full snap-start relative flex items-center justify-center bg-[#240046] text-white">
          <div className="absolute inset-0 opacity-60">
            <Image src={ebookContent.sections[5].image || "/images/arianna-run.jpg"} alt="Movimiento" fill className="object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#240046]/90 via-[#240046]/40 to-transparent"></div>

          <div className="relative z-10 max-w-4xl px-8 text-center md:text-left mr-auto md:ml-20">
            <Move className="w-20 h-20 text-[#c8db6c] mb-6 inline-block md:block" />
            <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8 text-shadow-lg">
              Tu cuerpo fue<br />hecho para <span className="italic text-[#c8db6c]">vivir</span>
            </h2>
            <p className="text-xl md:text-2xl font-light mb-12 max-w-xl leading-relaxed opacity-90">
              El ejercicio no es el castigo por lo que comiste. Es la celebración de lo que puedes hacer.
            </p>
            <div className="inline-block bg-white/20 backdrop-blur-md border border-white/30 px-8 py-4 rounded-full text-lg font-bold">
              ✨ Incrementa tu NEAT diario
            </div>
          </div>
        </section>


        {/* --- SECTION 7: APRENDER (Clean End) --- */}
        <section id="aprender" className="h-screen w-full snap-start relative flex items-center bg-white">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 relative order-2 md:order-1">
              <div className="p-10 border-2 border-[#240046] rounded-tl-[4rem] rounded-br-[4rem] relative">
                <div className="absolute -top-6 -left-6 bg-white p-2">
                  <Heart className="w-12 h-12 text-[#b9b1ff]" fill="currentColor" />
                </div>
                <h3 className="text-3xl font-serif font-bold text-[#240046] mb-6">Takeaways Finales</h3>
                <ul className="space-y-4">
                  {ebookContent.sections[6].content.filter(x => x.startsWith("•")).map((item, i) => (
                    <li key={i} className="text-lg text-neutral-700 font-medium flex gap-3">
                      <span className="text-[#c8db6c] text-2xl">•</span> {item.replace("• ", "")}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <div className="relative h-[400px] w-full rounded-full overflow-hidden border-8 border-[#f7ffd0] shadow-2xl">
                <Image src={ebookContent.sections[6].image || "/images/arianna-heart.jpg"} alt="Aprender" fill className="object-cover" />
              </div>
              <div className="text-center mt-8">
                <h2 className="text-4xl font-serif font-bold text-[#240046]">Conocimiento es Poder</h2>
              </div>
            </div>
          </div>
        </section>


        {/* --- SECTION 8: FOOTER (Dark Gradient) --- */}
        <section id="footer-cta" className="h-screen w-full snap-start relative flex flex-col justify-center items-center bg-gradient-to-t from-[#0f0020] to-[#240046] text-white">
          <div className="text-center max-w-3xl px-6">
            <div className="w-40 h-20 relative mx-auto mb-12 opacity-80">
              <Image src="/images/logo-arianna-new.png" alt="Logo" fill className="object-contain brightness-0 invert" />
            </div>

            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-8">
              Tu camino empieza hoy
            </h2>
            <p className="text-xl text-white/70 mb-16 leading-relaxed">
              Si este ebook resonó contigo, estoy lista para acompañarte en el siguiente paso de tu proceso.
            </p>

            <a href="https://instagram.com/nutritionsays" target="_blank" className="bg-[#c8db6c] hover:bg-white text-[#240046] font-bold text-xl py-5 px-12 rounded-full shadow-[0_0_30px_rgba(200,219,108,0.4)] transition-all hover:scale-110 inline-flex items-center gap-3">
              <Instagram /> Consulta Online
            </a>

            <div className="mt-24 pt-8 border-t border-white/10 w-full flex justify-between text-sm text-white/30 font-light">
              <span>© 2026 NutritionSays</span>
              <span>Designed with Love</span>
            </div>
          </div>

          {/* PDF Button Fixed Bottom Right */}
          <button
            onClick={() => window.print()}
            className="fixed bottom-8 right-8 bg-white text-[#240046] p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 print:hidden"
            title="Descargar PDF"
          >
            <Download size={24} />
          </button>
        </section>

      </main>
    </div>
  );
}
