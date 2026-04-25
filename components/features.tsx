"use client";

import React, { JSX, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Globe } from "@/components/ui/globe";
import { TrendingUp } from "lucide-react";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import {
  ChatGPTIcon,
  GoogleIcon,
  NotionIcon,
  GoogleDrive,
  Github,
  Linear,
} from "@/components/ui/svgs/brand-icons";
import { Slack } from "@/components/ui/svgs/slack";
import { Claude } from "@/components/ui/svgs/claude";
import { Supabase } from "@/components/ui/svgs/supabase";
import { Vercel } from "@/components/ui/svgs/vercel";
import { Firebase } from "./ui/svgs/firebase";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Keyboard } from "@/components/ui/keyboard";
import { cn } from "@/lib/utils";
import { CodeBlock } from "@/components/ui/code-block";
import AnimationContainer from "@/global/animation-container";

/* ------------------ Types ------------------ */

type ChartData = {
  month: string;
  study: number;
  revision: number;
};


/* ------------------ Data ------------------ */

const chartData: ChartData[] = [
  { month: "January", study: 186, revision: 80 },
  { month: "February", study: 305, revision: 200 },
  { month: "March", study: 237, revision: 120 },
  { month: "April", study: 73, revision: 190 },
  { month: "May", study: 209, revision: 130 },
  { month: "June", study: 214, revision: 140 },
];


const chartConfig = {
  study: {
    label: "Study Hours",
    color: "#000000",
  },
  revision: {
    label: "Revision",
    color: "#a1a1aa",
  },
};

/* ------------------ Orbit Icon ------------------ */  
const OrbitIcon = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={cn("flex size-9 items-center justify-center  bg-zinc-950 p-2 shadow-2xl", className)}>
    {children}
  </div>
);

/* ------------------ Component ------------------ */

