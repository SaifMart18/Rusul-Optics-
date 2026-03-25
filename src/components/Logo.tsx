import { motion } from "motion/react";

interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className = "", size = 48 }: LogoProps) {
  return (
    <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_0_8px_rgba(212,175,55,0.3)]"
      >
        {/* Outer Lens Frame - Elegant and Thin */}
        <circle
          cx="50"
          cy="50"
          r="46"
          stroke="url(#gold-gradient-logo)"
          strokeWidth="1.5"
          className="opacity-90"
        />
        
        {/* Inner Lens Detail - Subtle Reflection */}
        <path
          d="M25 25C35 15 65 15 75 25"
          stroke="url(#gold-gradient-logo)"
          strokeWidth="0.5"
          strokeLinecap="round"
          className="opacity-30"
        />

        {/* Stylized "R" and Eye Integration */}
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          d="M35 30V70M35 30H55C65 30 65 50 55 50H35M50 50L65 70"
          stroke="url(#gold-gradient-logo)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* The "O" / Lens Pupil - Minimalist */}
        <motion.circle
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          cx="50"
          cy="50"
          r="12"
          stroke="url(#gold-gradient-logo)"
          strokeWidth="1"
          fill="url(#gold-inner-glow)"
        />

        {/* Clarity Sparkle - Refined */}
        <motion.path
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 3,
            ease: "easeInOut"
          }}
          d="M75 35L77 40L82 42L77 44L75 49L73 44L68 42L73 40L75 35Z"
          fill="url(#gold-gradient-logo)"
        />

        {/* Gradients and Filters */}
        <defs>
          <linearGradient id="gold-gradient-logo" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#BF953F" />
            <stop offset="25%" stopColor="#FCF6BA" />
            <stop offset="50%" stopColor="#B38728" />
            <stop offset="75%" stopColor="#FBF5B7" />
            <stop offset="100%" stopColor="#AA771C" />
          </linearGradient>
          
          <radialGradient id="gold-inner-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(252, 246, 186, 0.2)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
