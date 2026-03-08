import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Code, Zap, Users } from "lucide-react";

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Translate cards upwards at different speeds
  const y1 = useTransform(scrollYProgress, [0, 1], [150, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [250, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [350, -150]);

  // Overall section opacity
  const sectionOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0],
  );

  // Background sparks scroll movements
  const spark1Y = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const spark2Y = useTransform(scrollYProgress, [0, 1], [100, -300]);
  const spark3Y = useTransform(scrollYProgress, [0, 1], [200, -500]);
  const spark4Y = useTransform(scrollYProgress, [0, 1], [-100, -600]);
  const spark5Y = useTransform(scrollYProgress, [0, 1], [50, -350]);

  const cards = [
    {
      icon: <Code size={32} className="text-goku-orange" />,
      title: "Limitless Building",
      desc: "Transform your craziest ideas into reality. Here, we break the boundaries of conventional software.",
      yOffset: y1,
    },
    {
      icon: <Zap size={32} className="text-goku-yellow" />,
      title: "Intense Energy",
      desc: "24 hours of non-stop adrenaline, fueled by caffeine and pure passion. Channel your inner Super Saiyan.",
      yOffset: y2,
    },
    {
      icon: <Users size={32} className="text-goku-yellow" />,
      title: "Elite Network",
      desc: "Join forces with the best developers, designers, and innovators. Your team is your strongest weapon.",
      yOffset: y3,
    },
  ];

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-24 bg-goku-dark overflow-hidden"
    >
      {/* Background Sparks (Aura particles) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* <motion.div style={{ y: spark1Y }} className="absolute bottom-[-10%] left-[10%] w-2 h-8 bg-goku-yellow rounded-full blur-[2px] opacity-60 mix-blend-screen" />
                <motion.div style={{ y: spark2Y }} className="absolute bottom-[-20%] left-[30%] w-3 h-12 bg-goku-orange rounded-full blur-[3px] opacity-40 mix-blend-screen" />
                <motion.div style={{ y: spark3Y }} className="absolute bottom-[-5%] left-[60%] w-1 h-6 bg-white rounded-full blur-[1px] opacity-80 mix-blend-screen" />
                <motion.div style={{ y: spark4Y }} className="absolute bottom-[-30%] right-[20%] w-4 h-16 bg-goku-yellow rounded-full blur-[4px] opacity-30 mix-blend-screen" />
                <motion.div style={{ y: spark5Y }} className="absolute bottom-[-15%] right-[10%] w-2 h-10 bg-goku-orange rounded-full blur-[2px] opacity-50 mix-blend-screen" /> */}

        {/* Subtle base aura glow at the bottom */}
        <div className="absolute down-0 left-1/2 -translate-x-1/2 bottom-0 w-[600px] h-[300px] bg-goku-orange/10 rounded-t-full blur-[80px]" />
      </div>

      <motion.div
        style={{ opacity: sectionOpacity }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 className="font-heading text-5xl md:text-6xl text-white mb-6 uppercase tracking-wide drop-shadow-[0_0_15px_rgba(255,200,100,0.3)]">
            Power <span className="text-goku-indigo">Awakened</span>
          </motion.h2>
          <div className="h-1 w-24 bg-goku-yellow mx-auto mb-8 shadow-[0_0_10px_rgba(255,204,0,0.8)]" />
          <p className="text-gray-300 font-sans text-lg md:text-xl leading-relaxed">
            XCEPTHON is not just a hackathon. It's an arena where ordinary
            coders transform into legendary builders. Whether you're forging a
            new protocol or crafting a beautiful user experience, this is the
            battlefield to prove your worth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              style={{ y: card.yOffset }}
              className="group relative bg-goku-indigo rounded-2xl p-8 border border-white/5 transition-colors duration-300 overflow-hidden shadow-2xl"
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center mb-6 shadow-inner border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                <h3 className="font-heading text-2xl text-white mb-4 tracking-wide">
                  {card.title}
                </h3>
                <p className="text-gray-400 font-sans leading-relaxed flex-grow">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
