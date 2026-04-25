"use client"
import Link from 'next/link'
import Wrapper from '@/global/wrapper'
import AnimationContainer from '@/global/animation-container'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Logo } from '@/components/logo'
const termsEntries = [
  {
    date: "Last Updated",
    version: "April 25, 2026",
    title: "1. Acceptance of Terms",
    changes: [
      {
        type: "Agreement",
        description: "By accessing or using the Riven platform, you agree to be bound by these Terms of Service and all applicable laws and regulations.",
      },
      {
        type: "Requirement",
        description: "If you do not agree with any of these terms, you are prohibited from using or accessing this site.",
      }
    ]
  },
  {
    date: "Section 02",
    version: "Critical",
    title: "2. General Disclaimer",
    changes: [
      {
        type: "Policy",
        description: "Riven is an educational and career resource platform. All information provided, including AI-driven career insights, is for informational purposes only.",
      },
      {
        type: "Warning",
        description: "We do not guarantee specific career outcomes, job placements, or skill mastery. Your success depends on your own efforts and external factors.",
      },
      {
        type: "Duty",
        description: "Always verify career-related information with official sources or professional career counselors.",
      }
    ]
  },
  {
    date: "Section 03",
    version: "Legal",
    title: "3. Intellectual Property",
    changes: [
      {
        type: "Ownership",
        description: "The software, design, and original content on Riven are the exclusive property of Riven and its creators.",
      },
      { 
        type: "Rule",
        description: "You may not reproduce, distribute, or modify any portion of the platform without explicit written permission.",
      }
    ]
  },
  {
    date: "Section 04",
    version: "Liability",
    title: "4. Limitation of Liability",
    changes: [
      {
        type: "Clause",
        description: "In no event shall Riven or its partners be liable for any damages arising out of the use or inability to use the materials on Riven.",
      },
      {
        type: "Clause",
        description: "This includes loss of data, profit, or business interruption damages.",
      }
    ]
  },
  {
    date: "Section 05",
    version: "Court",
    title: "5. Governing Law",
    changes: [
      {
        type: "Law",
        description: "These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which the developer operates.",
      },
      {
        type: "Jurisdiction",
        description: "You irrevocably submit to the exclusive jurisdiction of the courts in that location.",
      }
    ]
  }
]

const TermsPage = () => {
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
                            <Badge variant="outline" className="mb-4">Terms of Service</Badge>
                            <h1 className="text-4xl md:text-5xl font-serif font-medium mb-4">Terms & Conditions</h1>
                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                By using Riven, you agree to follow these rules. Please read through my terms and conditions for a safe experience.
                            </p>
                        </div>

                        <div className="space-y-12 relative">
                            {/* Vertical Line */}
                            <div className="absolute left-0 sm:left-1/2 top-4 bottom-4 w-px bg-border -translate-x-1/2 hidden sm:block"></div>

                            {termsEntries.map((entry, entryIdx) => (
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

export default TermsPage
