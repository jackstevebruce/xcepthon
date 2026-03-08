import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Zap, Bot, Leaf, ShieldCheck } from "lucide-react";

const Tracks = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headerY = useTransform(scrollYProgress, [0, 0.3], [100, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  // Cards float upwards staggered based on continuous scroll
  const card1Y = useTransform(scrollYProgress, [0.1, 0.6], [250, 0]);
  const card2Y = useTransform(scrollYProgress, [0.2, 0.7], [300, 0]);
  const card3Y = useTransform(scrollYProgress, [0.3, 0.8], [350, 0]);
  const card4Y = useTransform(scrollYProgress, [0.4, 0.9], [400, 0]);

  const globalOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);

  // Energy Rings background scroll expansion
  const ring1Scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.5]);
  const ring2Scale = useTransform(scrollYProgress, [0, 1], [0.5, 1.2]);
  const ringsOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.15, 0]);

  const tracks = [
    {
      icon: <Zap size={40} className="text-white" />,
      title: "Energy Consumption & Optimization",
      desc: "Monitor, analyze, and optimize electricity usage to reduce energy wastage and higher costs.",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)", // Cyan/Blue gradient
      yOffset: card1Y,
    },
    {
      icon: <Bot size={40} className="text-white" />,
      title: "Automation in Daily Life",
      desc: "Streamline routine digital tasks like emails and scheduling to improve efficiency and simplify everyday life.",
      gradient: "linear-gradient(135deg, #f12711 0%, #f5af19 100%)", // Orange/Yellow gradient (Goku)
      yOffset: card2Y,
    },
    {
      icon: <Leaf size={40} className="text-white" />,
      title: "Sustainability: Green-Route API",
      desc: "Design routing systems that prioritize fuel-efficiency over just the fastest path through traffic.",
      gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)", // Green gradient
      yOffset: card3Y,
    },
    {
      icon: <ShieldCheck size={40} className="text-white" />,
      title: "NLP: Fact-Shield Filter",
      desc: "Build solutions to filter out 'hallucinations' in LLMs to ensure factual safety for critical support.",
      gradient: "linear-gradient(135deg, #b224ef 0%, #7579ff 100%)", // Purple gradient
      yOffset: card4Y,
    },
  ];

  return (
    <section
      id="tracks"
      ref={sectionRef}
      className="py-24 bg-goku-dark relative overflow-hidden"
    >
      {/* Background Energy Rings */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden z-0">
        <motion.div
          style={{ scale: ring1Scale, opacity: ringsOpacity }}
          className="absolute w-[800px] h-[800px] rounded-full border-[1px] border-cyan-400/30"
        />
        <motion.div
          style={{ scale: ring1Scale, opacity: ringsOpacity }}
          className="absolute w-[840px] h-[840px] rounded-full border-[2px] border-cyan-400/20"
        />
        <motion.div
          style={{ scale: ring2Scale, opacity: ringsOpacity }}
          className="absolute w-[400px] h-[400px] rounded-full border-[1px] border-goku-orange/40"
        />
        <motion.div
          style={{ scale: ring2Scale, opacity: ringsOpacity }}
          className="absolute w-[420px] h-[420px] rounded-full border-[3px] border-goku-yellow/20"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          style={{ y: headerY, opacity: headerOpacity }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-5xl md:text-6xl text-white mb-4 uppercase drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
            Choose Your <span className="text-goku-indigo">Domain</span>
          </h2>
          <div className="h-1 w-24 bg-cyan-400 mx-auto mb-6 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
          <p className="text-gray-400 font-sans max-w-2xl mx-auto">
            Pick a track, assemble your squad, and build a project that
            challenges the status quo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tracks.map((track, index) => (
            <div
              key={index}
              style={{ y: track.yOffset, opacity: globalOpacity }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative group h-full cursor-pointer"
            >
              {/* Background gradient card */}
              <div
                className="absolute inset-0 rounded-2xl opacity-70 blur-sm duration-300"
                style={{ background: track.gradient }}
              ></div>

              <div className="relative h-full bg-goku-indigo rounded-2xl p-8 border border-white/20 overflow-hidden flex flex-col shadow-2xl">
                <div
                  className="w-16 h-16 rounded-2xl p-0.5 mb-6 shadow-lg"
                  style={{ background: track.gradient }}
                >
                  <div className="w-full h-full bg-goku-indigo rounded-[14px] flex items-center justify-center">
                    {track.icon}
                  </div>
                </div>

                <h3 className="font-heading text-2xl text-white mb-3 tracking-wide">
                  {track.title}
                </h3>
                <p className="text-gray-400 font-sans text-sm leading-relaxed flex-grow">
                  {track.desc}
                </p>

                {/* Diagonal strip effect */}
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-white/5 rotate-45 group-hover:scale-150 transition-transform duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tracks;
