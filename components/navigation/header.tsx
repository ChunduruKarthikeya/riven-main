"use client";

import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/logo";

import { NAV_LINKS } from "@/lib/nav-links";


// ✅ Import MobileNavbar with SSR disabled
const MobileNavbar = dynamic(() => import("./mobile-header"), { ssr: false });


const Header = () => {
    return (
        <header>
            <nav className="absolute top-0 z-50 w-full transition-all duration-300">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="relative flex items-center justify-between py-6">
                        {/* Left Section: Desktop Navigation */}
                        <div className="flex-1 flex items-center justify-start">
                            <div className="hidden xl:block">
                                <NavItems />
                            </div>
                        </div>

                        {/* Center Section: Logo */}
                        <div className="flex flex-1 items-center justify-center">
                            <Link href="/" aria-label="home" className="flex items-center space-x-2">
                                <Logo />
                            </Link>
                        </div>

                        {/* Right Section: CTA / Mobile Menu */}
                        <div className="flex flex-1 items-center justify-end gap-3">
                            <div className="hidden xl:flex items-center gap-3">
                                <Button asChild size="sm">
                                    <Link href="/sign-in">
                                        <span>Get Started</span>
                                    </Link>
                                </Button>
                            </div>
                            <div className="xl:hidden">
                                <MobileNavbar />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

const NavItems = () => {
    return (
        <ul className="flex gap-1">
            {NAV_LINKS.map((item, index) => (
                <li key={index}>
                    <Button asChild variant="ghost" size="sm" className="w-full text-neutral-400 hover:text-white hover:bg-white/5">
                        <Link href={item.href} className="text-base">
                            <span>{item.title}</span>
                        </Link>
                    </Button>
                </li>
            ))}
        </ul>
    );
};

export default Header;
