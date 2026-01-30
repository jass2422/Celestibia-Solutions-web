import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTA } from "@/components/home/CTA";
import { CheckCircle, ChevronDown } from "lucide-react";
import { CloudHeroGraphics } from "@/components/graphics/HeroGraphics";
import { IndustryIcon } from "@/components/icons/IndustryIcons";
import { useState } from "react";

const industries = [
  {
    iconKey: "banking",
    name: "Banking & Financial Services",
    description:
      "Secure, compliant cloud infrastructure for banks, investment firms, and fintech startups. PCI-DSS, SOC2, and RBI compliance expertise.",
    useCases: [
      "Core Banking System Modernization",
      "Real-time Fraud Detection",
      "Regulatory Compliance Automation",
      "Digital Payment Platforms",
    ],
    color: "from-blue-600 to-blue-400",
    bgColor: "#3b82f6",
  },
  {
    iconKey: "healthcare",
    name: "Healthcare & Life Sciences",
    description:
      "HIPAA-compliant solutions for hospitals, diagnostics, and healthtech platforms with real-time data processing capabilities.",
    useCases: [
      "Electronic Health Records (EHR)",
      "Telemedicine Platforms",
      "Medical IoT Data Processing",
      "Clinical Trial Management",
    ],
    color: "from-green-600 to-emerald-400",
    bgColor: "#16a34a",
  },
  {
    iconKey: "ecommerce",
    name: "E-Commerce & Retail",
    description:
      "Scalable, high-performance platforms that handle seasonal traffic spikes with seamless Microsoft/SAP ERP integrations.",
    useCases: [
      "Omnichannel Commerce Platforms",
      "Inventory Management Systems",
      "Personalization Engines",
      "Supply Chain Optimization",
    ],
    color: "from-orange to-coral",
    bgColor: "#f97316",
  },
  {
    iconKey: "manufacturing",
    name: "Manufacturing",
    description:
      "Smart factory solutions with IoT integration, predictive maintenance, and real-time production monitoring.",
    useCases: [
      "Industrial IoT Platforms",
      "Predictive Maintenance",
      "Quality Control Automation",
      "Digital Twin Implementation",
    ],
    color: "from-slate-600 to-slate-400",
    bgColor: "#475569",
  },
  {
    iconKey: "logistics",
    name: "Logistics & Supply Chain",
    description:
      "End-to-end visibility solutions with real-time tracking, route optimization, and warehouse management systems.",
    useCases: ["Fleet Management Systems", "Route Optimization", "Warehouse Automation", "Last-Mile Delivery Tracking"],
    color: "from-amber-600 to-yellow-400",
    bgColor: "#b45309",
  },
  {
    iconKey: "edtech",
    name: "EdTech",
    description: "Scalable learning management systems, virtual classrooms, and AI-powered educational tools.",
    useCases: [
      "Learning Management Systems",
      "Virtual Classroom Platforms",
      "Assessment & Analytics",
      "Content Delivery Networks",
    ],
    color: "from-purple to-purple",
    bgColor: "#a855f7",
  },
  {
    iconKey: "government",
    name: "Government & Public Sector",
    description: "Secure, citizen-centric digital services with data sovereignty and compliance requirements.",
    useCases: [
      "Citizen Service Portals",
      "Document Management Systems",
      "Smart City Initiatives",
      "Public Safety Platforms",
    ],
    color: "from-red-600 to-rose-400",
    bgColor: "#dc2626",
  },
  {
    iconKey: "travel",
    name: "Travel & Hospitality",
    description:
      "Booking engines, customer experience platforms, and operational optimization for hotels and airlines.",
    useCases: [
      "Booking & Reservation Systems",
      "Customer Experience Platforms",
      "Revenue Management",
      "Loyalty Programs",
    ],
    color: "from-cyan-600 to-teal-400",
    bgColor: "#0891b2",
  },
];

interface IndustryCardProps {
  industry: (typeof industries)[0];
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}

