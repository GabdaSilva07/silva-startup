"use client"
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from 'next-themes';
import { siteConfig } from "@/config/siteConfig";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useDeviceDetect } from "@/lib/Hooks/useDeviceDetect";
import { RiMenuLine } from "react-icons/ri";


export default function MainNav() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const { isMobile } = useDeviceDetect();

  const NavLinks = () => (
    <nav className="md:flex space-x-4 hidden">
      {siteConfig.pages.map((page) => (
        <Link key={page.name} href={page.path} className={cn(
          "hover:text-accent transition-all duration-500 ease-in-out border-b-2 border-transparent hover:border-accent",
          pathname === page.path ? "text-accent" : "text-foreground"
        )}>
          {page.name}
        </Link>
      ))}
    </nav>
  );

  const NavButtons = () => (
    <div className="flex items-center space-x-4 md:mt-0 mt-4">
      <Button className="ml-4 bg-accent text-secondary rounded-full py-2 px-6">
        Request Appointment
      </Button>
      <Button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className={theme === 'dark' ? 'text-black' : 'text-white'}>
        Switch Theme
      </Button>
    </div>
  );

  const MobileMenu = () => (
    <div className="md:hidden flex justify-between items-center w-full mx-6">
      <Link href="/" className="text-xl font-bold uppercase text-accent">
        {siteConfig.name}
      </Link>
      <button className="mobile-menu-button">
        <RiMenuLine className="w-6 h-6" />
      </button>
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
