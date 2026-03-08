import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";

const Hero = () => {
  const { scrollY } = useScroll();

  // Parallax translation (moving down relative to container to counteract scroll up)
  // layer0 is furthest back, so it moves down the most to appear almost fixed
  const layer0Y = useTransform(scrollY, [0, 1000], [0, 850]);
  const layer1Y = useTransform(scrollY, [0, 1000], [0, 700]);
  const layer2Y = useTransform(scrollY, [0, 1000], [0, 550]);
  const layer3Y = useTransform(scrollY, [0, 1000], [0, 400]);
  const layer4Y = useTransform(scrollY, [0, 1000], [0, 250]);

  // Zoom effect for "moving forward" feeling as you scroll
  const layer0Scale = useTransform(scrollY, [0, 1000], [1, 1.5]);
  const layer1Scale = useTransform(scrollY, [0, 1000], [1, 1.4]);
  const layer2Scale = useTransform(scrollY, [0, 1000], [1, 1.3]);
  const layer3Scale = useTransform(scrollY, [0, 1000], [1, 1.2]);
  const layer4Scale = useTransform(scrollY, [0, 1000], [1, 1.1]);

  // Text and main content move up faster and fade out, like you're zooming past them
  const textY = useTransform(scrollY, [0, 600], [0, -400]);
  const textOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const textScale = useTransform(scrollY, [0, 600], [1, 0.8]);
  const glowOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          style={{ y: textY, opacity: glowOpacity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-goku-orange/20 rounded-full blur-[120px] pointer-events-none animate-pulse-glow"
        ></motion.div>

        {/* Dynamic decorative elements mimicking the abstract ASCI'26 poster vibe */}
        <div className="absolute bottom-0 left-0 w-full h-[20vh] bg-gradient-to-t from-goku-dark/50 to-transparent z-10 pointer-events-none"></div>

        {/* Mountain layers wrapped in scroll parallax containers */}
        <motion.div 
          style={{ y: layer0Y, scale: layer0Scale, transformOrigin: "bottom center" }} 
          className="absolute inset-0 pointer-events-none"
        >
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute bottom-[-10%] left-[-10%] w-[120%] h-[80vh] bg-[#5c1c04]"
            style={{
              clipPath:
                "polygon(0% 100%, 100% 100%, 100% 40%, 88% 25%, 78% 50%, 65% 15%, 52% 45%, 38% 10%, 22% 55%, 12% 20%, 0% 60%)",
            }}
          />
        </motion.div>

        <motion.div 
          style={{ y: layer1Y, scale: layer1Scale, transformOrigin: "bottom center" }} 
          className="absolute inset-0 pointer-events-none"
        >
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.1 }}
            className="absolute bottom-0 left-[-5%] w-[110%] h-[60vh] bg-[#8f2803]"
            style={{
              clipPath:
                "polygon(0% 100%, 100% 100%, 100% 30%, 92% 55%, 80% 20%, 68% 45%, 55% 15%, 40% 35%, 28% 5%, 15% 40%, 0% 25%)",
            }}
          />
        </motion.div>

        <motion.div 
          style={{ y: layer2Y, scale: layer2Scale, transformOrigin: "bottom center" }} 
          className="absolute inset-0 pointer-events-none"
        >
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            className="absolute bottom-0 left-0 w-full h-[45vh] bg-[#d14206]"
            style={{
              clipPath:
                "polygon(0% 100%, 100% 100%, 100% 25%, 85% 48%, 70% 12%, 58% 38%, 42% 5%, 25% 32%, 12% 10%, 0% 42%)",
            }}
          />
        </motion.div>

        <motion.div 
          style={{ y: layer3Y, scale: layer3Scale, transformOrigin: "bottom center" }} 
          className="absolute inset-0 pointer-events-none"
        >
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
            className="absolute bottom-0 left-[-5%] w-[110%] h-[30vh] bg-[#f07135]"
            style={{
              clipPath:
                "polygon(0% 100%, 100% 100%, 100% 15%, 82% 42%, 65% 8%, 52% 35%, 38% 0%, 24% 28%, 10% 5%, 0% 22%)",
            }}
          />
        </motion.div>

        <motion.div 
          style={{ y: layer4Y, scale: layer4Scale, transformOrigin: "bottom center" }} 
          className="absolute inset-0 pointer-events-none"
        >
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
            className="absolute bottom-0 left-0 w-full h-[15vh] bg-[#fc9765]"
            style={{
              clipPath:
                "polygon(0% 100%, 100% 100%, 100% 10%, 80% 30%, 60% 5%, 45% 25%, 30% 0%, 15% 20%, 0% 10%)",
            }}
          />
        </motion.div>
      </div>

      <motion.div 
        style={{ y: textY, opacity: textOpacity, scale: textScale, transformOrigin: "center center" }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-goku-indigo/30 bg-goku-indigo/10 backdrop-blur-md mb-8"
        >
          <Terminal size={14} className="text-goku-indigo" />
          <span className="text-sm font-sans text-goku-indigo tracking-widest uppercase font-bold">
            March 23-24, 2026
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] leading-none tracking-tight text-white mb-2 relative"
        >
          {/* Jagged, textured look could be approximated with text-shadow and specific fonts, but Anton is solid. We'll use a gradient mask */}
          <span className="text-transparent font-[shredded] bg-clip-text bg-gradient-to-b from-white via-goku-yellow to-[#B8A58D] drop-shadow-2xl">
            XCEPTHON
          </span>
          <div className="absolute -inset-x-10  top-1/2 -translate-y-1/2 h-[4px] bg-goku-yellow opacity-80 mix-blend-screen shadow-[0_0_15px_rgba(216,197,173,0.8)] z-20 pointer-events-none scale-x-0 animate-[strike_1s_ease-out_0.8s_forwards]"></div>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-accent text-2xl sm:text-3xl md:text-4xl text-paper tracking-[0.2em] uppercase mt-2 mb-10 font-bold"
        >
          Where Exceptions Become Innovation
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl mx-auto text-gray-300 font-sans text-lg md:text-xl mb-12"
        >
          {/* Unleash your potential, push beyond the breaking point, and forge
          solutions that redefine the limits. 24 hours of intense coding,
          collaboration, and creation. */}
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
              JOIN THE BATTLE{" "}
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </span>
          </button>

          <a
            href="#tracks"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#tracks")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-4 text-white font-accent text-lg tracking-widest border-b-2 border-transparent hover:border-goku-yellow transition-all flex items-center gap-2 hover:text-goku-yellow"
          >
            VIEW TRACKS
          </a>
        </motion.div>
      </motion.div>

      {/* Required base CSS animation for the strike effect */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes strike {
          0% { transform: scaleX(0); opacity: 0;}
          50% { opacity: 1; }
          100% { transform: scaleX(0.8); opacity: 0; }
        }
      `,
        }}
      />
    </section>
  );
};

export default Hero;
