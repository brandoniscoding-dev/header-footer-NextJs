"use client";

import { motion } from 'framer-motion';

export const HeaderNavLinks = ({ isMobile = false }: { isMobile?: boolean }) => {
  const navLinkVariants = {
    hidden: { opacity: 0, y: isMobile ? 20 : 30, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { 
        duration: 0.6, 
        ease: [0.6, -0.05, 0.01, 0.99], 
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.nav
      className={`${isMobile ? 'flex flex-col space-y-4 text-lg' : 'hidden md:flex space-x-6 text-xl'} items-center`}
      variants={navLinkVariants}
    >
      <motion.a href="#home" whileHover={{ scale: 1.1 }} className="hover:text-white">Home</motion.a>
      <motion.a href="#about" whileHover={{ scale: 1.1 }} className="hover:text-white">About</motion.a>
      <motion.a href="#services" whileHover={{ scale: 1.1 }} className="hover:text-white">Services</motion.a>
      <motion.a href="#contact" whileHover={{ scale: 1.1 }} className="hover:text-white">Contact</motion.a>
    </motion.nav>
  );
};
