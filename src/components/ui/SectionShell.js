"use client";

import { motion } from "framer-motion";

/**
 * SectionShell - Animated section wrapper
 * 
 * ANIMATION: Fade up on viewport entry
 * TRIGGER: When 20% of section is visible (whileInView)
 * WHY: Creates a cohesive reveal experience as user scrolls
 * 
 * @param {string} id - Section ID for navigation anchors
 * @param {string} className - Additional Tailwind classes
 * @param {number} delay - Animation delay in seconds
 * @param {React.ReactNode} children - Section content
 */
const SectionShell = ({ id, className = "", children, delay = 0 }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay }}
    viewport={{ once: true, amount: 0.2 }}
    className={`relative isolation-auto ${className}`}
  >
    {children}
  </motion.section>
);

export default SectionShell;
