"use client";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/ui/text-reveal-card";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center bg-[#0E0E10] min-h-screen w-full px-4">
      <TextRevealCard
        text="404 - Page Not Found"
        revealText="Go To Home!"
      >
        <TextRevealCardTitle>
          Riven
        </TextRevealCardTitle>
        <TextRevealCardDescription>
          The page you are looking for doesn't exist. Hover over the card to reveal the hidden
          text.
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
}
