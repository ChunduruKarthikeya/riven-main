import React from "react";
import { cn } from "@/lib/utils";

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function Wrapper({ children, className }: WrapperProps) {
  return (
    <div
      className={cn(
        "h-full mx-auto w-full max-w-screen-xl px-4 md:px-20",
        className
      )}
    >
      {children}
    </div>
  );
}