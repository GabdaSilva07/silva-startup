"use client"

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/siteConfig";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";  // Assuming Shadcn provides a button component

export default function MainNav() {
  const pathname = usePathname();

  return (
    <div className="flex justify-between items-center p-4 bg-background shadow-md">
      <div className="flex justify-start items-center space-x-12">
        <Link href="/" className="text-xl font-bold uppercase text-foreground">
          {siteConfig.name}
        </Link>
        <nav className="hidden md:flex space-x-4">
          {siteConfig.pages.map((page) => (
            <Link key={page.name} href={page.path} className={cn(
              "hover:text-primary transition-all duration-500 ease-in-out border-b-2 border-transparent hover:border-primary",
              pathname === page.path ? "text-primary" : "text-foreground"
            )}>
              {page.name}
            </Link>
          ))}
        </nav>
      </div>
      <Button className="ml-4 bg-primary text-primary-foreground rounded-full py-2 px-6">
        Request Appointment
      </Button>
    </div>
  );
}

