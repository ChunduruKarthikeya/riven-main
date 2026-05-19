import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type FooterLink = {
  title: string;
  href: string;
};

interface FooterProps {
  className?: string;
  title?: string;
}

export default function Footer({ className }: FooterProps): React.ReactNode {
  const linksLeft: FooterLink[] = [
    {
    title: "Home",
    href: "/",
  },
  {
    title: "Typing Practice",
    href: "/learn-typing",
  },
  
  {
    title: "Resources",
    href: "/resources",
  },
  {
    title: " Tech Blogs",
    href: "/blogs",
  },
  {
    title: "Riven-AI",
    href: "/riven-ai",
  },
  {
    title: "Testing Page",
    href: "/test-site",
  },
  ];

  const linksRight: FooterLink[] = [
    { title: "Privacy", href: "/docs/privacy" },
    { title: "Terms", href: "/docs/terms" },
  ];

  return (
    <footer className={cn("w-full bg-black border-t border-zinc-900 px-4 md:px-0", className)}>
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-10 md:py-6 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0 text-zinc-500 text-sm font-normal tracking-wide">
        
        {/* MOBILE VIEW - Block Style */}
        <div className="flex flex-col w-full gap-2 lg:hidden">
          {[...linksLeft, ...linksRight].map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="w-full bg-zinc-900/40 border border-zinc-900 rounded-full p-5 hover:bg-zinc-900/60 transition-colors flex items-center justify-between group"
            >
              <span className="text-zinc-200 text-base font-medium">{item.title}</span>
              <div className="text-zinc-600 group-hover:text-zinc-400 transition-colors">
                 {/* Optional: Add an icon or arrow here if desired, like in the reference image */}
              </div>
            </Link>
          ))}
          
          <div className="mt-6 text-center select-none text-[13px] text-zinc-600">
            © {new Date().getFullYear()}, Riven Labs
          </div>
        </div>

        {/* DESKTOP VIEW */}
        <div className="hidden lg:flex flex-row items-center justify-between w-full">
          {/* Left – Copyright */}
          <div className="select-none text-[13px]">
            © {new Date().getFullYear()}, Riven Labs
          </div>

          {/* Center – Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 lg:gap-10">
            {linksLeft.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="hover:text-zinc-300 transition-colors text-[13px] lg:text-[14px] flex items-center gap-2"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Right – Privacy / Terms */}
          <div className="flex items-center gap-6">
            <div className="h-5 w-px bg-zinc-800" />

            {linksRight.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="hover:text-zinc-300 transition-colors text-[14px] flex items-center gap-2"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
