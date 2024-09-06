import React from 'react';
import { motion } from 'framer-motion';

interface FooterSectionProps {
  title: string;
  items: string[];
}

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export const FooterSection = ({ title, items }: FooterSectionProps) => {
  return (
    <motion.div
      className="hover:bg-gray-800 p-4 rounded transition-colors duration-300 flex flex-col items-center sm:items-start"
    >
      <motion.h6
        className="font-bold text-lg text-white mb-4 text-center sm:text-left"
        whileHover={{ scale: 1.1 }}
      >
        {title}
      </motion.h6>
      <ul className="text-center sm:text-left">
        {items.map((item, index) => (
          <motion.li
            key={index}
            variants={itemVariants}
            whileHover={{ x: 10, color: '#fff' }}
            className="py-2 text-gray-400 hover:text-white transition-transform"
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};
