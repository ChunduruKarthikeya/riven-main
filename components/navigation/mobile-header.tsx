"use client";

import React, { useState, forwardRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/nav-links";

type ListItemProps = Omit<
  React.ComponentPropsWithoutRef<typeof Link>,
  "title"
> & {
  label: string;
  href: string;
  children: React.ReactNode;
};

const ListItem = forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ className, label, href, children, ...props }, ref) => {
    return (
      <li>
        <Link
          href={href}
          ref={ref}
          className={cn(
            "group block rounded-full p-3 transition-all duration-200 hover:bg-white/5",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium text-white group-hover:text-white/90">
            {label}
          </div>
          <p className="text-xs text-zinc-400 group-hover:text-zinc-300">
            {children}
          </p>
        </Link>
      </li>
    );
  }
);

ListItem.displayName = "ListItem";

const MobileNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  const primaryLinks = NAV_LINKS.slice(0, 3);
  const secondaryLinks = NAV_LINKS.slice(3);

  return (
    <div className="flex xl:hidden items-center justify-end">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        {/* Menu Button */}
        <SheetTrigger asChild>
          <Button
            size="icon"
            variant="ghost"
            className="hover:bg-white/5 transition"
          >
            <Menu className="w-6 h-6 text-white" />
          </Button>
        </SheetTrigger>

        {/* Sheet */}
        <SheetContent className="w-screen bg-black/95 backdrop-blur-xl border-none p-0 flex flex-col [&>button]:hidden">
          
          {/* Close Button */}
          <div className="absolute top-4 right-4 z-50">
            <SheetClose asChild>
              <Button
                size="icon"
                variant="ghost"
                className="rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition"
              >
                <X className="w-5 h-5" />
              </Button>
            </SheetClose>
          </div>

          <SheetTitle className="sr-only">Menu</SheetTitle>
          <SheetDescription className="sr-only">
            Navigation menu
          </SheetDescription>

          {/* Content */}
          <div className="flex flex-col w-full h-full px-8 pt-24 pb-10 overflow-y-auto">

            {/* Logo / Heading */}
            <div className="mb-10">
              <h1 className="text-2xl font-serif text-white tracking-tight">
                Riven
              </h1>
            </div>

            {/* Primary Links */}
            <nav className="flex flex-col gap-6 mb-12">
              {primaryLinks.map((link, idx) => (
                <Link
                  key={link.title}
                  href={link.href}
                  onClick={handleClose}
                  className="group text-2xl font-semibold tracking-tight text-zinc-200 hover:text-white transition-all duration-300 flex items-center gap-3"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <span className="transition-transform group-hover:translate-x-2">
                    {link.title}
                  </span>
                </Link>
              ))}
            </nav>

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent mb-10" />

            {/* Secondary Links */}
            <nav className="flex flex-col gap-6 mb-16">
              {secondaryLinks.map((link, idx) => (
                <Link
                  key={link.title}
                  href={link.href}
                  onClick={handleClose}
                  className="group text-xl font-medium text-zinc-400 hover:text-white transition flex items-center gap-2"
                  style={{
                    animationDelay: `${
                      (idx + primaryLinks.length) * 100
                    }ms`,
                  }}
                >
                  <span className="transition-transform group-hover:translate-x-2">
                    {link.title}
                  </span>

                  {link.title === "News" && (
                    <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Footer */}
            <div className="mt-auto pt-6 border-t border-white/5">
              <p className="text-sm text-zinc-600 font-medium">
                © {new Date().getFullYear()} Riven Labs
              </p>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavbar;