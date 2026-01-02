import { motion } from "motion/react";

const Loader = ({ text = "" }) => {
  return (
    <div className="flex min-h-[40vh] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <motion.div
          className="h-12 w-12 rounded-full border-4 border-white/10 border-t-indigo-500"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: "linear",
          }}
        />

        {/* Text */}
        <motion.p
          className="text-sm text-slate-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {`Loading ${text} ...`}
        </motion.p>
      </div>
    </div>
  );
};

export default Loader;
