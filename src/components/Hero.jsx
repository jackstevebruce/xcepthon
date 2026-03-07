import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-goku-orange/20 rounded-full blur-[120px] pointer-events-none animate-pulse-glow"></div>

                {/* Dynamic decorative elements mimicking the abstract ASCI'26 poster vibe */}
                <div className="absolute bottom-0 left-0 w-full h-[40vh] bg-gradient-to-t from-goku-dark to-transparent z-10"></div>

                {/* Angled jagged shapes resembling the poster background */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 0.15 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute -bottom-20 -left-20 w-[60%] h-[60%] bg-goku-orange rotate-12 origin-bottom-left skew-x-12"
                    style={{ clipPath: 'polygon(0 100%, 100% 100%, 80% 30%, 60% 50%, 40% 0)' }}
                />
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 0.1 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                    className="absolute -bottom-30 -right-20 w-[50%] h-[70%] bg-goku-yellow rotate-[-15deg] origin-bottom-right skew-x-[-12deg]"
                    style={{ clipPath: 'polygon(100% 100%, 0 100%, 20% 40%, 40% 60%, 80% 10%)' }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-goku-indigo/30 bg-goku-indigo/10 backdrop-blur-md mb-8"
                >
                    <Terminal size={14} className="text-goku-indigo" />
                    <span className="text-sm font-sans text-goku-indigo tracking-widest uppercase font-bold">March 23-24, 2026</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-heading text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] leading-none tracking-tight text-white mb-2 relative"
                >
                    {/* Jagged, textured look could be approximated with text-shadow and specific fonts, but Anton is solid. We'll use a gradient mask */}
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-goku-yellow to-[#B8A58D] drop-shadow-2xl">
                        XCEPTHON
                    </span>
                    <div className="absolute -inset-x-10  top-1/2 -translate-y-1/2 h-[4px] bg-goku-yellow opacity-80 mix-blend-screen shadow-[0_0_15px_rgba(216,197,173,0.8)] z-20 pointer-events-none scale-x-0 animate-[strike_1s_ease-out_0.8s_forwards]"></div>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="font-accent text-2xl sm:text-3xl md:text-4xl text-goku-indigo tracking-[0.2em] uppercase mt-2 mb-10 font-bold"
                >
                    Where Exceptions Become Innovation
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="max-w-2xl mx-auto text-gray-300 font-sans text-lg md:text-xl mb-12"
                >
                    Unleash your potential, push beyond the breaking point, and forge solutions that redefine the limits. 48 hours of intense coding, collaboration, and creation.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row items-center gap-6"
                >
                    <button className="group relative px-8 py-4 bg-goku-indigo text-white font-heading text-xl tracking-widest skew-x-[-10deg] hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(69,47,122,0.4)]">
                        <div className="absolute inset-0 bg-white/10 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 mix-blend-overlay"></div>
                        <span className="block skew-x-[10deg] flex items-center gap-2">
                            JOIN THE BATTLE <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                    </button>

                    <button className="px-8 py-4 text-white font-accent text-lg tracking-widest border-b-2 border-transparent hover:border-goku-yellow transition-all flex items-center gap-2 hover:text-goku-yellow">
                        VIEW TRACKS
                    </button>
                </motion.div>
            </div>

            {/* Required base CSS animation for the strike effect */}
            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes strike {
          0% { transform: scaleX(0); opacity: 0;}
          50% { opacity: 1; }
          100% { transform: scaleX(0.8); opacity: 0; }
        }
      `}} />
        </section>
    );
};

export default Hero;
