import { motion } from "motion/react";
import {
  FolderKanban,
  Edit3,
  ShieldCheck,
  BarChart3,
  Mail,
  Settings,
} from "lucide-react";

const featuresContent = [
  {
    icon: FolderKanban,
    title: "Manage Projects",
    description: "Create, edit, and organize your portfolio projects easily.",
  },
  {
    icon: Edit3,
    title: "Content Management",
    description: "Update text, images, and sections without touching code.",
  },
  {
    icon: Mail,
    title: "Contact Messages",
    description: "View and respond to messages from your portfolio visitors.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Track views, engagement, and portfolio performance.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Admin Access",
    description: "Protected routes with authentication and authorization.",
  },
  {
    icon: Settings,
    title: "Settings & Customization",
    description: "Control layout, themes, and portfolio preferences.",
  },
];

const Features = () => {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24">
      {/* Section heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Powerful Admin Features
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-slate-400">
          Everything you need to manage and scale your portfolio from a single
          dashboard.
        </p>
      </div>

      {/* Features grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuresContent.map((feature, i) => {
          const Icon = feature.icon;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 hover:bg-white/10 transition"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 mb-4">
                <Icon className="h-6 w-6 text-indigo-400" />
              </div>

              <h3 className="text-lg font-semibold text-white">
                {feature.title}
              </h3>

              <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
