import { motion } from "framer-motion";
import { Cloud, Code, Database, Shield, Cpu, Globe, Zap, BarChart3, Users, Rocket } from "lucide-react";

const capabilities = [
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "AWS, Azure, GCP expertise",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Code,
    title: "Modern Development",
    description: "Full-stack solutions",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Pipelines & analytics",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Shield,
    title: "Security First",
    description: "Zero trust architecture",
    gradient: "from-red-500 to-orange-500",
  },
  {
    icon: Cpu,
    title: "AI & ML",
    description: "Intelligent automation",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Multi-region deployments",
    gradient: "from-teal-500 to-cyan-500",
  },
];

const processSteps = [
  { icon: Users, step: "01", title: "Discover", desc: "Understanding your needs" },
  { icon: BarChart3, step: "02", title: "Analyze", desc: "Crafting the strategy" },
  { icon: Code, step: "03", title: "Build", desc: "Engineering excellence" },
  { icon: Rocket, step: "04", title: "Launch", desc: "Seamless deployment" },
];

export const AnimatedFeatures = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-coral/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-border/30 rounded-full"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
          }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-border/20 rounded-full"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Technology That <span className="text-gradient">Transforms</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We blend creativity with technical excellence to deliver future-ready solutions
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
          {capabilities.map((cap, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring" }}
              whileHover={{
                scale: 1.08,
                y: -10,
                transition: { duration: 0.2 },
              }}
              className="group relative"
            >
              <div className="p-6 rounded-2xl bg-card border border-border hover:border-coral/40 transition-all hover:shadow-xl text-center h-full">
                {/* Glow effect on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${cap.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}
                />

                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className={`w-14 h-14 mx-auto rounded-xl bg-gradient-to-br ${cap.gradient} flex items-center justify-center mb-4`}
                >
                  <cap.icon className="w-7 h-7 text-white" />
                </motion.div>
                <h3 className="font-bold text-sm mb-1">{cap.title}</h3>
                <p className="text-xs text-muted-foreground">{cap.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="text-center mb-12">
            <h3 className="font-heading text-2xl md:text-3xl font-bold">
              Our <span className="text-gradient">Process</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <div className="p-6 rounded-2xl bg-card border border-border hover:border-coral/30 transition-all group">
                  <motion.div whileHover={{ scale: 1.1 }} className="text-5xl font-bold text-gradient opacity-20 mb-4">
                    {step.step}
                  </motion.div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-heading text-lg font-bold mb-2">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>

                {/* Connector line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="text-coral"
                    >
                      <Zap className="w-6 h-6" />
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};