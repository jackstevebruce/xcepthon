import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const headerY = useTransform(scrollYProgress, [0, 0.4], [100, 0]);
    const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

    // Anime Speed Lines specific Scroll bindings
    const linesOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.08, 0]);
    const linesY = useTransform(scrollYProgress, [0, 1], [-200, 200]);

    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            q: "Who can participate?",
            a: "XCEPTHON is open to all college students, recent graduates, and self-taught developers. Whether you're a seasoned veteran or a curious beginner, if you have the drive to build, you belong here."
        },
        {
            q: "How much does it cost?",
            a: "Zero. Zilch. Nada. Participation is entirely free. We've got your food, swag, and caffeine covered for the entire 48 hours."
        },
        {
            q: "Do I need a team?",
            a: "You can hack solo, but we highly recommend teams of 2-4 members. If you don't have a team, don't worry! We'll have a team-building session at the start of the event."
        },
        {
            q: "What if I don't know how to code?",
            a: "Hackathons aren't just for coders! Designers, product managers, and visionaries are essential for a winning project. Plus, we'll have mentors and workshops to help you learn on the fly."
        },
        {
            q: "What should I bring?",
            a: "Bring your laptop, charger, student ID, comfortable clothes, toiletries, and an unstoppable mindset. We'll handle the rest."
        }
    ];

    return (
        <section ref={sectionRef} className="py-24 bg-goku-dark relative overflow-hidden">
            
            {/* Background Anime Speed Lines */}
            <motion.div 
                style={{ opacity: linesOpacity, y: linesY }}
                className="absolute inset-0 pointer-events-none z-0"
            >
                <div 
                    className="absolute inset-0 w-full h-[150%]"
                    style={{
                        backgroundImage: `repeating-linear-gradient(
                            90deg,
                            transparent,
                            transparent 20px,
                            rgba(255, 255, 255, 1) 20px,
                            rgba(255, 255, 255, 0.8) 22px
                        )`,
                        maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
                        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)'
                    }}
                />
            </motion.div>


            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div 
                    style={{ y: headerY, opacity: headerOpacity }}
                    className="text-center mb-16"
                >
                    <h2 className="font-heading text-5xl md:text-6xl text-white mb-4 uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                        Intel & <span className="text-gray-400">Queries</span>
                    </h2>
                    <div className="h-1 w-24 bg-goku-yellow mx-auto shadow-[0_0_10px_rgba(255,204,0,0.8)]"></div>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        // Stagger the items dynamically based on scroll
                        const start = 0.1 + (index * 0.05);
                        const end = start + 0.15;
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        const itemY = useTransform(scrollYProgress, [start, end], [50, 0]);
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        const itemOpacity = useTransform(scrollYProgress, [start, end], [0, 1]);

                        return (
                            <motion.div
                                key={index}
                                style={{ y: itemY, opacity: itemOpacity }}
                                className="border border-white/20 bg-goku-indigo/80 rounded-xl overflow-hidden backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
                            >
                                <button
                                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                                >
                                    <span className="font-heading text-xl text-white tracking-wide">{faq.q}</span>
                                    <motion.div
                                        animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ChevronDown className="text-white" />
                                    </motion.div>
                                </button>

                                <AnimatePresence>
                                    {activeIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-5 text-gray-400 font-sans border-t border-white/5 pt-4">
                                                {faq.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
