import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CloudParticles, MistLayers, SkyOrbs, LightRays, DataStreamParticles } from "./CloudEffects";

interface CloudHeroProps {
  children: React.ReactNode;
  showBackgroundVideo?: boolean;
  showForegroundVideo?: boolean;
  backgroundVideoSrc?: string;
  foregroundVideoSrc?: string;
  className?: string;
}

export const CloudHero = ({
  children,
  showBackgroundVideo = true,
  showForegroundVideo = true,
  backgroundVideoSrc = "/videos/background-video.mp4",
  foregroundVideoSrc = "/videos/home_pager_hero_video.mp4",
  className = "",
}: CloudHeroProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <section
      ref={containerRef}
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}
    >
      {/* Base sky gradient */}
      <div className="absolute inset-0 bg-gradient-sky" />

      {/* Background video layer */}
      {showBackgroundVideo && (
        <motion.div
          className="absolute inset-0"
          style={{ scale }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-15"
          >
            <source src={backgroundVideoSrc} type="video/mp4" />
          </video>
        </motion.div>
      )}

      {/* Sky orbs - far layer */}
      <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [0, 50]) }}>
        <SkyOrbs />
      </motion.div>

      {/* Light rays */}
      <motion.div style={{ opacity }}>
        <LightRays />
      </motion.div>

      {/* Foreground hero video with mask */}
      {showForegroundVideo && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{ y, opacity }}
        >
          <div className="relative w-[90%] max-w-5xl aspect-video rounded-3xl overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={foregroundVideoSrc} type="video/mp4" />
            </video>
            {/* Cinematic overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/20 via-transparent to-background/20" />
          </div>
        </motion.div>
      )}

      {/* Data stream particles */}
      <DataStreamParticles />

      {/* Cloud particles */}
      <CloudParticles count={40} />

      {/* Mist layers */}
      <MistLayers />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-cloud opacity-20" />

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full">
        {children}
      </div>

      {/* Bottom wave */}
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

// Simplified hero for service pages
export const CloudServiceHero = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section className={`relative pt-32 pb-20 overflow-hidden ${className}`}>
      {/* Sky gradient base */}
      <div className="absolute inset-0 bg-gradient-sky" />

      {/* Sky orbs */}
      <SkyOrbs />

      {/* Light rays */}
      <LightRays />

      {/* Cloud particles */}
      <CloudParticles count={20} />

      {/* Mist */}
      <MistLayers />

      {/* Grid */}
      <div className="absolute inset-0 bg-grid-cloud opacity-20" />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        {children}
      </div>
    </section>
  );
};

// Section wrapper with cloud reveal effect
export const CloudSection = ({
  children,
  className = "",
  variant = "default",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "light" | "mist";
}) => {
  const variantStyles = {
    default: "bg-card",
    light: "bg-gradient-light-section section-light",
    mist: "bg-gradient-mist",
  };

  return (
    <section className={`relative py-20 overflow-hidden ${variantStyles[variant]} ${className}`}>
      {/* Subtle background effects */}
      {variant === "mist" && (
        <>
          <div className="absolute inset-0 bg-gradient-sky opacity-30" />
          <CloudParticles count={10} />
        </>
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
};
