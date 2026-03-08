import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Sponsors = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const headerY = useTransform(scrollYProgress, [0, 0.4], [100, 0]);
    const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

    // Shenron / Super Saiyan massive ambient glow effects bound to scroll position
    const glow1Y = useTransform(scrollYProgress, [0, 1], [-300, 100]);
    const glow1Scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);
    
    const glow2Y = useTransform(scrollYProgress, [0, 1], [200, -200]);
    const glow2Scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 0.8, 1.2]);

    // Mock sponsor data
    const tiers = [
        {
            name: "Super Saiyan Tier",
            sponsors: ["https://placehold.co/200x80/1a1040/ffcc00?text=TechCorp", "https://placehold.co/200x80/1a1040/ffcc00?text=GlobalNet"],
            size: "h-20 md:h-24",
            start: 0.2
        },
        {
            name: "Kaioken Tier",
            sponsors: ["https://placehold.co/150x60/1a1040/ff5e00?text=DevTools", "https://placehold.co/150x60/1a1040/ff5e00?text=CloudSys", "https://placehold.co/150x60/1a1040/ff5e00?text=DataInc"],
            size: "h-16 md:h-16",
            start: 0.4
        },
        {
            name: "Base Tier",
            sponsors: ["https://placehold.co/120x50/1a1040/00f0ff?text=StartupA", "https://placehold.co/120x50/1a1040/00f0ff?text=StartupB", "https://placehold.co/120x50/1a1040/00f0ff?text=StartupC", "https://placehold.co/120x50/1a1040/00f0ff?text=StartupD"],
            size: "h-12 md:h-12",
            start: 0.6
        }
    ];

    return (
        <section id="sponsors" ref={sectionRef} className="py-24 bg-goku-dark relative border-t border-white/5 overflow-hidden">
            
            {/* Background Shenron/Energy Ambient Glow */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-0">
                <motion.div 
                    style={{ y: glow1Y, scale: glow1Scale }}
                    className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[150px] mix-blend-screen"
                />
                <motion.div 
                    style={{ y: glow2Y, scale: glow2Scale }}
                    className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-goku-yellow/10 rounded-full blur-[120px] mix-blend-screen"
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    style={{ y: headerY, opacity: headerOpacity }}
                    className="mb-16"
                >
                    <h2 className="font-heading text-5xl md:text-6xl text-white mb-4 uppercase drop-shadow-[0_0_15px_rgba(69,47,122,0.5)]">
                        Powered By <span className="text-goku-indigo">Titans</span>
                    </h2>
                    <div className="h-1 w-24 bg-goku-indigo mx-auto shadow-[0_0_10px_rgba(69,47,122,0.8)]"></div>
                </motion.div>

                <div className="space-y-16">
                    {tiers.map((tier, index) => {
                        const end = tier.start + 0.2;
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        const tierScale = useTransform(scrollYProgress, [tier.start, end], [0.8, 1]);
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        const tierOpacity = useTransform(scrollYProgress, [tier.start, end], [0, 1]);

                        return (
                            <motion.div
                                key={index}
                                style={{ scale: tierScale, opacity: tierOpacity }}
                            >
                                <h3 className="font-sans text-xl text-goku-indigo mb-8 uppercase tracking-[0.2em] font-bold">{tier.name}</h3>
                                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                                    {tier.sponsors.map((src, i) => (
                                        <div key={i} className={`grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 cursor-pointer ${tier.size}`}>
                                            <img src={src} alt={`Sponsor ${i}`} className="h-full w-auto object-contain rounded-lg shadow-2xl opacity-60 hover:opacity-100" />
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Sponsors;
