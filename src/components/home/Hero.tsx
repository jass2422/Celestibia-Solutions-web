import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Cloud, Shield, Zap, Server, Database, GitBranch, Code, Cpu, Container, Network, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useABTest } from "@/hooks/useABTest";
import { IsometricIcons, CircuitBoard, OrbitRings, WaveGradient } from "@/components/graphics/InfraCloudStyle";
import heroVideo from "@/assets/illustrations/home-page.mp4";

// InfraCloud-style floating icons with colors
const floatingIcons = [
  { Icon: Cloud, x: 5, y: 20, size: 36, color: "#F97316", delay: 0 },
  { Icon: Server, x: 92, y: 15, size: 32, color: "#8B5CF6", delay: 0.5 },
  { Icon: Database, x: 8, y: 65, size: 30, color: "#10B981", delay: 1 },
  { Icon: Shield, x: 88, y: 70, size: 28, color: "#EF4444", delay: 1.5 },
  { Icon: Cpu, x: 15, y: 40, size: 26, color: "#6366F1", delay: 2 },
  { Icon: GitBranch, x: 85, y: 45, size: 30, color: "#F59E0B", delay: 2.5 },
  { Icon: Code, x: 20, y: 80, size: 28, color: "#06B6D4", delay: 3 },
  { Icon: Container, x: 80, y: 25, size: 26, color: "#EC4899", delay: 3.5 },
  { Icon: Network, x: 75, y: 82, size: 32, color: "#8B5CF6", delay: 4 },
  { Icon: Terminal, x: 25, y: 28, size: 24, color: "#14B8A6", delay: 4.5 },
  { Icon: Zap, x: 70, y: 55, size: 24, color: "#FBBF24", delay: 5 },
];

export const Hero = () => {
  const { getVariantValue: getHeadline, trackConversion: trackHeadlineView } = useABTest('hero_headline');
  const { getVariantValue: getCtaText, trackConversion: trackCtaClick } = useABTest('hero_cta');

  const headlineText = getHeadline() || 'Innovative Cloud Solutions for a Connected World';
  const ctaText = getCtaText() || 'Get Started';

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/70" />

      {/* InfraCloud-style Floating Icons */}
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
            opacity: [0.5, 0.8, 0.5],
            y: [0, -25, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            opacity: { duration: 3, repeat: Infinity, delay: item.delay },
            y: { duration: 4 + index * 0.2, repeat: Infinity, ease: "easeInOut", delay: item.delay },
            rotate: { duration: 8, repeat: Infinity, delay: item.delay },
          }}
        >
          <div 
            className="p-3 rounded-xl backdrop-blur-sm shadow-lg"
            style={{ 
              background: `linear-gradient(135deg, ${item.color}20, ${item.color}40)`,
              border: `1px solid ${item.color}50`,
              boxShadow: `0 8px 32px ${item.color}30`,
            }}
          >
            <item.Icon size={item.size} style={{ color: item.color }} strokeWidth={1.5} />
          </div>
        </motion.div>
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-coral opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-coral"></span>
            </span>
            <span className="text-sm font-medium text-foreground">
              Trusted by leading enterprises worldwide
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onAnimationComplete={() => trackHeadlineView('view')}
            className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight drop-shadow-2xl text-white"
            style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.8)' }}
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-10 drop-shadow-lg"
            style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.9)' }}
          >
            We blend creativity with technical excellence to deliver software solutions 
            that are not just functional, but future-ready. From cloud migration to 
            AI-powered automation.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="hero" size="xl" asChild onClick={() => trackCtaClick('click')}>
              <Link to="/contact" className="flex items-center gap-2">
                {ctaText}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/services">Explore Services</Link>
            </Button>
          </motion.div>

          {/* Stats Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
          >
            {[
              { number: "50+", label: "Projects Delivered" },
              { number: "35%", label: "Avg. Cost Savings" },
              { number: "99.9%", label: "Uptime Guarantee" },
              { number: "24/7", label: "Expert Support" },
            ].map((stat, index) => (
              <div key={index} className="text-center drop-shadow-lg">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)' }}>
                  {stat.number}
                </div>
                <div className="text-sm text-white" style={{ textShadow: '0 1px 4px rgba(0, 0, 0, 0.9)' }}>{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--card))"
          />
        </svg>
      </div>
    </section>
  );
};