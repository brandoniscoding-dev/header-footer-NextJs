import React from 'react';
import { motion } from 'framer-motion';

const inputVariants = {
  focus: { scale: 1.05, boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)", transition: { duration: 0.3 } },
};

export const FooterNewsLetter = () => {
  return (
    <motion.div className="col-span-1 sm:col-span-2 pt-8 md:pt-0 text-left">
      <p className="font-bold text-xl text-white mb-4">Stay Connected</p>
      <p className="text-sm text-gray-400 mb-4">Get our latest updates, articles, and exclusive offers.</p>

      <form className="flex flex-col sm:flex-row mt-4">
        <motion.input
          type="email"
          placeholder="Enter email address"
          className="w-full sm:w-3/4 p-3 mr-4 rounded-md border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          variants={inputVariants}
          whileFocus="focus"
        />
        <motion.button
          className="p-3 mt-2 sm:mt-0 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-all"
          whileHover={{ scale: 1.05 }}
        >
          Subscribe
        </motion.button>
      </form>
    </motion.div>
  );
};
