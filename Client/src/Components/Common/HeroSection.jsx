import { motion } from "motion/react";
import { Settings, ShieldCheck, LayoutDashboard } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative rounded-2xl w-7xl overflow-hidden bg-slate-900 text-slate-100 border-2 border-white">
      {/* Animated background glow – DARK MODE */}
      <motion.div
        className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <motion.h1
            className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Portfolio Admin Panel
          </motion.h1>

          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg text-slate-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            A clean, secure, and intuitive space to manage content, projects,
            and updates — built for speed, clarity, and full control.
          </motion.p>
        </motion.div>

        {/* Floating icons */}
        <div className="relative mt-20 flex justify-center gap-16">
          {[Settings, ShieldCheck, LayoutDashboard].map((Icon, i) => (
            <motion.div
              key={i}
              className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/5 backdrop-blur-md border border-white/10"
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Icon className="h-9 w-9 text-indigo-400" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
