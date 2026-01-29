
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
}

export const SectionCard = ({ title, subtitle, content, icon: Icon, index, image, imageAlt }: SectionCardProps) => {
    const isEven = index % 2 === 0;

    return (
        <div className="print-break-inside-avoid mb-24 print:mb-12">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={clsx(
                    "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
                    !isEven && "lg:grid-flow-dense" // For alternating layout
                )}
            >
                {/* Text Content Side */}
                <div className={clsx("order-2", !isEven ? "lg:col-start-2" : "lg:col-start-1")}>
                    <div className="flex items-center gap-4 mb-6">
                        <span className="w-12 h-[1px] bg-secondary-DEFAULT hidden md:block" />
                        <span className="text-secondary-DEFAULT font-bold tracking-widest text-xs uppercase">
                            Capítulo {index + 1}
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4 leading-[1.1]">
                        {title}
                    </h2>
                    <h3 className="text-xl text-primary/70 font-serif italic mb-8">
                        {subtitle}
                    </h3>

                    <div className="space-y-6 text-lg text-primary/80 font-normal leading-relaxed">
                        {content.map((paragraph, i) => (
                            <p key={i}>
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Visual Side */}
                <div className={clsx("order-1 relative h-[500px] w-full rounded-[2rem] overflow-hidden shadow-2xl group", !isEven ? "lg:col-start-1" : "lg:col-start-2")}>
                    {image ? (
                        <div className="relative w-full h-full">
                            <Image
                                src={image}
                                alt={imageAlt || title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-60 mix-blend-multiply" />

                            {/* Floating Icon */}
                            <div className="absolute bottom-6 right-6 p-4 bg-white/90 backdrop-blur rounded-full shadow-lg text-primary print:hidden">
                                <Icon size={24} />
                            </div>
                        </div>
                    ) : (
                        <div className="w-full h-full bg-primary/5 flex items-center justify-center">
                            <Icon size={64} className="text-primary/20" />
                        </div>
                    )}
                </div>
            </motion.div>
        </div>
    );
};
