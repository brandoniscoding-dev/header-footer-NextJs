"use client";

import { Button } from "@/components/ui/button";
import { FaRegUserCircle } from "react-icons/fa";
import { motion } from 'framer-motion';

export const SignInProfileButton = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  return (
    <motion.div whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}>
      {isLoggedIn ? (
        <Button variant="ghost">
          <FaRegUserCircle className="h-6 w-6" />
        </Button>
      ) : (
        <Button variant="outline">Sign In</Button>
      )}
    </motion.div>
  );
};
