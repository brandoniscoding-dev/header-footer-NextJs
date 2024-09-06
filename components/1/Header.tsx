"use client";

import { motion } from 'framer-motion';
import { HeaderLogo } from './HeaderLogo';
import { HeaderNavLinks } from './HeaderNavLinks';
import { HeaderMobileMenu } from './HeaderMobileMenu';
import { SignInProfileButton } from './SignInProfileButton';
import { DarkModeToggle } from './DarkModeToggle';

// Header Component
export const Header = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  const headerVariants = {
    hidden: { opacity: 0, y: -50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.6, -0.05, 0.01, 0.99],
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      className="w-full bg-slate-900 text-gray-300 py-4 px-6 flex justify-between items-center sticky top-0 z-50 shadow-md"
    >
      <HeaderLogo />
      <div className="hidden md:flex items-center space-x-6">
        <HeaderNavLinks />
        <SignInProfileButton isLoggedIn={isLoggedIn} />
        <DarkModeToggle />
      </div>
      <HeaderMobileMenu isLoggedIn={isLoggedIn} />
    </motion.header>
  );
};

