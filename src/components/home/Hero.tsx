import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Cloud, Shield, Zap, Server, Database, GitBranch, Code, Cpu, Container, Network, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useABTest } from "@/hooks/useABTest";
import { useRef } from "react";
import { 
  CloudParticles, 
  MistLayers, 
  SkyOrbs, 
  LightRays, 
  DataStreamParticles,
  CloudLayers 
} from "@/components/graphics/CloudEffects";

// Cloud-style floating icons with sky colors
const floatingIcons = [
  { Icon: Cloud, x: 5, y: 20, size: 36, color: "#38BDF8", delay: 0 },
  { Icon: Server, x: 92, y: 15, size: 32, color: "#8B5CF6", delay: 0.5 },
  { Icon: Database, x: 8, y: 65, size: 30, color: "#06B6D4", delay: 1 },
  { Icon: Shield, x: 88, y: 70, size: 28, color: "#F97316", delay: 1.5 },
  { Icon: Cpu, x: 15, y: 40, size: 26, color: "#818CF8", delay: 2 },
  { Icon: GitBranch, x: 85, y: 45, size: 30, color: "#22D3EE", delay: 2.5 },
  { Icon: Code, x: 20, y: 80, size: 28, color: "#A78BFA", delay: 3 },
  { Icon: Container, x: 80, y: 25, size: 26, color: "#38BDF8", delay: 3.5 },
  { Icon: Network, x: 75, y: 82, size: 32, color: "#8B5CF6", delay: 4 },
  { Icon: Terminal, x: 25, y: 28, size: 24, color: "#06B6D4", delay: 4.5 },
  { Icon: Zap, x: 70, y: 55, size: 24, color: "#F97316", delay: 5 },
];

export const Hero = () => {
  const { getVariantValue: getHeadline, trackConversion: trackHeadlineView } = useABTest('hero_headline');
  const { getVariantValue: getCtaText, trackConversion: trackCtaClick } = useABTest('hero_cta');
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const headlineText = getHeadline() || 'Innovative Cloud Solutions for a Connected World';
  const ctaText = getCtaText() || 'Get Started';

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Sky Gradient Base */}
      <div className="absolute inset-0 bg-gradient-sky" />

      {/* Background Video - Subtle */}
      <motion.div className="absolute inset-0" style={{ scale: useTransform(scrollYProgress, [0, 1], [1, 1.1]) }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        >
          <source src="/videos/background-video.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Sky Orbs - Atmospheric depth */}
      <SkyOrbs />

      {/* Light Rays */}
      <LightRays />

      {/* Cloud Layers */}
      <CloudLayers />

      {/* Data Stream Particles */}
      <DataStreamParticles />

      {/* Cloud Particles */}
      <CloudParticles count={35} />

      {/* Mist Layers */}
      <MistLayers />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-cloud opacity-25" />

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-transparent to-background" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />

      {/* Cloud-style Floating Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute hidden lg:block"
          style={{ 
            left: `${item.x}%`, 
            top: `${item.y}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.3, 0.6, 0.3],
            y: [0, -20, 0],
            rotate: [0, 3, -3, 0],
          }}
          transition={{
            opacity: { duration: 4, repeat: Infinity, delay: item.delay },
            y: { duration: 5 + index * 0.3, repeat: Infinity, ease: "easeInOut", delay: item.delay },
            rotate: { duration: 10, repeat: Infinity, delay: item.delay },
          }}
        >
          <div 
            className="p-3 rounded-xl glass-cloud shadow-lg"
            style={{ 
              boxShadow: `0 8px 32px ${item.color}20, 0 0 20px ${item.color}10`,
            }}
          >
            <item.Icon size={item.size} style={{ color: item.color }} strokeWidth={1.5} />
          </div>
        </motion.div>
      ))}

      <motion.div 
        className="container mx-auto px-4 relative z-10"
        style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-cloud border-glow mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-sm font-medium text-foreground">
              Trusted by leading enterprises worldwide
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            onAnimationComplete={() => trackHeadlineView('view')}
            className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
          >
            {headlineText.includes('Cloud Solutions') ? (
              <>
                Innovative{" "}
                <span className="text-gradient">Cloud Solutions</span>{" "}
                for a Connected World
              </>
            ) : (
              <>
                Transform Your Business with{" "}
                <span className="text-gradient">Enterprise Cloud</span>{" "}
                Solutions
              </>
            )}
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            We blend creativity with technical excellence to deliver software solutions 
            that are not just functional, but future-ready. From cloud migration to 
            AI-powered automation.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div 
              whileHover={{ scale: 1.05, y: -2 }} 
              whileTap={{ scale: 0.98 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary rounded-xl blur-lg opacity-50" />
              <Button variant="hero" size="xl" asChild onClick={() => trackCtaClick('click')} className="relative">
                <Link to="/contact" className="flex items-center gap-2">
                  {ctaText}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
              <Button variant="outline" size="xl" asChild className="glass-cloud border-accent/30 hover:bg-accent/10 hover:border-accent/50">
                <Link to="/services">Explore Services</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats Preview */}
          <motion.div
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
          >
            {[
              { number: "50+", label: "Projects Delivered" },
              { number: "35%", label: "Avg. Cost Savings" },
              { number: "99.9%", label: "Uptime Guarantee" },
              { number: "24/7", label: "Expert Support" },
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center glass-cloud rounded-xl p-4 hover-cloud border border-accent/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--card))"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </svg>
      </div>
    </section>
  );
};
