import { motion } from "motion/react";
import { ShieldCheck, Lock, KeyRound, UserCheck } from "lucide-react";

const securityFeatures = [
  {
    icon: ShieldCheck,
    title: "Secure Authentication",
    description:
      "Industry-standard authentication ensures only authorized users access the admin panel.",
  },
  {
    icon: Lock,
    title: "Protected Routes",
    description:
      "Admin-only routes prevent unauthorized access to sensitive data and actions.",
  },
  {
    icon: KeyRound,
    title: "Encrypted Data",
    description:
      "All sensitive information is encrypted to maintain data integrity and privacy.",
  },
  {
    icon: UserCheck,
    title: "Role-Based Access",
    description:
      "Granular permissions give you full control over who can view or manage content.",
  },
];

const Security = () => {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24">
      {/* Section heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Security You Can Trust
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-slate-400">
          Built with security-first principles to protect your portfolio and
          administrative data.
        </p>
      </div>

      {/* Security cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {securityFeatures.map((item, i) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 hover:bg-white/10 transition"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 mb-4">
                <Icon className="h-6 w-6 text-indigo-400" />
              </div>

              <h3 className="text-lg font-semibold text-white">{item.title}</h3>

              <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Security;
