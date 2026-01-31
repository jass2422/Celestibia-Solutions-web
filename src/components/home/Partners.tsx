import { motion } from "framer-motion";
import { useABTest } from "@/hooks/useABTest";
import veeamLogo from "@/assets/veeam-logo.png";

// Import original logos
import awsSvg from "@/assets/logos/aws.svg";
import gcpLogo from "@/assets/logos/google-cloud.png";
import azureSvg from "@/assets/logos/azure.svg";

const partners = [
  {
    name: "Google Cloud",
    logo: gcpLogo,
  },
  {
    name: "Microsoft Azure",
    logo: azureSvg,
  },
  {
    name: "AWS",
    logo: awsSvg,
  },
  {
    name: "Veeam",
    logo: veeamLogo,
  },
];

export const Partners = () => {
  const { getVariantValue } = useABTest("partners_headline");
  const headline = getVariantValue() || "Partners & Certifications";

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden" style={{ background: 'linear-gradient(to right, #2d1b4e, #0f0f0f, #2d1b4e)' }}>
      {/* Animated background orbs */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 -left-40 w-80 h-80 bg-purple-600/40 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 -right-40 w-80 h-80 bg-purple-700/40 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
<<<<<<< HEAD
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">{headline}</h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
=======
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-6">
            <Link2 className="w-7 h-7 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">{headline}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
>>>>>>> f437c7adab3eae408e2f94733a40a137246acef6
            Recognized for technical excellence and certified expertise across major cloud platforms.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 max-w-4xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex flex-col items-center text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.08, y: -8 }}
                className="w-24 h-24 md:w-28 md:h-28 rounded-2xl border-2 border-white/20 bg-white/5 flex items-center justify-center mb-4 transition-all duration-300 group-hover:border-white/40 group-hover:shadow-xl group-hover:bg-white/10 backdrop-blur-sm"
              >
                <img src={partner.logo} alt={partner.name} className="w-14 h-14 md:w-16 md:h-16 object-contain" />
              </motion.div>
<<<<<<< HEAD
              <h3 className="font-semibold text-white mb-1 text-sm">{partner.name}</h3>
=======
              <h3 className="font-semibold text-foreground mb-1 text-sm">{partner.name}</h3>
>>>>>>> f437c7adab3eae408e2f94733a40a137246acef6
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
