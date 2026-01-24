import { motion } from "framer-motion";
import { 
  Cloud, Server, Database, Shield, Zap, Code, 
  GitBranch, Terminal, Cpu, Globe, Lock, Layers
} from "lucide-react";

const icons = [
  { Icon: Cloud, color: "text-sky-400", size: 24 },
  { Icon: Server, color: "text-violet-400", size: 20 },
  { Icon: Database, color: "text-cyan-400", size: 22 },
  { Icon: Shield, color: "text-orange-400", size: 18 },
  { Icon: Zap, color: "text-amber-400", size: 20 },
  { Icon: Code, color: "text-sky-300", size: 24 },
  { Icon: GitBranch, color: "text-cyan-300", size: 18 },
  { Icon: Terminal, color: "text-violet-300", size: 22 },
  { Icon: Cpu, color: "text-indigo-400", size: 20 },
  { Icon: Globe, color: "text-sky-400", size: 24 },
  { Icon: Lock, color: "text-rose-400", size: 18 },
  { Icon: Layers, color: "text-purple-400", size: 22 },
];

interface FloatingIconsProps {
  className?: string;
  count?: number;
}

export const FloatingIcons = ({ className = "", count = 8 }: FloatingIconsProps) => {
  const selectedIcons = icons.slice(0, count);
  
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {selectedIcons.map((item, index) => {
        const randomX = 10 + (index * 10) % 80;
        const randomY = 10 + (index * 12) % 80;
        const delay = index * 0.5;
        const duration = 12 + index * 0.8;
        
        return (
          <motion.div
            key={index}
            className={`absolute ${item.color} opacity-25`}
            style={{ left: `${randomX}%`, top: `${randomY}%` }}
            animate={{
              y: [0, -25, 0, 20, 0],
              x: [0, 15, -15, 8, 0],
              rotate: [0, 5, -5, 3, 0],
              scale: [1, 1.1, 0.95, 1.05, 1],
            }}
            transition={{ duration, repeat: Infinity, delay, ease: "easeInOut" }}
          >
            <item.Icon size={item.size} />
          </motion.div>
        );
      })}
    </div>
  );
};

export const GradientOrbs = ({ className = "" }: { className?: string }) => (
  <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
    <motion.div
      animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-accent/15 to-sky-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"
    />
    <motion.div
      animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.3, 0.15] }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-purple/15 to-accent/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"
    />
  </div>
);

export const CircuitLines = ({ className = "" }: { className?: string }) => (
  <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
    <svg className="absolute inset-0 w-full h-full opacity-[0.06]" viewBox="0 0 100 100" preserveAspectRatio="none">
      <motion.path
        d="M0,50 Q25,30 50,50 T100,50"
        fill="none"
        stroke="hsl(var(--accent))"
        strokeWidth="0.15"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
      />
    </svg>
  </div>
);

export const AnimatedNodes = ({ className = "" }: { className?: string }) => {
  const nodes = [
    { x: 15, y: 25 }, { x: 85, y: 20 }, { x: 70, y: 75 }, { x: 25, y: 70 }, { x: 50, y: 45 },
  ];

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {nodes.map((node, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-accent/25 rounded-full"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
          animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 2.5 + i * 0.3, repeat: Infinity, delay: i * 0.5 }}
        />
      ))}
    </div>
  );
};
