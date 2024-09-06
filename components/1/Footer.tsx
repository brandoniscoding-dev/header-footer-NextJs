"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FooterSection } from './FooterSection';
import { FooterNewsLetter } from './FooterNewsLetter';
import { FooterSocialIcons } from './FooterSocialIcons';

const sections = [
  {
    title: 'Solutions',
    items: ['Marketing', 'Analytics', 'Commerce', 'Data', 'Cloud']
  },
  {
    title: 'Support',
    items: ['Pricing', 'Documentation', 'Guides', 'API', 'Status']
  },
  {
    title: 'Company',
    items: ['About', 'Blog', 'Guides', 'Jobs', 'Partners']
  },
  {
    title: 'Legal',
    items: ['Claims', 'Pricing', 'Terms', 'Policies', 'Conditions']
  }
];

// Variants for animating the entire footer and sections
export const footerVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, duration: 1, ease: 'easeOut' }
  }
};

export const Footer = () => {
  return (
    <motion.footer
      initial="hidden"
      animate="visible"
      variants={footerVariants}
      className="w-full bg-gradient-to-r from-gray-900 to-black text-gray-300 py-16 px-6"
    >
      {/* Grid section */}
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border-b-2 border-gray-600 py-10 gap-8">
        {sections.map((section, index) => (
          <FooterSection key={index} title={section.title} items={section.items} />
        ))}
        <FooterNewsLetter />
      </div>

      {/* Social & Copyright */}
      <motion.div
        className="flex flex-col sm:flex-row max-w-[1240px] px-6 py-6 mx-auto justify-between items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1, duration: 0.8 } }}
      >
        <p className="text-center text-gray-400">2024 © BrandonIsCoding, LLC. All rights reserved.</p>
        <FooterSocialIcons />
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
