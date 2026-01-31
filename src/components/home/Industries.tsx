import { motion } from "framer-motion";
import { useABTest } from "@/hooks/useABTest";
import { CircuitBoard, WaveGradient } from "@/components/graphics/InfraCloudStyle";
import { IndustryIcon } from "@/components/icons/IndustryIcons";
<<<<<<< HEAD
import { useState } from "react";

interface IndustryDetails {
  challenge: string;
  solution: string[];
  results: {
    metric: string;
    value: string;
  }[];
}

const industriesData = [
  {
    iconKey: "banking",
    name: "Banking",
    color: "from-blue-600 to-blue-700",
    bgColor: "#2563eb",
    details: {
      challenge: "High private cloud operational costs and licensing overhead. Difficulty meeting strict RBI and PCI DSS compliance. Disaster recovery setup required hours for failover.",
      solution: [
        "Migrated workloads to Azure Virtual Machines",
        "Oracle DB → Azure SQL Managed Instance",
        "Implemented Azure Backup, Monitor, and Security Center",
      ],
      results: [
        { metric: "Cost Savings", value: "25%" },
        { metric: "DR RTO Reduction", value: "4hrs → 30min" },
        { metric: "Compliance Achieved", value: "100%" },
      ],
    },
  },
  {
    iconKey: "finance",
    name: "Finance",
    color: "from-green-500 to-green-600",
    bgColor: "#16a34a",
    details: {
      challenge: "Limited scalability in private cloud infrastructure. No AI-driven analytics capabilities. High infrastructure and licensing costs.",
      solution: [
        "CRM and trading apps → AWS EC2 and RDS",
        "Added AWS Lambda for automation",
        "Integrated AWS Comprehend for sentiment analysis",
      ],
      results: [
        { metric: "OPEX Reduction", value: "20%" },
        { metric: "Engagement Boost", value: "32%" },
        { metric: "Release Cycles", value: "Weekly → Daily" },
      ],
    },
=======

const industries = [
  {
    iconKey: "banking",
    name: "Banking & Finance",
>>>>>>> f437c7adab3eae408e2f94733a40a137246acef6
  },
  {
    iconKey: "healthcare",
    name: "Healthcare",
<<<<<<< HEAD
    color: "from-red-500 to-red-600",
    bgColor: "#dc2626",
    details: {
      challenge: "Complex compliance requirements (HIPAA, GDPR). High infrastructure maintenance costs. Limited interoperability between systems.",
      solution: [
        "Cloud-native HIPAA-compliant architecture",
        "Azure Health Data Services integration",
        "Enhanced data security and encryption",
      ],
      results: [
        { metric: "Compliance Score", value: "100%" },
        { metric: "Data Access Speed", value: "3x faster" },
        { metric: "Cost Optimization", value: "40%" },
      ],
    },
  },
  {
    iconKey: "ecommerce",
    name: "E-Commerce",
    color: "from-purple-500 to-purple-600",
    bgColor: "#a855f7",
    details: {
      challenge: "Peak traffic scalability issues. High cart abandonment due to slow checkout. Inventory management complexity.",
      solution: [
        "Auto-scaling cloud infrastructure",
        "CDN optimization for faster load times",
        "Real-time inventory sync across channels",
      ],
      results: [
        { metric: "Page Load Time", value: "2.1s → 0.8s" },
        { metric: "Conversion Rate", value: "+18%" },
        { metric: "Infrastructure Cost", value: "-35%" },
      ],
    },
=======
  },
  {
    iconKey: "ecommerce",
    name: "E-Commerce & Retail",
>>>>>>> f437c7adab3eae408e2f94733a40a137246acef6
  },
  {
    iconKey: "manufacturing",
    name: "Manufacturing",
<<<<<<< HEAD
    color: "from-amber-600 to-amber-700",
    bgColor: "#b45309",
    details: {
      challenge: "IoT data ingestion challenges. Real-time production monitoring gaps. Supply chain visibility issues.",
      solution: [
        "IoT Hub integration for sensor data",
        "Real-time analytics with Apache Kafka",
        "Predictive maintenance ML models",
      ],
      results: [
        { metric: "Downtime Reduction", value: "45%" },
        { metric: "Production Efficiency", value: "+28%" },
        { metric: "Waste Reduction", value: "22%" },
      ],
    },
=======
>>>>>>> f437c7adab3eae408e2f94733a40a137246acef6
  },
  {
    iconKey: "logistics",
    name: "Logistics",
<<<<<<< HEAD
    color: "from-cyan-500 to-cyan-600",
    bgColor: "#0891b2",
    details: {
      challenge: "Complex route optimization. Real-time tracking across multiple channels. Demand forecasting accuracy.",
      solution: [
        "Real-time GPS tracking and mapping",
        "ML-based route optimization engine",
        "Predictive analytics for demand forecasting",
      ],
      results: [
        { metric: "Delivery Time", value: "-23%" },
        { metric: "Fuel Costs", value: "-19%" },
        { metric: "Forecast Accuracy", value: "+34%" },
      ],
    },
=======
>>>>>>> f437c7adab3eae408e2f94733a40a137246acef6
  },
  {
    iconKey: "edtech",
    name: "EdTech",
<<<<<<< HEAD
    color: "from-indigo-500 to-indigo-600",
    bgColor: "#4f46e5",
    details: {
      challenge: "Scalability during peak enrollment periods. Limited personalization in learning paths. Student engagement tracking.",
      solution: [
        "Elastic cloud infrastructure",
        "AI-powered personalization engine",
        "Advanced analytics for student success",
      ],
      results: [
        { metric: "Student Engagement", value: "+42%" },
        { metric: "Completion Rates", value: "+28%" },
        { metric: "System Uptime", value: "99.95%" },
      ],
    },
=======
>>>>>>> f437c7adab3eae408e2f94733a40a137246acef6
  },
  {
    iconKey: "government",
    name: "Government",
<<<<<<< HEAD
    color: "from-slate-700 to-slate-800",
    bgColor: "#3f3f46",
    details: {
      challenge: "Strict security and compliance requirements. Legacy system modernization. Data sovereignty concerns.",
      solution: [
        "Government cloud with advanced security",
        "Legacy API bridges and microservices",
        "Data residency compliance framework",
      ],
      results: [
        { metric: "Compliance", value: "100%" },
        { metric: "System Migration", value: "18 months" },
        { metric: "Cost Savings", value: "38%" },
      ],
    },
=======
  },
  {
    iconKey: "travel",
    name: "Travel & Hospitality",
>>>>>>> f437c7adab3eae408e2f94733a40a137246acef6
  },
];

interface IndustryCardProps {
  industry: (typeof industriesData)[0];
  index: number;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ industry, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="h-full"
    >
      <motion.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="relative h-full min-h-[200px] md:min-h-[250px] rounded-2xl overflow-hidden cursor-pointer group"
      >
        {/* Base colored background - moves to back on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          style={{ backgroundColor: industry.bgColor }}
          animate={{
            scale: isHovered ? 1.5 : 1,
            zIndex: isHovered ? -1 : 10,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />

        {/* Detailed content - revealed on hover */}
        <motion.div
          className="absolute inset-0 p-6 md:p-8 rounded-2xl bg-white/95 backdrop-blur-md flex flex-col justify-between"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.95,
            pointerEvents: isHovered ? "auto" : "none",
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Challenge Section */}
          <div className="mb-4">
            <h4 className="text-xs font-bold text-orange-500 mb-2 uppercase tracking-wider">
              Challenge
            </h4>
            <p className="text-xs md:text-sm text-gray-700 line-clamp-3">
              {industry.details.challenge}
            </p>
          </div>

          {/* Solution Section */}
          <div className="mb-4">
            <h4 className="text-xs font-bold text-orange-500 mb-2 uppercase tracking-wider">
              Solution
            </h4>
            <ul className="space-y-1">
              {industry.details.solution.slice(0, 2).map((item, idx) => (
                <li key={idx} className="text-xs text-gray-700 flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span className="line-clamp-2">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Results Section */}
          <div>
            <h4 className="text-xs font-bold text-orange-500 mb-2 uppercase tracking-wider">
              Results
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {industry.details.results.slice(0, 2).map((result, idx) => (
                <div key={idx} className="bg-orange-50 rounded-lg p-2">
                  <p className="text-xs font-bold text-orange-600">{result.value}</p>
                  <p className="text-xs text-gray-600 line-clamp-1">{result.metric}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Industry name - blurs on hover */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center rounded-2xl"
          animate={{
            filter: isHovered ? "blur(8px)" : "blur(0px)",
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-center">
            <motion.div
              animate={{
                opacity: isHovered ? 0.3 : 1,
              }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center gap-3"
            >
              {/* Icon */}
              <div className="w-12 h-12 md:w-14 md:h-14 text-white opacity-80">
                <IndustryIcon iconKey={industry.iconKey} />
              </div>

              {/* Industry Name */}
              <h3 className="font-heading text-xl md:text-2xl font-bold text-white drop-shadow-lg">
                {industry.name}
              </h3>
            </motion.div>
          </div>
        </motion.div>

        {/* Subtle gradient overlay for depth */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: `linear-gradient(135deg, transparent 0%, rgba(0,0,0,0.1) 100%)`,
          }}
          animate={{
            opacity: isHovered ? 0 : 1,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Border on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl border-2"
          style={{ borderColor: industry.bgColor }}
          animate={{
            opacity: isHovered ? 0.3 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
};

export const Industries = () => {
  const { getVariantValue } = useABTest("industries_headline");
  const headline = getVariantValue() || "Transforming Industries with Cloud Innovation";
<<<<<<< HEAD

=======
  
>>>>>>> f437c7adab3eae408e2f94733a40a137246acef6
  return (
    <section className="py-24 bg-gradient-warm text-primary-foreground overflow-hidden relative">
      {/* InfraCloud-style backgrounds */}
      <CircuitBoard />
      <WaveGradient />

      {/* Decorative Elements */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#F97316]/20 rounded-full blur-[100px]"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-[#8B5CF6]/20 rounded-full blur-[100px]"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
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
          transition={{
            duration: 0.5,
          }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {headline.includes("Transforming") ? (
              <>
                Transforming Industries with{" "}
                <span className="bg-gradient-to-r from-coral via-orange to-coral-light bg-clip-text text-transparent">
                  Cloud Innovation
                </span>
              </>
            ) : (
<<<<<<< HEAD
              <>{headline}</>
            )}
          </h2>
=======
              <>
                Industries We{" "}
                <span className="bg-gradient-to-r from-coral via-orange to-coral-light bg-clip-text text-transparent">
                  Empower
                </span>
              </>
            )}
          </h2>
          <p className="text-lg text-primary-foreground/70">
            Our solutions power digital transformation across diverse sectors, from financial services to healthcare and
            beyond.
          </p>
>>>>>>> f437c7adab3eae408e2f94733a40a137246acef6
        </motion.div>

        {/* Industries Grid */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
<<<<<<< HEAD
          {industriesData.map((industry, index) => (
            <IndustryCard key={industry.iconKey} industry={industry} index={index} />
=======
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
              whileHover={{
                scale: 1.05,
                y: -5,
              }}
              className="group p-6 md:p-8 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 hover:border-coral/30 transition-all duration-300 cursor-pointer flex flex-col items-center text-center"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                <IndustryIcon industry={industry.iconKey as any} size="lg" />
              </div>
              <h3 className="font-heading font-bold text-lg">{industry.name}</h3>
            </motion.div>
>>>>>>> f437c7adab3eae408e2f94733a40a137246acef6
          ))}
        </motion.div>
      </div>
    </section>
  );
};