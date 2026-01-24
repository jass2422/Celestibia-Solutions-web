import { motion } from "framer-motion";
import { 
  CloudParticles, 
  MistLayers, 
  SkyOrbs, 
  LightRays, 
  CloudLayers,
  DataStreamParticles 
} from "@/components/graphics/CloudEffects";

interface HeroGraphicsProps {
  variant?: "cloud" | "devops" | "security" | "data" | "aiml" | "application";
  intensity?: "light" | "normal" | "intense";
}

// Base cloud-themed hero graphics
export const HeroGraphics = ({ 
  variant = "cloud",
  intensity = "normal" 
}: HeroGraphicsProps) => {
  const opacityMultiplier = intensity === "light" ? 0.6 : intensity === "intense" ? 1.3 : 1;
  
  return (
    <>
      {/* Sky Orbs - Atmospheric background */}
      <div style={{ opacity: opacityMultiplier }}>
        <SkyOrbs />
      </div>
      
      {/* Light Rays */}
      <div style={{ opacity: opacityMultiplier * 0.7 }}>
        <LightRays />
      </div>
      
      {/* Cloud Layers */}
      <CloudLayers />
      
      {/* Particles */}
      <CloudParticles count={20} />
      
      {/* Data Streams */}
      <DataStreamParticles />
      
      {/* Mist */}
      <MistLayers />
      
      {/* Grid */}
      <div className="absolute inset-0 bg-grid-cloud opacity-20" />
      
      {/* Variant-specific accent orbs */}
      <VariantOrbs variant={variant} />
    </>
  );
};

// Variant-specific accent orbs
const VariantOrbs = ({ variant }: { variant: string }) => {
  const colors: Record<string, { primary: string; secondary: string }> = {
    cloud: { 
      primary: "hsla(var(--sky-cyan), 0.2)", 
      secondary: "hsla(var(--sky-blue), 0.15)" 
    },
    devops: { 
      primary: "hsla(var(--purple), 0.2)", 
      secondary: "hsla(var(--coral), 0.15)" 
    },
    security: { 
      primary: "hsla(24, 95%, 55%, 0.2)", 
      secondary: "hsla(var(--sky-cyan), 0.15)" 
    },
    data: { 
      primary: "hsla(160, 80%, 50%, 0.2)", 
      secondary: "hsla(var(--sky-cyan), 0.15)" 
    },
    aiml: { 
      primary: "hsla(var(--purple), 0.2)", 
      secondary: "hsla(280, 70%, 60%, 0.15)" 
    },
    application: { 
      primary: "hsla(24, 95%, 55%, 0.2)", 
      secondary: "hsla(45, 90%, 55%, 0.15)" 
    },
  };
  
  const { primary, secondary } = colors[variant] || colors.cloud;
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute"
        style={{
          width: 400,
          height: 400,
          top: "10%",
          right: "5%",
          background: `radial-gradient(circle, ${primary} 0%, transparent 70%)`,
          filter: "blur(60px)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute"
        style={{
          width: 350,
          height: 350,
          bottom: "15%",
          left: "10%",
          background: `radial-gradient(circle, ${secondary} 0%, transparent 70%)`,
          filter: "blur(50px)",
        }}
        animate={{
          scale: [1.1, 1, 1.1],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />
    </div>
  );
};

// Specific theme variants - all cloud-themed
export const CloudHeroGraphics = () => (
  <HeroGraphics variant="cloud" />
);

export const DevOpsHeroGraphics = () => (
  <HeroGraphics variant="devops" />
);

export const SecurityHeroGraphics = () => (
  <HeroGraphics variant="security" />
);

export const DataHeroGraphics = () => (
  <HeroGraphics variant="data" />
);

export const AIMLHeroGraphics = () => (
  <HeroGraphics variant="aiml" />
);

export const ApplicationHeroGraphics = () => (
  <HeroGraphics variant="application" />
);

// Simple floating orbs for lighter sections
export const FloatingOrbs = ({ className = "" }: { className?: string }) => (
  <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
    <motion.div
      animate={{ 
        scale: [1, 1.3, 1],
        opacity: [0.2, 0.4, 0.2],
      }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-accent/15 to-sky-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"
    />
    <motion.div
      animate={{ 
        scale: [1.2, 1, 1.2],
        opacity: [0.15, 0.3, 0.15],
      }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-purple/15 to-accent/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"
    />
  </div>
);
