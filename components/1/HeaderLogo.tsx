"use client";

import { motion } from 'framer-motion';

export const HeaderLogo = () => {
  const logoVariants = {
    hidden: { opacity: 0, x: -200, scale: 0.8 },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1, 
      transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
    },
  };

  return (
    <motion.div
      className="text-3xl font-bold cursor-pointer"
      variants={logoVariants}
      whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0], transition: { duration: 0.5 } }}
    >
      MyLogo
    </motion.div>
  );
};
