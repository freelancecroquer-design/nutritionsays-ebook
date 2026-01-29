
"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import Image from "next/image";
import { clsx } from "clsx";

interface SectionCardProps {
    title: string;
    subtitle: string;
    content: string[];
    icon: LucideIcon;
    index: number;
    image?: string;
    imageAlt?: string;
    isSignature?: boolean;
}

export const SectionCard = ({ title, subtitle, content, icon: Icon, index, image, imageAlt, isSignature }: SectionCardProps) => {
    const isEven = index % 2 === 0;

    return (
        <div className="print-break-inside-avoid mb-32 print:mb-16">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={clsx(
                    "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center",
                    !isEven && "lg:grid-flow-dense" // For alternating layout
                )}
            >
                {/* Text Content Side */}
                <div className={clsx("order-2", !isEven ? "lg:col-start-2" : "lg:col-start-1")}>
                    <div className="flex items-center gap-4 mb-8">
                        <span className="w-16 h-[1px] bg-[#fbbf24] hidden md:block" />
                        <span className="text-[#fbbf24] font-bold tracking-[0.2em] text-xs uppercase">
                            Capítulo {index + 1}
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#240046] mb-6 leading-[1.05]">
                        {title}
                    </h2>
                    <h3 className="text-xl md:text-2xl text-[#008b92] font-serif italic mb-10 font-normal">
                        {subtitle}
                    </h3>

                    <div className="space-y-6 text-lg text-[#240046]/80 font-normal leading-relaxed">
                        {content.map((paragraph, i) => (
                            <p key={i} className="first-letter:text-3xl first-letter:font-serif first-letter:mr-1 first-letter:text-[#240046]">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Visual Side */}
                <div className={clsx("order-1 relative w-full group", !isEven ? "lg:col-start-1" : "lg:col-start-2")}>
                    {/* If it's a signature, treat it differently (no bounding box, just the image) */}
                    {isSignature && image ? (
                        <div className="w-full flex justify-center lg:justify-start">
                            <div className="relative w-64 h-40 transform rotate-[-5deg]">
                                <Image
                                    src={image}
                                    alt={imageAlt || "Signature"}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    ) : image ? (
                        <div className="relative h-[600px] w-full rounded-[2px] overflow-hidden shadow-2xl">
                            <Image
                                src={image}
                                alt={imageAlt || title}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            {/* Clean overlay, no heavy gradients, purely photographic */}

                            {/* Minimal Tag */}
                            <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-sm text-[#240046] text-xs font-bold uppercase tracking-widest print:hidden">
                                NutritionSays
                            </div>
                        </div>
                    ) : (
                        <div className="w-full h-[500px] bg-[#240046]/5 flex items-center justify-center">
                            <Icon size={64} className="text-[#240046]/20" />
                        </div>
                    )}
                </div>
            </motion.div>
        </div>
    );
};
