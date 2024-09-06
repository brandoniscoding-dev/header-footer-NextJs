"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { CiMenuBurger } from 'react-icons/ci';
import { motion } from 'framer-motion';
import { HeaderNavLinks } from './HeaderNavLinks';
import { SignInProfileButton } from './SignInProfileButton';
import { DarkModeToggle } from './DarkModeToggle';

export const HeaderMobileMenu = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <CiMenuBurger className="h-8 w-8 text-gray-300" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="bg-slate-900 text-gray-300 p-6">
          <div className="flex flex-col space-y-6">
            <HeaderNavLinks isMobile={true} />
            <SignInProfileButton isLoggedIn={isLoggedIn} />
            <DarkModeToggle />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
