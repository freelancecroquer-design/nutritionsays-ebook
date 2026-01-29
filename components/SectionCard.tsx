
"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface SectionCardProps {
    title: string;
    subtitle: string;
    content: string[];
    icon: LucideIcon;
    index: number;
}

export const SectionCard = ({ title, subtitle, content, icon: Icon, index }: SectionCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }} // Bezier for smooth feel
            className="glass-panel rounded-3xl p-8 md:p-12 mb-16 print-break-inside-avoid relative overflow-hidden group hover:bg-white/70 transition-colors duration-700"
        >
            {/* Decorative Blur Background inside card */}
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#b9b1ff]/20 rounded-full blur-[80px] group-hover:bg-[#b9b1ff]/30 transition-all duration-700" />
            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-[#c8db6c]/20 rounded-full blur-[80px] group-hover:bg-[#c8db6c]/30 transition-all duration-700" />

            <div className="relative z-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row gap-6 items-start mb-8 border-b border-[#240046]/10 pb-8">
                    <div className="p-4 bg-white/50 backdrop-blur-md rounded-2xl text-[#240046] shadow-sm border border-white/40">
                        <Icon size={32} strokeWidth={1.5} />
                    </div>
                    <div>
                        <span className="text-[#008b92] font-bold tracking-widest text-xs uppercase mb-3 block">
                            Capítulo {index + 1}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#240046] leading-tight mb-2">
                            {title}
                        </h2>
                        <h3 className="text-lg md:text-xl text-[#240046]/70 font-serif italic">
                            {subtitle}
                        </h3>
                    </div>
                </div>

                {/* Content Body */}
                <div className="space-y-6 text-lg leading-relaxed text-[#240046]/80 font-normal">
                    {content.map((paragraph, i) => (
                        <p key={i} className={paragraph.startsWith("•") || paragraph.match(/^\d\./) ? "pl-4 font-medium text-[#240046]" : ""}>
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};
