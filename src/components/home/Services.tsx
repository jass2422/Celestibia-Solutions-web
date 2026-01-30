import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useABTest } from "@/hooks/useABTest";
import { HexagonPattern, IsometricIcons } from "@/components/graphics/InfraCloudStyle";
import { serviceIcons } from "@/components/icons/ServiceIcons";

const services = [
  {
    icon: serviceIcons.cloud,
    title: "Cloud Services",
    description:
      "Cloud Infrastructure, Migration, Architecture Design, and Cost Optimization across AWS, Azure, and GCP.",
    href: "/services/cloud",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: serviceIcons.devops,
    title: "DevOps Solutions",
    description: "Managed Kubernetes, CI/CD Pipelines, Infrastructure Automation, and DevOps as a Service.",
    href: "/services/devops",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: serviceIcons.dataEngineering,
    title: "Data Engineering",
    description: "Data Pipelines, Warehousing, Real-Time Processing, and Data Governance & Quality.",
    href: "/services/data-engineering",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: serviceIcons.aiml,
    title: "AI & Machine Learning",
    description: "AI-Powered Chatbots, ML Model Development, Computer Vision, NLP, and AI Strategy Consulting.",
    href: "/services/ai-ml",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: serviceIcons.application,
    title: "Application Services",
    description: "Monolith to Microservices, Application Replatforming, and Performance Monitoring.",
    href: "/services/application",
    color: "from-orange-500 to-yellow-500",
  },
  {
    icon: serviceIcons.security,
    title: "Security Services",
    description: "Cloud Security, DevSecOps, VAPT, Compliance Automation, and Managed Detection & Response.",
    href: "/services/security",
    color: "from-red-500 to-orange-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const Services = () => {
  const { getVariantValue, trackConversion } = useABTest("services_headline");
  const headline = getVariantValue() || "End-to-End Cloud & DevOps Solutions";

  return (
    <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(to right, #2d1b4e, #0f0f0f, #2d1b4e)' }}>
      {/* InfraCloud-style backgrounds */}
      <HexagonPattern />
      <IsometricIcons className="opacity-20" />

      {/* Gradient orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-[#7c3aed]/25 to-[#8B5CF6]/15 rounded-full blur-[100px]"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-[#8B5CF6]/25 to-[#06B6D4]/15 rounded-full blur-[100px]"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            {headline.includes("End-to-End") ? (
              <>
                End-to-End <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">Cloud & DevOps</span> Solutions
              </>
            ) : (
              <>
                Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">Cloud & DevOps</span> Services
              </>
            )}
          </h2>
          <p className="text-lg text-gray-300">
            From cloud migration to AI-powered automation, we deliver comprehensive solutions that drive digital
            transformation.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants} className="group h-full">
              <Link
                to={service.href}
                onClick={() => trackConversion("service_click")}
                className="block h-full relative"
              >
                {/* Glow effect background */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute -inset-0.5 bg-gradient-to-r rounded-2xl blur opacity-0 group-hover:opacity-60 transition duration-300"
                  style={{
                    backgroundImage: `linear-gradient(135deg, rgba(139, 92, 246, 0.4), rgba(236, 72, 153, 0.4))`,
                  }}
                />

                {/* Card */}
                <div className="relative p-8 rounded-2xl bg-white/5 border border-white/10 group-hover:border-white/30 hover:shadow-2xl hover:bg-white/10 transition-all duration-300 backdrop-blur-md h-full overflow-hidden">
                  
                  {/* Top accent line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="absolute top-0 left-0 right-0 h-1 origin-left bg-gradient-to-r from-cyan-400 via-purple-400 to-transparent"
                  />

                  {/* Floating particles effect */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{
                          y: [-20, -100, -20],
                          x: [0, Math.random() * 30 - 15, 0],
                          opacity: [0, 0.6, 0],
                        }}
                        transition={{
                          duration: 4,
                          delay: i * 0.7,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute w-1 h-1 rounded-full bg-purple-400"
                        style={{
                          left: `${20 + i * 30}%`,
                          bottom: "0%",
                          boxShadow: `0 0 8px rgba(196, 181, 253, 0.8)`,
                        }}
                      />
                    ))}
                  </div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.15 }}
                    transition={{ duration: 0.6, type: "spring" }}
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/30 to-pink-500/20 flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300 p-2 border border-white/10 relative z-10"
                  >
                    <img src={service.icon} alt={service.title} className="w-10 h-10 object-contain brightness-125 drop-shadow-lg" />
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <motion.h3 
                      className="font-heading text-xl font-bold mb-3 flex items-center gap-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-pink-300 transition-all duration-300"
                      whileHover={{ x: 5 }}
                    >
                      {service.title}
                      <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300 text-cyan-400" />
                    </motion.h3>
                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{service.description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};