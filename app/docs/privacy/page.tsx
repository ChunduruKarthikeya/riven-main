"use client"

import React from 'react'
import Link from 'next/link'

import Wrapper from '@/global/wrapper'
import AnimationContainer from '@/global/animation-container'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Logo } from '@/components/logo'

const privacyEntries = [
  {
    date: "Last Updated",
    version: "April 25, 2026",
    title: "1. Information I Collect",
    changes: [
      {
        type: "Data",
        description: "Account Information: Email, name, and profile details provided during sign-up to manage your personalized Riven experience.",
      },
      {
        type: "Data",
        description: "User Preferences: Your stock watchlist, typing progress, and career goals, stored securely to keep you informed and on track.",
      },
      {
        type: "Data",
        description: "Interaction Logs: Basic logs focused strictly on improving platform performance, AI accuracy, and fixing bugs.",
      }
    ]
  },
  {
    date: "Infrastructure",
    version: "Core Tools",
    title: "2. Technology & Third-Party Services",
    changes: [
      {
        type: "Frontend",
        description: "Next.js & Tailwind CSS: Modern frameworks used to provide a fast, responsive, and seamless user experience.",
      },
      {
        type: "Animations",
        description: "Framer Motion: Used to create the smooth, premium transitions and micro-animations throughout the platform.",
      },
      {
        type: "Analytics",
        description: "Privacy-focused analytics may be used to understand how users interact with our resources to improve content quality.",
      }
    ]
  },
  {
    date: "Protection",
    version: "Standard",
    title: "3. Data Security",
    changes: [
      {
        type: "Encryption",
        description: "All platform connections are strictly encrypted via high-level SSL/TLS protocols during transit.",
      },
      { 
        type: "Privacy",
        description: "We do not sell your personal data. Your learning progress and preferences are used solely to improve your experience on Riven.",
      }
    ]
  }
]

const PrivacyPage = () => {
    return (
        <section className="bg-background min-h-screen relative overflow-hidden">
            <div className="flex justify-center pt-10">
                <Link href="/">
                    <Logo />
                </Link>
            </div>
            <Wrapper>
                <AnimationContainer delay={0.1}>
                    <div className="max-w-4xl mx-auto pt-10 pb-16 px-6">
                        <div className="mb-12 text-center">
                            <Badge variant="outline" className="mb-4">Privacy Policy</Badge>
                            <h1 className="text-4xl md:text-5xl font-serif font-medium mb-4">Your Privacy Matters</h1>
                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                At Riven, I am committed to being transparent about how I handle your information and protect your data.
                            </p>
                        </div>

                        <div className="space-y-12 relative">
                            {/* Vertical Line */}
                            <div className="absolute left-0 sm:left-1/2 top-4 bottom-4 w-px bg-border -translate-x-1/2 hidden sm:block"></div>

                            {privacyEntries.map((entry, entryIdx) => (
                                <div key={entryIdx} className="relative">
                                    {/* Timeline Dot */}
                                    <div className="absolute left-0 sm:left-1/2 top-4 size-3 rounded-full bg-primary -translate-x-1/2 ring-4 ring-background z-10 hidden sm:block"></div>
                                    
                                    <div className={entryIdx % 2 === 0 ? "sm:pr-[50%] sm:text-right" : "sm:pl-[50%]"}>
                                        <div className={entryIdx % 2 === 0 ? "sm:mr-10" : "sm:ml-10"}>
                                            <div className="flex items-center gap-2 mb-2 sm:justify-normal justify-start">
                                                <span className="text-sm font-mono text-muted-foreground">{entry.date}</span>
                                                <Badge variant="secondary" className="text-[10px] uppercase">{entry.version}</Badge>
                                            </div>
                                            <h2 className="text-2xl font-serif font-medium mb-4">{entry.title}</h2>
                                            
                                            <div className="space-y-4">
                                                {entry.changes.map((change, changeIdx) => (
                                                    <Card key={changeIdx} className="border-none bg-muted/30 dark:bg-zinc-900/50">
                                                        <CardContent className="p-4 text-left">
                                                            <div className="flex items-start gap-3">
                                                                <Badge className="shrink-0 text-[10px] mt-0.5" variant="outline">
                                                                    {change.type}
                                                                </Badge>
                                                                <p className="text-sm leading-relaxed text-muted-foreground">
                                                                    {change.description}
                                                                </p>
                                                            </div>
                                                        </CardContent>
                                                    </Card>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </AnimationContainer>

                
            </Wrapper>
        </section>
    )
}

export default PrivacyPage
