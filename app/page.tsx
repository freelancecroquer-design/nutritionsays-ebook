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

      <main className="w-full font-sans text-[#240046]">

        {/* --- SECTION 1: HERO / PORTADA (Refined Mobile & Desktop) --- */}
        <section id="intro" className="min-h-screen w-full snap-start relative flex flex-col items-center justify-center bg-[#240046] overflow-hidden pt-20 md:pt-0">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#4a0a77_0%,_#240046_60%)]"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>

          {/* Content Container */}
          <div className="relative z-10 container mx-auto px-6 h-full flex flex-col md:flex-row items-center justify-between">

            {/* Text Side (Top on mobile) */}
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-20 mb-8 md:mb-0">
              <div className="mb-6 relative">
                <span className="block text-[#c8db6c] tracking-[0.3em] text-xs md:text-sm font-bold uppercase mb-2">Ebook Oficial 2026</span>
                <div className="h-1 w-12 bg-[#c8db6c] mx-auto md:mx-0"></div>
              </div>

              <h1 className="font-serif font-extrabold text-5xl md:text-7xl lg:text-9xl text-white leading-[0.9] tracking-tight mb-6 drop-shadow-2xl">
                NUTRIR<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c8db6c] to-[#fff]">ES MÁS</span><br />
                QUE COMER
              </h1>

              <p className="text-white/80 text-lg md:text-2xl font-light max-w-md leading-relaxed mb-8">
                {ebookContent.subtitle}
              </p>

              <button
                onClick={() => document.getElementById('nutricion-real')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-8 py-4 bg-[#c8db6c] text-[#240046] font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(200,219,108,0.5)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  EMPEZAR A LEER <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </button>
            </div>

            {/* Image Side (Bottom on mobile) */}
            <div className="w-full md:w-1/2 h-[45vh] md:h-[90vh] relative flex items-end justify-center md:justify-end mt-4 md:mt-0">
              {/* Decorative Circle Behind */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] md:w-[600px] h-[280px] md:h-[600px] bg-[#b9b1ff] rounded-full blur-[80px] opacity-20"></div>

              <div className="relative w-full h-full max-w-sm md:max-w-none">
                <Image
                  src={ebookContent.sections[0].image || "/images/arianna-new-seated.jpg"}
                  alt="Arianna Intro"
                  fill
                  className="object-contain object-bottom md:object-right-bottom drop-shadow-2xl hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />
              </div>
            </div>
          </div>
        </section>


        {/* --- SECTION 2: NUTRICION REAL (Editorial / Clean) --- */}
        <section id="nutricion-real" className="min-h-screen w-full snap-start relative flex items-center bg-white py-20 px-4 md:px-0">
          <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

            {/* Image Column */}
            <div className="col-span-1 md:col-span-5 relative order-2 md:order-1">
              <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl transform md:-rotate-3 hover:rotate-0 transition-all duration-500">
                <Image src={ebookContent.sections[1].image || "/images/arianna-nutricion-real.png"} alt="Nutricion Real" fill className="object-cover bg-[#f0f0f0]" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#240046]/20 to-transparent"></div>
              </div>
              {/* Floating Element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#c8db6c] rounded-full flex items-center justify-center shadow-lg animate-pulse hidden md:flex">
                <span className="font-serif font-bold text-[#240046] text-xl text-center leading-tight">100%<br />Real</span>
              </div>
            </div>

            {/* Text Column */}
            <div className="col-span-1 md:col-span-7 order-1 md:order-2 md:pl-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#efe8f8] rounded-full flex items-center justify-center text-[#240046]">
                  <Scale size={24} strokeWidth={1.5} />
                </div>
                <span className="uppercase tracking-widest text-xs font-bold text-neutral-400">Capítulo 01</span>
              </div>

              <h2 className="font-serif font-bold text-4xl md:text-6xl text-[#240046] mb-8 leading-tight">
                Qué es realmente<br /><span className="text-[#b9b1ff]">la nutrición</span>
              </h2>

              <div className="space-y-6 text-lg text-neutral-600 font-light leading-relaxed">
                {ebookContent.sections[1].content.map((p, i) => (
                  p.startsWith("•") ?
                    (
                      <div key={i} className="flex gap-4 p-4 bg-[#fafafa] rounded-xl border border-neutral-100 hover:border-[#c8db6c] transition-colors">
                        <div className="min-w-[8px] h-[8px] mt-2.5 rounded-full bg-[#c8db6c]"></div>
                        <p className="font-medium text-[#240046]">{p.replace("•", "").trim()}</p>
                      </div>
                    ) :
                    <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* --- SECTION 3: DIETA (Split Deep Color) --- */}
        <section id="dieta" className="min-h-screen w-full snap-start relative flex items-center bg-[#efe8f8]">
          <div className="container mx-auto px-6 h-full flex flex-col md:flex-row items-stretch">

            {/* Content Left */}
            <div className="w-full md:w-1/2 flex flex-col justify-center py-20 pr-0 md:pr-12 relative z-10">
              <h2 className="font-serif font-bold text-6xl md:text-8xl text-white opacity-100 md:text-[#240046]/10 absolute top-10 left-0 md:-left-20 pointer-events-none select-none">
                DIETA
              </h2>

              <h3 className="font-serif text-3xl md:text-5xl text-[#240046] font-bold mb-6 leading-tight mt-16 md:mt-0">
                La dieta es todo...<br />
                <span className="bg-[#c8db6c] px-2 text-white inline-block transform -rotate-1">pero no lo que piensas</span>
              </h3>
              <div className="bg-white/90 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-xl space-y-6 border border-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#c8db6c]/10 rounded-full blur-3xl -z-10"></div>

                {ebookContent.sections[2].content.map((p, i) => {
                  if (p.startsWith("•")) {
                    return (
                      <div key={i} className="flex items-start gap-4">
                        <div className="w-6 h-6 rounded-full bg-[#f7ffd0] flex items-center justify-center shrink-0 mt-0.5 text-[#c8db6c]">
                          <Utensils size={14} />
                        </div>
                        <p className="text-neutral-600 font-medium leading-relaxed">{p.replace("•", "").trim()}</p>
                      </div>
                    )
                  }
                  return (
                    <p key={i} className={clsx("text-neutral-600 leading-relaxed", i === 0 ? "font-serif text-xl text-[#240046] italic" : "text-base")}>
                      {p}
                    </p>
                  )
                })}
              </div>
            </div>

            {/* Image Right (Full height) */}
            <div className="w-full md:w-1/2 relative min-h-[40vh] md:min-h-full">
              <div className="absolute inset-0 md:inset-4 md:rounded-[40px] overflow-hidden shadow-2xl">
                <Image src={ebookContent.sections[2].image || "/images/arianna-dieta.png"} alt="Dieta" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-10 -left-10 md:bottom-10 md:-left-10 bg-[#240046] text-white p-6 rounded-2xl shadow-xl shadow-[#240046]/30 max-w-xs hidden md:block">
                <Utensils className="mb-4 text-[#c8db6c]" />
                <p className="font-bold text-lg">“Tu dieta debe adaptarse a ti, no tú a ella.”</p>
              </div>
            </div>
          </div>
        </section>


        {/* --- SECTION 4: CONSULTA (Feature Focus) --- */}
        <section id="consulta" className="min-h-screen w-full snap-start relative flex flex-col items-center justify-center bg-white py-12">
          <div className="absolute top-0 w-full h-1/2 bg-[#240046] rounded-b-[50px] md:rounded-b-[100px] z-0"></div>

          <div className="relative z-10 container mx-auto px-4 max-w-5xl">
            <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row">

              {/* Image Area */}
              <div className="w-full md:w-5/12 relative min-h-[300px] md:min-h-full bg-neutral-100">
                <Image src={ebookContent.sections[3].image || "/images/arianna-consulta.png"} alt="Consulta" fill className="object-cover object-center" />
              </div>

              {/* Content Area */}
              <div className="w-full md:w-7/12 p-8 md:p-14 flex flex-col justify-center">
                <Stethoscope className="w-12 h-12 text-[#b9b1ff] mb-6" />
                <h2 className="font-serif font-bold text-3xl md:text-5xl text-[#240046] mb-2">Más que un plan</h2>
                <h3 className="font-sans text-[#c8db6c] font-bold uppercase tracking-wider text-sm mb-8">El valor de ser escuchado</h3>

                <ul className="grid grid-cols-1 gap-4">
                  {ebookContent.sections[3].content.slice(1).map((item, i) => (
                    <li key={i} className="flex items-center gap-4 p-3 hover:bg-neutral-50 rounded-lg transition-colors">
                      <div className="bg-[#240046] text-white w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0">
                        {i + 1}
                      </div>
                      <span className="text-neutral-700 font-medium">{item.replace("•", "").trim()}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-white/80 font-serif italic text-xl">"No vienes a ser juzgado, vienes a ser escuchado"</p>
            </div>
          </div>
        </section>


        {/* --- SECTION 5: SACIEDAD (Interactive Grid) --- */}
        <section id="saciedad" className="min-h-screen w-full snap-start relative flex flex-col items-center justify-center bg-gradient-to-br from-[#f7ffd0] via-white to-white py-20 px-4">
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
              <div className="w-full md:w-1/2">
                <span className="text-[#008b92] font-bold tracking-widest uppercase text-sm mb-2 block">Metodología</span>
                <h2 className="text-5xl md:text-7xl font-serif font-bold text-[#240046] leading-none mb-6">
                  Los 3 Pilares<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c8db6c] to-[#008b92]">NutritionSays</span>
                </h2>
                <p className="text-lg text-neutral-600 mb-8 max-w-sm">Porque la nutrición no es una línea recta, es un triángulo de equilibrio constante.</p>
              </div>
              <div className="w-full md:w-1/2 relative h-[300px] md:h-[400px]">
                <Image src={ebookContent.sections[4].image || "/images/arianna-saciedad.png"} alt="Saciedad" fill className="object-contain" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="group bg-white p-8 rounded-[2rem] shadow-lg border border-transparent hover:border-[#c8db6c] transition-all hover:-translate-y-2">
                <div className="w-16 h-16 bg-[#f7ffd0] rounded-2xl flex items-center justify-center text-[#240046] mb-6 group-hover:scale-110 transition-transform">
                  <Activity />
                </div>
                <h3 className="font-serif font-bold text-2xl text-[#240046] mb-3">1. Saciedad</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">Aprende a escuchar a tu cuerpo. Él sabe cuánto necesitas mejor que cualquier app.</p>
              </div>
              {/* Card 2 */}
              <div className="group bg-[#240046] p-8 rounded-[2rem] shadow-xl hover:-translate-y-2 transition-all">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-[#c8db6c] mb-6 group-hover:scale-110 transition-transform">
                  <Scale />
                </div>
                <h3 className="font-serif font-bold text-2xl text-white mb-3">2. Equilibrio</h3>
                <p className="text-white/60 text-sm leading-relaxed">Sin extremos. El 80/20 que te permite disfrutar de la vida mientras te cuidas.</p>
              </div>
              {/* Card 3 */}
              <div className="group bg-white p-8 rounded-[2rem] shadow-lg border border-transparent hover:border-[#008b92] transition-all hover:-translate-y-2">
                <div className="w-16 h-16 bg-[#e0f7f8] rounded-2xl flex items-center justify-center text-[#008b92] mb-6 group-hover:scale-110 transition-transform">
                  <Heart />
                </div>
                <h3 className="font-serif font-bold text-2xl text-[#240046] mb-3">3. Personal</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">Tu contexto importa. Adaptamos el plan a tu vida, no tu vida al plan.</p>
              </div>
            </div>
          </div>
        </section>


        {/* --- SECTION 6: MOVIMIENTO (Bold Visuals) --- */}
        <section id="movimiento" className="min-h-screen w-full snap-start relative flex items-center bg-[#240046] overflow-hidden">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-[#2a0052] skew-x-12 translate-x-32 hidden md:block"></div>

          <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full">
            <div className="relative order-2 md:order-1 h-[50vh] md:h-[80vh] w-full">
              <Image src={ebookContent.sections[5].image || "/images/arianna-movimiento.png"} alt="Movimiento" fill className="object-contain object-bottom md:object-center" />
            </div>

            <div className="order-1 md:order-2 text-center md:text-left pt-20 md:pt-0">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#c8db6c] text-[#c8db6c] mb-8">
                <Move size={16} /> <span>Vida Activa</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8">
                Tu cuerpo fue<br />hecho para <span className="text-[#c8db6c] italic">vivir</span>
              </h2>
              <p className="text-xl text-white/70 font-light mb-12">
                El ejercicio no es el castigo por lo que comiste. Es la celebración de lo que puedes hacer.
              </p>

              <div className="grid grid-cols-1 gap-4">
                <div className="bg-white/5 p-6 rounded-xl border border-white/10 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#c8db6c] flex items-center justify-center text-[#240046] font-bold">A</div>
                  <span className="text-white font-medium">Incrementa tu NEAT diario</span>
                </div>
                <div className="bg-white/5 p-6 rounded-xl border border-white/10 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#c8db6c] flex items-center justify-center text-[#240046] font-bold">B</div>
                  <span className="text-white font-medium">Prioriza ejercicios de fuerza</span>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* --- SECTION 7: APRENDER / FOOTER (Minimalist Clean) --- */}
        <section id="aprender" className="min-h-screen w-full snap-start relative flex flex-col justify-between bg-white pt-20">
          <div className="container mx-auto px-6 flex flex-col md:flex-row gap-12 items-center flex-grow">
            <div className="w-full md:w-1/2">
              <Heart className="w-16 h-16 text-[#b9b1ff] mb-6 mx-auto md:mx-0" />
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#240046] mb-8 text-center md:text-left">
                El conocimiento<br />es poder
              </h2>
              <div className="bg-[#fcfcfc] p-8 border-l-4 border-[#c8db6c] shadow-sm">
                <p className="text-neutral-600 italic text-lg mb-6">"Te llevas herramientas para toda la vida. La nutrición es autocuidado, no castigo."</p>
                <div className="flex items-center gap-4">
                  <div className="text-[#240046] font-bold">Arianna García</div>
                  <div className="h-px flex-grow bg-neutral-200"></div>
                  <div className="text-neutral-400 text-sm">NutritionSays</div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative h-[400px] md:h-[600px]">
              <Image src={ebookContent.sections[6].image || "/images/arianna-aprender.png"} alt="Aprender" fill className="object-contain" />
            </div>
          </div>

          <div className="bg-[#240046] text-white py-12 px-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-4">
                <Image src="/images/logo-arianna-new.png" width={40} height={40} alt="Logo" className="brightness-0 invert opacity-50" />
                <span className="opacity-50 text-sm tracking-widest">© 2026 NUTRITIONSAYS</span>
              </div>

              <a href="https://instagram.com/nutritionsays" target="_blank" className="flex items-center gap-2 hover:text-[#c8db6c] transition-colors">
                <Instagram size={20} /> @nutritionsays
              </a>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
