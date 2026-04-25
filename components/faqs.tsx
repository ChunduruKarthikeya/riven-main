'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Card } from '@/components/ui/card'
import Link from 'next/link'

const faqItems = [
  {
    id: "item-1",
    question: "What is Riven?",
    answer:
      "Riven is an AI-powered job-ready practice platform designed to help students and developers prepare for technical interviews. It provides coding problems, AI explanations, practice tests, and performance insights to improve your skills.",
  },
  {
    id: "item-2",
    question: "How does the AI help in learning?",
    answer:
      "Riven uses AI to explain solutions, summarize concepts, and give personalized feedback on your practice. It helps you understand mistakes and learn faster while preparing for interviews.",
  },
  {
    id: "item-3",
    question: "Who can use Riven?",
    answer:
      "Riven is designed for students, job seekers, and developers who want to practice coding, improve problem-solving skills, and prepare for technical interviews.",
  },
  {
    id: "item-4",
    question: "What type of problems can I practice on Riven?",
    answer:
      "You can practice a variety of problems including Data Structures, Algorithms, system design basics, and interview-style coding challenges with AI-powered guidance.",
  },
  {
    id: "item-5",
    question: "Does Riven track my progress?",
    answer:
      "Yes. Riven provides analytics and dashboards to track your progress, study time, solved problems, and areas where you need improvement.",
  },
];

export default function FAQ() {
    return (
        <section className="bg-background @container py-12 md:py-24">
            <div className="mx-auto max-w-2xl px-6">
                <div className="text-center">
                    <h2 className="text-balance font-serif text-4xl font-medium">Frequently Asked Questions</h2>
                    <p className="text-muted-foreground mx-auto mt-4 max-w-md text-balance">Find answers to common questions about my platform.</p>
                </div>
                <Card
                    variant="outline"
                    className="mt-12 p-2">
                    <Accordion
                        type="single"
                        collapsible>
                        {faqItems.map((item) => (
                            <AccordionItem
                                key={item.id}
                                value={item.id}
                                className="border-b-0 px-4">
                                <AccordionTrigger className="cursor-pointer py-4 text-sm font-medium hover:no-underline">{item.question}</AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-muted-foreground pb-2 text-sm">{item.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </Card>
                
            </div>
        </section>
    )
}