export function Features(): JSX.Element {
  const [isStudyMode, setIsStudyMode] = useState<boolean>(false);
  const [timeText, setTimeText] = React.useState("today");

  React.useEffect(() => {
    const date = new Date();
    const day = date.getDay();
    const hour = date.getHours();

    if (day === 0 || day === 6) {
      setTimeText("this weekend");
    } else if (hour >= 5 && hour < 12) {
      setTimeText("this morning");
    } else if (hour >= 12 && hour < 17) {
      setTimeText("this afternoon");
    } else if (hour >= 17 && hour < 21) {
      setTimeText("this evening");
    } else {
      setTimeText("this midnight");
    }
  }, []);


  return (
    <div className="flex flex-col items-center justify-center w-full pt-20 gap-8">
      <div className="flex flex-col items-center text-center gap-4">
        <AnimationContainer animation="fadeUp" delay={0.4}>
            <h2 className="text-balance font-serif text-3xl font-medium sm:text-4xl md:text-5xl tracking-tight text-foreground">
                Prepare {timeText}
            </h2>
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={0}>
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-6">
              Riven is an AI-integrated stock watchlist designed for smarter investment tracking.
            </p>
        </AnimationContainer>
      </div>
    <section className="bg-gray-50 pb-12 md:pb-24 pt-0 dark:bg-transparent">
      <div className="mx-auto max-w-3xl lg:max-w-5xl px-6">
        <div className="relative">
          <div className="relative z-10 grid grid-cols-6 gap-3">

            {/* Focus Globe Card */}

            <Card className="relative col-span-full flex overflow-hidden lg:col-span-2">
              <CardContent className="relative m-auto size-fit pt-6">
                <Globe className="top-20" />
                <span className="font-serif pointer-events-none bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-6xl sm:text-7xl lg:text-8xl text-transparent dark:from-white dark:to-slate-900/10">
                  Focus
                </span>
              </CardContent>
            </Card>

            {/* Notifications */}

            <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2">
              <CardHeader className="p-6 pb-0">
                <CardTitle className="text-base font-medium">
                  Supercharged by AI
                </CardTitle>
                <CardDescription>
                   Built with AI that actually pays attention in class 😂
                </CardDescription>
              </CardHeader>

              <CardContent className="p-0 h-48 overflow-hidden">
                <div className="relative flex h-48 w-full items-center justify-center overflow-hidden pointer-events-none">
          <div className="absolute flex h-[470px] w-[470px] items-center justify-center top-[-80px] scale-[0.6] sm:scale-100">
            <div className="relative z-20 flex size-10 items-center justify-center rounded-full bg-black shadow-lg border border-zinc-800">
              <ChatGPTIcon className="size-5" />
            </div>

            <OrbitingCircles iconSize={36} radius={140} duration={40}>
              <OrbitIcon><Vercel /></OrbitIcon>
              <OrbitIcon><GoogleDrive /></OrbitIcon>
              <OrbitIcon><ChatGPTIcon /></OrbitIcon>
              <OrbitIcon><Firebase /></OrbitIcon>
            </OrbitingCircles>

            <OrbitingCircles iconSize={36} radius={100} reverse duration={20}>
              <OrbitIcon><NotionIcon /></OrbitIcon>
              <OrbitIcon><Slack /></OrbitIcon>
              <OrbitIcon><Claude /></OrbitIcon>
              <OrbitIcon><Linear /></OrbitIcon>
            </OrbitingCircles>

            <OrbitingCircles iconSize={36} radius={60} duration={15}>
              <OrbitIcon><GoogleIcon /></OrbitIcon>
              <OrbitIcon><Github /></OrbitIcon>
              <OrbitIcon><Supabase /></OrbitIcon>
            </OrbitingCircles>
          </div>
        </div>

        <div className="space-y-1 relative z-20 mt-auto">
          <h2 className="text-xl font-bold tracking-tight">AI Integration</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Supercharged by AI to decode the stock market in real time
          </p>
        </div>
              </CardContent>
            </Card>

            {/* Checklist */}

            <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2">
              <CardHeader className="p-6 pb-2">
                <CardTitle className="text-base font-medium">
                  Learn to Code with Resources
                </CardTitle>
                <CardDescription>
                Turning code from “why isn’t this working?” into “ohhh 😮”
                </CardDescription>
              </CardHeader>

              <CardContent className="px-6 pb-6">
                <div className="h-full w-full">
                  <CodeBlock
                    language="typescript"
                    filename="learn-code.ts"
                    code={`const studyPlan = {
  console.log("Opening laptop...");
  console.log("Watching YouTube instead 📺");
  console.log("Googling:", "how to stay focused 😭");
  console.log("Hello World!");
};
  `}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Study Chart */}

            <Card className="relative col-span-full overflow-hidden lg:col-span-3">
              <CardHeader>
                <CardTitle>Study Analytics Dashboard</CardTitle>
                <CardDescription>
                  Netflix knows your schedule better than your books do
                </CardDescription>
              </CardHeader>

              <CardContent>
                <ChartContainer config={chartConfig}>
                  <BarChart data={chartData}>
                    <CartesianGrid vertical={false} />
                    <XAxis
                      dataKey="month"
                      tickFormatter={(value: string) => value.slice(0, 3)}
                    />

                    <ChartTooltip
                      content={<ChartTooltipContent />}
                    />

                    <Bar dataKey="study" fill="var(--color-study)" radius={4} />
                    <Bar dataKey="revision" fill="var(--color-revision)" radius={4} />
                  </BarChart>
                </ChartContainer>
              </CardContent>

              <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 font-medium">
                  Study efficiency up by 12% this week
                  <TrendingUp className="h-4 w-4" />
                </div>

                <div className="text-muted-foreground">
                  Showing study hours for the last 6 months
                </div>
              </CardFooter>
            </Card>

            {/* AI Orbit */}

            <Card className="relative col-span-full overflow-hidden lg:col-span-3">
              <CardContent className="grid h-full pt-6 sm:grid-cols-2">

                <div className="space-y-1">
                  <CardTitle className="text-base font-medium">Practice Typing</CardTitle>
                  <CardDescription className="whitespace-nowrap">
                    You vs keyboard = keyboard winning
                  </CardDescription>
                </div>
                    <div className="scale-[0.7] sm:scale-90 lg:scale-95 origin-middle mt-4 sm:mt-15">
                  <Keyboard />
                </div>
              </CardContent>
            </Card>
          
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}