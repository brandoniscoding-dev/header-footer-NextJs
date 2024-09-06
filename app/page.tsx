"use client"


import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

export default function Home() {
  // Variants for animating the main content
  const mainVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99], delay: 0.3 },
    },
  };

  return (
    <>

      <motion.main
        initial="hidden"
        animate="visible"
        variants={mainVariants}
        className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 to-slate-800 text-gray-100 px-4"
      >
        <motion.h1
          variants={headingVariants}
          className="text-4xl md:text-6xl font-bold text-center mb-6"
        >
          Stylish & Responsive Header and Footer Template
        </motion.h1>

        <motion.p
          variants={mainVariants}
          className="text-lg md:text-xl text-center max-w-3xl mb-8"
        >
          This template showcases an elegant and responsive design of headers and footers using Shadcn components and Framer Motion, crafted with care by <strong>BrandonIsCoding</strong>. Perfect for projects that need an extra touch of elegance and performance.
        </motion.p>

        <motion.div variants={buttonVariants}>
          <Button variant="outline" size="lg" className="text-black border-gray-300">
            Explore More
          </Button>
        </motion.div>
      </motion.main>

    </>
  );
}
