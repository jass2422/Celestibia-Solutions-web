import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Floating cloud particles - light, airy data streams
export const CloudParticles = ({ count = 30, className = "" }: { count?: number; className?: string }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `radial-gradient(circle, 
              hsla(var(--sky-glow), ${0.4 + Math.random() * 0.3}) 0%, 
              transparent 70%)`,
          }}
          animate={{
            y: [-20, -100 - Math.random() * 100],
            x: [0, (Math.random() - 0.5) * 60],
            opacity: [0, 0.8, 0],
            scale: [0.5, 1, 0.3],
          }}
          transition={{
            duration: 8 + Math.random() * 6,
            repeat: Infinity,
            delay: Math.random() * 8,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
};

// Mist/fog gradient layers
export const MistLayers = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Bottom mist */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[40%]"
        style={{
          background: "linear-gradient(to top, hsl(var(--cloud-mist)) 0%, transparent 100%)",
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Top mist */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[30%]"
        style={{
          background: "linear-gradient(to bottom, hsl(var(--cloud-mist)) 0%, transparent 100%)",
        }}
        animate={{
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      
      {/* Floating mist patches */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: 300 + i * 100,
            height: 150 + i * 50,
            left: `${i * 25}%`,
            bottom: `${10 + i * 5}%`,
            background: `radial-gradient(ellipse, 
              hsla(var(--cloud-mist), ${0.15 - i * 0.02}) 0%, 
              transparent 70%)`,
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, -20, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15 + i * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2,
          }}
        />
      ))}
    </div>
  );
};

// Light rays/beams effect
export const LightRays = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute origin-top"
          style={{
            left: `${15 + i * 18}%`,
            top: 0,
            width: 2,
            height: "120%",
            background: `linear-gradient(to bottom, 
              hsla(var(--sky-glow), 0.3) 0%, 
              hsla(var(--sky-glow), 0.1) 40%, 
              transparent 100%)`,
            transform: `rotate(${-15 + i * 8}deg)`,
            filter: "blur(8px)",
          }}
          animate={{
            opacity: [0.1, 0.4, 0.1],
            scaleY: [1, 1.1, 1],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.8,
          }}
        />
      ))}
    </div>
  );
};

// Sky gradient orbs - soft, atmospheric
export const SkyOrbs = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Primary sky orb */}
      <motion.div
        className="absolute"
        style={{
          width: 600,
          height: 600,
          top: "-20%",
          right: "-10%",
          background: `radial-gradient(circle, 
            hsla(var(--sky-blue), 0.25) 0%, 
            hsla(var(--sky-purple), 0.15) 40%, 
            transparent 70%)`,
          filter: "blur(60px)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.6, 0.4],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Secondary orb */}
      <motion.div
        className="absolute"
        style={{
          width: 500,
          height: 500,
          bottom: "-15%",
          left: "-10%",
          background: `radial-gradient(circle, 
            hsla(var(--sky-cyan), 0.2) 0%, 
            hsla(var(--sky-blue), 0.1) 50%, 
            transparent 70%)`,
          filter: "blur(50px)",
        }}
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.3, 0.5, 0.3],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />
      
      {/* Accent orb */}
      <motion.div
        className="absolute"
        style={{
          width: 400,
          height: 400,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: `radial-gradient(circle, 
            hsla(var(--sky-glow), 0.15) 0%, 
            transparent 60%)`,
          filter: "blur(40px)",
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />
    </div>
  );
};

// Floating translucent cloud layers
export const CloudLayers = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            width: 200 + Math.random() * 300,
            height: 80 + Math.random() * 60,
            left: `${Math.random() * 100}%`,
            top: `${10 + Math.random() * 80}%`,
            background: `radial-gradient(ellipse 80% 50% at 50% 50%, 
              hsla(var(--cloud-white), ${0.05 + Math.random() * 0.05}) 0%, 
              transparent 100%)`,
            borderRadius: "50%",
            filter: `blur(${20 + Math.random() * 20}px)`,
          }}
          animate={{
            x: [0, 100 * (i % 2 === 0 ? 1 : -1), 0],
            y: [0, 20, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2,
          }}
        />
      ))}
    </div>
  );
};

