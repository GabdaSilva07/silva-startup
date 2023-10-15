"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from 'next-themes';
import { siteConfig } from "@/config/siteConfig";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useDeviceDetect } from "@/lib/Hooks/useDeviceDetect";
import { RiMenuLine } from "react-icons/ri";
import { BiMoon, BiSun } from "react-icons/bi";
import { motion } from 'framer-motion';


export default function MainNav() {
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const { isMobile } = useDeviceDetect();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const NavLinks = () => (
    <nav className="md:flex space-x-4 hidden">
      {siteConfig.pages.map((page) => (
        <Link key={page.name} href={page.path} className={cn(
          "hover:text-accent transition-all duration-500 ease-in-out border-b-2",
          pathname === page.path ? "text-accent border-accent" : "border-transparent hover:border-accent text-foreground"
        )}>
          {page.name}
        </Link>
      ))}
    </nav>
  );

  const NavButtons = () => {
    const [isAnimating, setIsAnimating] = useState(false);

    const handleThemeChange = async () => {
      setIsAnimating(true);
      await new Promise(resolve => setTimeout(resolve, 600));
      setTheme(theme === 'dark' ? 'light' : 'dark');
      setIsAnimating(false);
    };

    return (
      <div className={`place-items-center overflow-hidden flex items-center space-x-4 md:mt-0 mt-4 ${theme === 'dark' ? 'bg-background' : ''}`}>
        <Button className="ml-4 bg-accent text-secondary rounded-full py-2 px-6">
          Request Appointment
        </Button>
        <div className="flex-grow" />
        <Button
          onClick={handleThemeChange}
          className={`bg-background ${theme === 'dark' ? 'text-black' : 'text-white'}`}
        >
          <div className="flex items-center justify-center h-6">
            <motion.div
              initial={{ y: "-150%" }}
              animate={isAnimating && theme === 'dark' ? { y: ["0%", "-100%"] } : isAnimating && theme === 'light' ? { y: ["100%", "0%"] } : { y: "0%" }}
              transition={{ duration: 0.6 }}
            >
              {theme === 'dark' ?
                <BiMoon className="text-accent w-6 h-6" /> : null}
            </motion.div>
            <motion.div
              initial={{ y: "-150%" }}
              animate={isAnimating && theme === 'light' ? { y: ["0%", "-100%"] } : isAnimating && theme === 'dark' ? { y: ["-100%", "0%"] } : { y: "0%" }}
              transition={{ duration: 0.6 }}
            >
              {theme === 'light' ? <BiSun className="text-accent w-6 h-6" /> : null}
            </motion.div>
          </div>
        </Button>
      </div>
    );
  };

  const MobileMenu = () => (
    <div className="md:hidden flex justify-between items-center w-full mx-6">
      <Link href="/" className="text-xl font-bold uppercase text-accent">
        {siteConfig.name}
      </Link>
      <Button className="mobile-menu-button">
        <RiMenuLine className="w-6 h-6" />
      </Button>
    </div>
  );

  return (
    <header className="flex justify-between items-center p-4 bg-background shadow-md md:flex-row">
      {!isMobile ? (
        <div className="flex justify-start items-center space-x-12">
          <Link href="/" className="text-xl font-bold uppercase text-accent">
            {siteConfig.name}
          </Link>
          <NavLinks />
        </div>
      ) : (
        <MobileMenu />
      )}
      {!isMobile ? <NavButtons /> : null}
    </header>
  );
}
