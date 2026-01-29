
"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface SectionCardProps {
    title: string;
    subtitle: string;
    content: string;
    icon: LucideIcon;
    index: number;
}

export const SectionCard = ({ title, subtitle, content, icon: Icon, index }: SectionCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="glass-panel rounded-2xl p-8 md:p-12 mb-8 print-break-inside-avoid relative overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:bg-white/60"
        >
            <div className="absolute top-0 right-0 p-32 bg-secondary/10 rounded-full blur-3xl -mr-16 -mt-16 transition-all duration-500 group-hover:bg-secondary/20" />

            <div className="relative z-10 flex gap-6 flex-col md:flex-row items-start">
                <div className="p-4 bg-primary/5 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                    <Icon size={32} strokeWidth={1.5} />
                </div>
                <div className="space-y-4">
                    <div>
                        <span className="text-secondary-DEFAULT font-bold tracking-widest text-xs uppercase mb-2 block">
                            Capítulo {index + 1}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                            {title}
                        </h2>
                        <h3 className="text-xl text-primary/60 italic font-normal">
                            {subtitle}
                        </h3>
                    </div>
                    <p className="text-lg leading-relaxed text-text/80 font-normal max-w-prose">
                        {content}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};
