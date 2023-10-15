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
    <nav className={cn("md:flex space-x-4 hidden")}>
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

  const MobileMenu = () => (
    <div className={cn("md:hidden flex justify-between items-center w-full mx-2")}>
      <Button className={cn("mobile-menu-button bg-background")}>
        <RiMenuLine className={cn(`${theme === 'dark' ? 'text-accent' : 'text-accent'} w-8 h-8`)} />
      </Button>
      <Link href="/" className={cn("text-2xl font-bold uppercase text-accent mx-auto")}>
        {siteConfig.name}
      </Link>
    </div>
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
      <div className={cn(`place-items-center overflow-hidden flex items-center space-x-4 mt-[-0.5rem] md:mt-0  ${theme === 'dark' ? 'bg-background' : ''}`)}>
        {!isMobile && (
          <Button className={cn("bg-accent text-secondary rounded-full py-2 px-6")}>
            Request Appointment
          </Button>
        )}
        <Button
          onClick={handleThemeChange}
          className={cn(`bg-background ${theme === 'dark' ? 'text-black' : 'text-white'} mt-2 md:mt-0`)}
        >
          <div className={cn("flex items-center justify-center h-8")}>
            <motion.div
              initial={{ y: "-150%" }}
              animate={isAnimating && theme === 'dark' ? { y: ["0%", "-135%"] } : isAnimating && theme === 'light' ? { y: ["135%", "0%"] } : { y: "0%" }}
              transition={{ duration: 0.6 }}
            >
              {theme === 'dark' ?
                <BiMoon className={cn("text-accent w-8 h-8")} /> : null}
            </motion.div>
            <motion.div
              initial={{ y: "-150%" }}
              animate={isAnimating && theme === 'light' ? { y: ["0%", "-135%"] } : isAnimating && theme === 'dark' ? { y: ["-135%", "0%"] } : { y: "0%" }}
              transition={{ duration: 0.6 }}
            >
              {theme === 'light' ? <BiSun className={cn("text-accent w-8 h-8")} /> : null}
            </motion.div>
          </div>
        </Button>
      </div>
    );
  };

  return (
    <header className={cn("flex justify-between items-center md:px-4 px-2 py-4 bg-background shadow-md md:flex-row")}>
      {isMobile ? (
        <>
          <MobileMenu />
          <NavButtons />
        </>
      ) : (
        <div className={cn("flex justify-between items-center w-full")}>
          <div className={cn("flex justify-start items-center space-x-12")}>
            <Link href="/" className={cn("text-2xl font-bold uppercase text-accent")}>
              {siteConfig.name}
            </Link>
            <NavLinks />
          </div>
          <NavButtons />
        </div>
      )}
    </header>
  );
}
