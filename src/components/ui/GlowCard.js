"use client";

import { motion } from "framer-motion";

/**
 * GlowCard - Card component with 3D tilt and glow border effect
 * 
 * ANIMATIONS:
 * - 3D Tilt: rotateX/rotateY on hover (4deg each direction)
 * - Lift: translateY -8px on hover
 * - Glow: Border gradient opacity transition on hover (via CSS)
 * 
 * TRIGGER: Hover state (whileHover)
 * 
 * WHY: Creates premium, interactive feel for project cards
 * The 3D effect draws attention and encourages exploration
 * 
 * @param {React.ReactNode} children - Card content
 * @param {string} className - Additional Tailwind classes
 * @param {number} index - Index for staggered animation delay
 */
const GlowCard = ({ children, className = "", index = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{
                rotateX: 4,
                rotateY: -4,
                translateY: -8,
                transition: { duration: 0.3 },
            }}
            className={`tilt-card glow-border group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-[0_35px_80px_rgba(5,10,20,0.55)] ${className}`}
        >
            {children}
        </motion.div>
    );
};

export default GlowCard;
