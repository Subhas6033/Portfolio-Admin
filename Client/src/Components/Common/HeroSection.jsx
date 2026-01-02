import { motion } from "motion/react";
import { Settings, ShieldCheck, LayoutDashboard } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-white/10">
      {/* Background glows */}
      <motion.div
        className="pointer-events-none absolute -top-32 -left-32 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-indigo-500/20 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-32 -right-32 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-cyan-500/20 blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-auto lg:w-7xl px-4 sm:px-6 py-20 sm:py-24 lg:py-28 text-center">
        <motion.h1
          className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Portfolio Admin Panel
        </motion.h1>

        <motion.p
          className="mx-auto mt-4 sm:mt-6 max-w-xl sm:max-w-2xl text-base sm:text-lg text-slate-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          A clean, secure, and intuitive space to manage content, projects, and
          updates — built for speed, clarity, and full control.
        </motion.p>

        {/* Floating icons */}
        <div className="relative mt-14 sm:mt-20 grid grid-cols-2 sm:flex sm:justify-center gap-6 sm:gap-12 lg:gap-16">
          {[Settings, ShieldCheck, LayoutDashboard].map((Icon, i) => (
            <motion.div
              key={i}
              className="mx-auto flex h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20 items-center justify-center rounded-2xl bg-white/5 backdrop-blur-md border border-white/10"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Icon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-9 lg:w-9 text-indigo-400" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