// Data stream particles - flowing upward like data going to cloud
export const DataStreamParticles = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${5 + (i * 5)}%`,
            bottom: 0,
          }}
        >
          <motion.div
            className="w-1 h-1 rounded-full"
            style={{
              background: i % 3 === 0 
                ? "hsl(var(--sky-cyan))" 
                : i % 3 === 1 
                ? "hsl(var(--sky-blue))" 
                : "hsl(var(--sky-glow))",
              boxShadow: `0 0 6px hsla(var(--sky-glow), 0.5)`,
            }}
            animate={{
              y: [0, -800],
              opacity: [0, 0.8, 0.8, 0],
              scale: [0.5, 1, 1, 0.5],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: "easeOut",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

// Parallax cloud background layers
export const ParallaxCloudLayers = ({ scrollY = 0 }: { scrollY?: number }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Far layer - moves slowest */}
      <motion.div
        className="absolute inset-0"
        style={{
          y: scrollY * 0.1,
        }}
      >
        <SkyOrbs />
      </motion.div>
      
      {/* Mid layer */}
      <motion.div
        className="absolute inset-0"
        style={{
          y: scrollY * 0.2,
        }}
      >
        <CloudLayers />
      </motion.div>
      
      {/* Near layer - moves fastest */}
      <motion.div
        className="absolute inset-0"
        style={{
          y: scrollY * 0.3,
        }}
      >
        <MistLayers />
      </motion.div>
    </div>
  );
};

// Section reveal effect - content emerges from mist
export const CloudReveal = ({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode; 
  className?: string;
}) => {
  return (
    <motion.div
      className={className}
      initial={{ 
        opacity: 0, 
        y: 60,
        filter: "blur(10px)",
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
};

// Card with cloud hover effect
export const CloudCard = ({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode; 
  className?: string;
}) => {
  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      whileHover={{ 
        y: -8,
        scale: 1.02,
      }}
      transition={{ 
        duration: 0.3, 
        ease: "easeOut",
      }}
    >
      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        style={{
          background: `radial-gradient(circle at 50% 0%, 
            hsla(var(--sky-glow), 0.15) 0%, 
            transparent 60%)`,
        }}
      />
      
      {/* Cloud shadow */}
      <motion.div
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-8 rounded-full pointer-events-none"
        initial={{ 
          opacity: 0.1,
          scale: 1,
          filter: "blur(10px)",
        }}
        whileHover={{ 
          opacity: 0.2,
          scale: 1.1,
          filter: "blur(15px)",
        }}
        style={{
          background: `hsla(var(--sky-glow), 0.3)`,
        }}
      />
      
      {children}
    </motion.div>
  );
};

// Floating icon with cloud glow
export const CloudIcon = ({ 
  children, 
  delay = 0,
  className = "" 
}: { 
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  return (
    <motion.div
      className={`relative ${className}`}
      animate={{
        y: [0, -15, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      {/* Icon glow */}
      <div 
        className="absolute inset-0 rounded-full blur-xl"
        style={{
          background: `hsla(var(--sky-glow), 0.3)`,
          transform: "scale(1.5)",
        }}
      />
      <div className="relative">
        {children}
      </div>
    </motion.div>
  );
};

// Full-page cloud background composition
export const CloudBackground = ({ 
  showVideo = false,
  videoSrc = "/videos/background-video.mp4",
  intensity = "normal",
  className = "" 
}: { 
  showVideo?: boolean;
  videoSrc?: string;
  intensity?: "light" | "normal" | "intense";
  className?: string;
}) => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const opacityMap = {
    light: 0.5,
    normal: 1,
    intense: 1.5,
  };
  
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-sky" />
      
      {/* Video layer (if enabled) */}
      {showVideo && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}
      
      {/* Sky orbs with parallax */}
      <motion.div style={{ y: scrollY * 0.05, opacity: opacityMap[intensity] }}>
        <SkyOrbs />
      </motion.div>
      
      {/* Light rays */}
      <motion.div style={{ y: scrollY * 0.08, opacity: opacityMap[intensity] * 0.7 }}>
        <LightRays />
      </motion.div>
      
      {/* Cloud layers with parallax */}
      <motion.div style={{ y: scrollY * 0.1 }}>
        <CloudLayers />
      </motion.div>
      
      {/* Particles */}
      <CloudParticles count={25} />
      
      {/* Mist at bottom */}
      <MistLayers />
      
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-grid-cloud opacity-30" />
    </div>
  );
};
