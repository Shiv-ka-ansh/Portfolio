"use client";

import { motion } from "framer-motion";

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

