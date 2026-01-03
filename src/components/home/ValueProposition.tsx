import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "50+", label: "Projects Delivered", suffix: "" },
  { value: "35", label: "Avg. Cost Savings", suffix: "%" },
  { value: "99.9", label: "Uptime Guarantee", suffix: "%" },
  { value: "24/7", label: "Expert Support", suffix: "" },
];

const highlights = [
  "Cloud Infrastructure Managed Services",
  "DevOps & CI/CD Automation",
  "Data Engineering & Analytics",
  "AI/ML Integration",
  "Security & Compliance",
];

export const ValueProposition = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.1, 1, 1.1],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-coral/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-sm font-medium text-foreground mb-4">
              Why Celesibia
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Technology Should{" "}
              <span className="text-gradient">Simplify</span>{" "}
              Business
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We don't just build products — we build partnerships, trust, and long-lasting value. 
              Our solutions are designed to scale with your growth.
            </p>

            <div className="space-y-3 mb-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-accent flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            <Button variant="gradient" size="lg" asChild>
              <Link to="/services" className="flex items-center gap-2">
                Explore Our Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>

          {/* Right - Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-8 rounded-2xl bg-card border border-border text-center hover:border-coral/30 hover:shadow-xl transition-all group"
              >
                <motion.div 
                  className="text-4xl md:text-5xl font-bold text-gradient mb-2"
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                >
                  {stat.value}{stat.suffix}
                </motion.div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};