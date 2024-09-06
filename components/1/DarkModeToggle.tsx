"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { BsSun } from 'react-icons/bs';
import { GoMoon } from 'react-icons/go';
import { motion } from 'framer-motion';

export const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <motion.div whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}>
      <Button variant="ghost" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <GoMoon className="h-6 w-6" /> : <BsSun className="h-6 w-6" />}
      </Button>
    </motion.div>
  );
};
