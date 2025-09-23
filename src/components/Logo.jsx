import React from 'react';
import { motion } from 'framer-motion';

function Logo({ width = 40, height = 40 }) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={width}
      height={height}
      animate={{ scale: [1, 1.05, 1], rotate: [0, -5, 5, -5, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      style={{ filter: "drop-shadow(0 0 10px #ff1a1a)" }}
    >
      <circle cx="32" cy="32" r="28" fill="#b30000" stroke="#ff1a1a" strokeWidth="2" />
      <path d="M20 28c2-6 8-10 12-10s10 4 12 10" stroke="#000" strokeWidth="3" fill="none" />
      <circle cx="24" cy="30" r="2" fill="#000" />
      <circle cx="40" cy="30" r="2" fill="#000" />
      <path d="M24 40c4 4 12 4 16 0" stroke="#000" strokeWidth="3" fill="none" />
      <path d="M18 14l6 4M46 14l-6 4" stroke="#ff1a1a" strokeWidth="3" />
    </motion.svg>
  );
}

export default Logo;