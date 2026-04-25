"use client";

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Apple, LayoutGrid, ChevronRight } from 'lucide-react'
import GradientBlinds from './GradientBlinds'
import Container from '@/global/container'

export default function HeroSection() {
    return (
        <>
            <section className="relative h-[90vh] w-full overflow-hidden bg-black flex flex-col items-center justify-center">
                {/* Background Layer - Full Width + Hover Fix */}
                <GradientBlinds 
                    className="absolute inset-0 z-0 h-full w-full opacity-80 pointer-events-none"
                    gradientColors={['#FF9FFC', '#5227FF']}
                    angle={-45}
                    blindCount={20}
                    blindMinWidth={30}
                    noise={0.5}
                    spotlightRadius={0.6}
                    spotlightOpacity={1}
                    mirrorGradient={false}
                    mixBlendMode="screen"
                />

                {/* Content Layer - Pointer Pass-through & Responsive Layout */}
                <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                    <Container delay={0.1} className="flex h-full flex-col items-center justify-center text-center">
                        <div className="mx-auto max-w-3xl text-center pointer-events-auto px-6">
                            <div className="mx-auto max-w-md text-center">
                            <h1 className="text-balance font-serif text-4xl font-medium sm:text-5xl text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">Unlock your potential. Master your career.</h1>
                            <p className="text-balance mt-4 text-white/90 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">Riven is your all-in-one AI engine for career growth and skill mastery.</p>

                            <Button
                                asChild
                                size="sm"
                                className="mt-6 pr-1.5">
                                <Link href="/docs/changelog">
                                    <span className="text-nowrap">Release Notes</span>
                                    <ChevronRight className="opacity-50" />
                                </Link>
                            </Button>
                        </div>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    )
}
