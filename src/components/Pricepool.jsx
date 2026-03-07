import React from "react";
import { motion } from "framer-motion";
import { Trophy, Medal, Award, Zap } from "lucide-react";

const PrizePool = () => {
  return (
    <section
      id="prizes"
      className="py-24 bg-goku-dark relative overflow-hidden"
    >
      {/* Background ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-goku-orange/10 blur-[120px]" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-cyan-500/8 blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ── LAYOUT: mirrors the reference — tall left card | center heading | right grid ── */}
        <div className="flex flex-col lg:flex-row gap-6 items-stretch min-h-[520px]">
          {/* ── LEFT: Total Prize Pool Card ─────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-[260px] flex-shrink-0 relative rounded-3xl overflow-hidden flex flex-col justify-between p-8 min-h-[480px]"
            style={{
              background:
                "linear-gradient(160deg, #1a0a00 0%, #ff5e00 60%, #ff9a00 100%)",
              boxShadow:
                "0 0 60px rgba(255,94,0,0.4), 0 0 120px rgba(255,94,0,0.15)",
            }}
          >
            {/* Grid pattern overlay */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />

            {/* Top label */}
            <div className="relative z-10">
              <p className="font-sans text-xs text-white/70 tracking-[0.2em] uppercase border border-white/20 rounded-full px-3 py-1 inline-block mb-2">
                Total Prize Pool
              </p>
            </div>

            {/* Big number */}
            <div className="relative z-10 my-auto py-8">
              <motion.p
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-heading text-7xl text-white leading-none"
                style={{ textShadow: "0 0 40px rgba(255,255,255,0.4)" }}
              >
                ₹30K
              </motion.p>
              <p className="font-sans text-sm text-white/60 mt-2 tracking-widest">
                prizes in total
              </p>
            </div>

            {/* Branding bottom */}
            <div className="relative z-10 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                <Zap size={14} className="text-white" />
              </div>
              <span className="font-heading text-white text-lg tracking-widest">
                XCEPTHON <span className="text-white/60">'26</span>
              </span>
            </div>
          </motion.div>

          {/* ── CENTER: Heading ──────────────────────────────────────── */}
          <div className="flex-1 flex flex-col justify-center lg:px-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <p className="font-accent text-goku-orange tracking-[0.3em] uppercase text-sm mb-3">
                Battle Rewards
              </p>
              <h2
                className="font-heading leading-tight text-white"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
              >
                Meet Our
                <br />
                <span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-goku-orange via-yellow-400 to-goku-orange"
                  style={{ textShadow: "none", WebkitTextStroke: "0" }}
                >
                  Prize Pool
                </span>
              </h2>
              <div className="mt-4 h-1 w-20 bg-gradient-to-r from-goku-orange to-transparent lg:mx-0 mx-auto" />
              <p className="mt-5 text-gray-400 font-sans text-base max-w-sm lg:mx-0 mx-auto">
                Push beyond your limits. The top fighters walk away with serious
                rewards.
              </p>
            </motion.div>
          </div>

          {/* ── RIGHT: Prize breakdown + Sponsor ────────────────────── */}
          <div className="flex flex-col gap-5 lg:w-[320px] flex-shrink-0">
            {/* Prize Breakdown Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden p-6 flex-shrink-0"
              style={{
                background: "linear-gradient(140deg, #111130 0%, #1a1a45 100%)",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 30px rgba(34,211,238,0.08)",
              }}
            >
              {/* Zigzag / chevron pattern overlay */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, rgba(255,255,255,0.5) 0, rgba(255,255,255,0.5) 1px, transparent 0, transparent 50%)",
                  backgroundSize: "18px 18px",
                }}
              />

              {/* 1st Prize */}
              <div className="relative z-10 flex items-center justify-between mb-4 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-[0_0_15px_rgba(250,204,21,0.4)]">
                    <Trophy size={18} className="text-white" />
                  </div>
                  <span className="font-sans text-sm text-gray-400 tracking-widest uppercase">
                    First Prize
                  </span>
                </div>
                <span
                  className="font-heading text-4xl text-white"
                  style={{ textShadow: "0 0 20px rgba(250,204,21,0.5)" }}
                >
                  ₹15k
                </span>
              </div>

              {/* 2nd & 3rd row */}
              <div className="relative z-10 grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-slate-400 to-slate-600 flex items-center justify-center">
                      <Medal size={13} className="text-white" />
                    </div>
                    <span className="font-sans text-xs text-gray-500 uppercase tracking-wider">
                      Second
                    </span>
                  </div>
                  <span className="font-heading text-3xl text-white">₹10k</span>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-amber-700 to-orange-900 flex items-center justify-center">
                      <Award size={13} className="text-white" />
                    </div>
                    <span className="font-sans text-xs text-gray-500 uppercase tracking-wider">
                      Third
                    </span>
                  </div>
                  <span className="font-heading text-3xl text-white">₹5k</span>
                </div>
              </div>
            </motion.div>

            {/* Sponsor Card */}
            <motion.div
              initial={{ opacity: 0, x: 40, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="relative rounded-2xl overflow-hidden p-6 flex-1 flex flex-col justify-between"
              style={{
                background:
                  "linear-gradient(135deg, #1a1200 0%, #332800 50%, #1a1200 100%)",
                border: "1px solid rgba(255,180,0,0.15)",
                boxShadow: "0 0 30px rgba(255,160,0,0.1)",
              }}
            >
              <p className="font-accent text-xs tracking-[0.3em] uppercase text-yellow-500/70 mb-3">
                Our Sponsor
              </p>
              <div className="flex items-center gap-3">
                {/* Orange triangle logo placeholder */}
                <div
                  className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg"
                  style={{
                    background: "rgba(255,140,0,0.15)",
                    border: "1px solid rgba(255,140,0,0.3)",
                  }}
                >
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <polygon
                      points="14,2 26,24 2,24"
                      stroke="#ff9500"
                      strokeWidth="2"
                      fill="rgba(255,149,0,0.15)"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-heading text-xl text-yellow-400 tracking-widest leading-tight">
                    LEOBISS
                  </p>
                  <p className="font-sans text-xs text-yellow-600 tracking-[0.15em] uppercase">
                    International Pvt Ltd
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrizePool;
