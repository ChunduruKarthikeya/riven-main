"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./button";
import { ChevronRight } from "lucide-react"
import { Keypad, KeyboardProvider } from "./keyboard";
export const MacbookScroll = ({
  src,
  showGradient,
  title,
  badge,
}: {
  src?: string;
  showGradient?: boolean;
  title?: string | React.ReactNode;
  badge?: React.ReactNode;
}) => {
  const rotate = 0;
  const containerRef = React.useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="flex shrink-0 transform flex-col items-center justify-start [perspective:800px]"
    >
      <KeyboardProvider containerRef={containerRef} enableSound={true}>
      {/* Background Glow */}
      <div className="absolute inset-0 -z-20 flex items-center justify-center opacity-30 pointer-events-none">
        <div className="h-[60rem] w-[80rem] bg-[radial-gradient(circle_at_center,_#5227FF_0%,_transparent_70%)]" />
      </div>

      <div
        className="mb-10 sm:mb-14 text-center"
      >
        
      </div>
      {/* Lid */}
      <Lid
        src={src}
        rotate={rotate}
      />
      {/* Base area with metallic edge highlights */}
      <div className="relative -z-10 -mt-2 h-[22rem] w-[32rem] overflow-hidden rounded-2xl bg-gradint-to-b dark:bg-[#404046] shadow-[0_10px_50px_rgba(0,0,0,0.5),0_1px_2px_rgba(255,255,255,0.08)_inset]"> 
        
        {/* Metallic Side Highlight / Border */}
        <div className="absolute inset-0 rounded-2xl pointer-events-none border border-white/10" />
        {/* above keyboard bar */}
        <div className="relative h-10 w-full">
          <div className="absolute inset-x-0 mx-auto h-4 w-[80%] bg-gradient-to-b from-[#2a2a2e] via-[#1a1a1d] to-[#0d0d0f]" />
        </div>
        <div className="relative flex px-2 pt-1">
          <div className="mx-auto h-full w-[10%] overflow-hidden opacity-50">
            <SpeakerGrid />
          </div>
          <div className="mx-auto h-full w-[80%]">
            <Keypad />
          </div>
          <div className="mx-auto h-full w-[10%] overflow-hidden opacity-50">
            <SpeakerGrid />
          </div>
        </div>
        <Trackpad />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-2 w-20 rounded-tl-3xl rounded-tr-3xl bg-gradient-to-t from-[#272729] to-[#050505]" />
        {showGradient && (
          <div className="absolute inset-x-0 bottom-0 z-50 h-40 w-full bg-gradient-to-t from-white via-white to-transparent dark:from-black dark:via-black"></div>
        )}
        {badge && <div className="absolute bottom-4 left-4">{badge}</div>}
      </div>
      </KeyboardProvider>
    </div>
  );
};

export const Lid = ({
  rotate,
  src,
}: {
  rotate: number;
  src?: string;
}) => {
  return (
    <div className="relative [perspective:800px]">
      
      {/* 💻 LID */}
      <div
        style={{
          transform: "perspective(800px) rotateX(-25deg)",
          transformOrigin: "bottom",
          transformStyle: "preserve-3d",
        }}
        className="
          relative h-[12rem] w-[32rem] rounded-2xl 
          bg-gradient-to-b from-[#1a1a1d] to-[#0d0d0f] 
          p-[3px]

          /* 🔥 outer glow */
          shadow-[0_0_25px_rgba(255,255,255,0.05)]
        "
      >

        {/* 🔥 FULL EDGE OUTLINE */}
        <div className="absolute inset-0 rounded-2xl border border-white/10 pointer-events-none" />

        {/* 🔥 INNER METAL GLOW */}
        <div className="absolute inset-0 rounded-2xl shadow-[inset_0_1px_2px_rgba(255,255,255,0.15)] pointer-events-none" />

        {/* 🔥 TOP CURVE HIGHLIGHT (KEY) */}
        <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-white/20 via-white/10 to-transparent rounded-t-2xl pointer-events-none" />

        {/* 🔲 INNER BODY */}
        <div className="relative h-full w-full rounded-xl bg-[#050505] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_10px_40px_rgba(0,0,0,0.8)]">
          
          {/* 📺 SCREEN BEZEL */}
          <div className="absolute inset-[6px] rounded-lg overflow-hidden border border-white/10 bg-black">

            {/* 🖥 SCREEN CONTENT */}
            {src ? (
              <Image
                src={src}
                alt="Macbook Screen"
                fill
                priority
                quality={90}
                className="object-cover object-top"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-b from-[#050505] to-black" />
            )}

            
            {/* 🔥 CURVED GLASS GLOW */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.12),transparent_60%)] pointer-events-none" />

            
          </div>
        </div>
      </div>
    </div>
  );
};

export const Trackpad = () => {
  return (
    <div
      className="mx-auto my-1 h-32 w-[40%] rounded-xl bg-[#38383d] relative group"
      style={{
        boxShadow: "0px 0px 1px 1px rgba(0,0,0,0.4) inset, 0px 1px 1px 0px rgba(255,255,255,0.05)",
      }}
    >
      {/* Trackpad surface highlight */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
    </div>
  );
};



export const SpeakerGrid = () => {
  return (
    <div
      className="mt-2 flex h-full gap-[2px] px-[0.5px]"
      style={{
        backgroundImage: `
          radial-gradient(circle, rgba(30,30,32,0.9) 0.5px, transparent 0.5px),
          radial-gradient(circle, rgba(20,20,22,0.9) 0.5px, transparent 0.5px)
        `,
        backgroundSize: "2.5px 2.5px",
        backgroundPosition: "0 0, 1.25px 1.25px",
      }}
    />
  );
};