const IndustryCardExpandable: React.FC<IndustryCardProps> = ({ industry, index, isExpanded, onToggle }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onClick={onToggle}
      className="cursor-pointer"
    >
      <motion.div
        layout
        className="bg-background rounded-3xl border border-border overflow-hidden hover:shadow-2xl hover:border-coral/30 transition-all duration-300 group relative"
        animate={{
          scale: isExpanded ? 1 : 1,
          height: isExpanded ? "auto" : "auto",
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {/* Top gradient bar */}
        <motion.div
          className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${industry.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
        />

        {/* Gradient background on hover */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
        />

        {/* Header Section - Always Visible */}
        <motion.div className="relative z-10 p-8 md:p-10 flex items-start justify-between gap-6">
          <div className="flex items-start gap-6 flex-1">
            <motion.div
              className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg"
              whileHover={{ rotate: 5 }}
            >
              <IndustryIcon industry={industry.iconKey as any} size="lg" />
            </motion.div>

            <div className="flex-1">
              <motion.h2
                className="font-heading text-2xl md:text-3xl font-bold mb-3 group-hover:text-coral transition-colors"
                animate={{
                  letterSpacing: isExpanded ? "0.5px" : "0px",
                }}
              >
                {industry.name}
              </motion.h2>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed hidden md:block">
                {industry.description}
              </p>
            </div>
          </div>

          {/* Chevron Icon */}
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0 mt-2"
          >
            <ChevronDown className="w-6 h-6 text-coral" />
          </motion.div>
        </motion.div>

        {/* Expanded Content - Animated */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden border-t border-border"
            >
              <motion.div
                className="p-8 md:p-10 bg-gradient-to-br from-background to-background/50"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              >
                {/* Description visible on mobile when expanded */}
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8 md:hidden">
                  {industry.description}
                </p>

                {/* Use Cases Grid */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-sm text-coral uppercase tracking-wide">Common Use Cases</h3>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.15, duration: 0.3 }}
                  >
                    {industry.useCases.map((useCase, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + idx * 0.05, duration: 0.3 }}
                        className="flex items-center gap-3 group/item p-4 rounded-xl bg-white/50 hover:bg-white/80 transition-all"
                        whileHover={{ scale: 1.05, x: 10 }}
                      >
                        <motion.div
                          className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-coral to-orange flex items-center justify-center shadow-md"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 2 }}
                        >
                          <CheckCircle className="w-4 h-4 text-white" />
                        </motion.div>
                        <span className="text-sm md:text-base text-foreground font-medium">{useCase}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* Features Highlight */}
                <motion.div
                  className="mt-8 pt-8 border-t border-border"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                >
                  <div
                    className={`p-6 rounded-xl bg-gradient-to-r ${industry.color} text-white shadow-lg`}
                  >
                    <h4 className="font-bold text-lg mb-3">Why Choose Us for {industry.name}?</h4>
                    <ul className="space-y-2 text-sm">
                      <li>✓ Industry-specific compliance and security expertise</li>
                      <li>✓ Proven track record with leading {industry.name.toLowerCase()} companies</li>
                      <li>✓ 24/7 dedicated support and SLA guarantees</li>
                      <li>✓ Seamless integration with existing systems</li>
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

const IndustriesPage = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-hero relative overflow-hidden">
        <CloudHeroGraphics />

        {/* Additional animated orbs */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-20 w-[350px] h-[350px] bg-gradient-to-br from-blue-500/30 to-cyan-500/20 rounded-full blur-[100px]"
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Transforming Industries with <span className="text-gradient">Cloud Innovation</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Our solutions power digital transformation across diverse sectors, from financial services to healthcare
              and manufacturing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid with Premium 3D Background */}
      <section className="py-24 bg-card relative overflow-hidden">
        {/* Premium 3D Background Effects */}

        {/* Floating Orbs - Layer 1 (Blue) */}
        <motion.div
          className="absolute top-10 left-10 w-72 h-72 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 opacity-20 blur-3xl"
          animate={{
            y: [0, 50, 0],
            x: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating Orbs - Layer 2 (Purple/Pink) */}
        <motion.div
          className="absolute top-1/4 right-20 w-96 h-96 rounded-full bg-gradient-to-br from-purple-500 to-pink-400 opacity-15 blur-3xl"
          animate={{
            y: [0, -60, 0],
            x: [0, -40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Floating Orbs - Layer 3 (Green/Teal) */}
        <motion.div
          className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-gradient-to-br from-emerald-500 to-teal-400 opacity-15 blur-3xl"
          animate={{
            y: [0, 40, 0],
            x: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Floating Orbs - Layer 4 (Orange/Red) */}
        <motion.div
          className="absolute bottom-20 right-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-orange-500 to-red-400 opacity-20 blur-3xl"
          animate={{
            y: [0, -50, 0],
            x: [0, 60, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />

        {/* Animated Mesh Grid Background */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                0deg,
                rgba(255, 255, 255, 0.1) 0px,
                rgba(255, 255, 255, 0.1) 1px,
                transparent 1px,
                transparent 40px
              ),
              repeating-linear-gradient(
                90deg,
                rgba(255, 255, 255, 0.1) 0px,
                rgba(255, 255, 255, 0.1) 1px,
                transparent 1px,
                transparent 40px
              )
            `,
            backgroundSize: "100px 100px",
          }}
        />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 rounded-full bg-white opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 200 - 100, 0],
              x: [0, Math.random() * 200 - 100, 0],
              opacity: [0.1, 0.4, 0.1],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Glowing Animated Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
              <stop offset="50%" stopColor="rgba(255, 255, 255, 0.8)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
            </linearGradient>
          </defs>
          <motion.line
            x1="0"
            y1="0"
            x2="100%"
            y2="100%"
            stroke="url(#lineGradient1)"
            strokeWidth="2"
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.line
            x1="100%"
            y1="0"
            x2="0"
            y2="100%"
            stroke="url(#lineGradient1)"
            strokeWidth="2"
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: 1,
              ease: "easeInOut",
            }}
          />
          <motion.circle
            cx="50%"
            cy="50%"
            r="30%"
            stroke="rgba(255, 255, 255, 0.5)"
            strokeWidth="1"
            fill="none"
            animate={{
              r: ["10%", "40%", "10%"],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Industries We <span className="text-gradient">Serve</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Click any industry to explore tailored solutions and use cases
            </p>
          </motion.div>

          {/* Single Column Expandable Grid */}
          <div className="space-y-6 max-w-4xl mx-auto">
            {industries.map((industry, index) => (
              <IndustryCardExpandable
                key={index}
                industry={industry}
                index={index}
                isExpanded={expandedIndex === index}
                onToggle={() => setExpandedIndex(expandedIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
};

export default IndustriesPage;