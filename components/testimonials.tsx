import { Card } from '@/components/ui/card'
import { Marquee } from "@/components/ui/marquee"
import Wrapper from "@/global/wrapper"

const testimonials = [
  {
    name: "Arjun Mehta",
    role: "Final Year CSE Student",
    quote:
      "Riven helped me prepare for coding interviews with structured practice and AI feedback. It made my preparation much more efficient.",
  },
  {
    name: "Priya Sharma",
    role: "Aspiring Software Developer",
    quote:
      "The AI-powered explanations in Riven helped me understand difficult problems quickly. It feels like having a personal mentor while practicing.",
  },
  {
    name: "Rahul Verma",
    role: "Backend Developer",
    quote:
      "Riven’s practice environment and real interview-style questions helped me build confidence before my technical interviews.",
  },
  {
    name: "Sneha Reddy",
    role: "Data Science Enthusiast",
    quote:
      "With Riven, I could practice problems, review concepts, and get AI-driven insights on my mistakes. It really accelerated my learning.",
  },
];

const firstRow = testimonials.slice(0, testimonials.length / 2);
const secondRow = testimonials.slice(testimonials.length / 2);

const ReviewCard = ({
  name,
  role,
  quote,
}: {
  name: string;
  role: string;
  quote: string;
}) => {
  return (
    <Card
      variant="outline"
      className="flex w-full flex-col gap-3 rounded-2xl p-6 text-sm bg-card/50 backdrop-blur-sm border-border/50">
      <div className="flex flex-col justify-between h-full space-y-4">
        <p className="text-foreground text-sm md:text-base leading-relaxed break-words whitespace-pre-wrap">
          "{quote}"
        </p>
        <div className="pt-2 border-t border-border/10">
          <p className="text-foreground text-sm font-semibold">{name}</p>
          <p className="text-muted-foreground text-xs">{role}</p>
        </div>
      </div>
    </Card>
  );
};

export default function Testimonials() {
  return (
    <section className="bg-background py-24 relative overflow-hidden">
      <Wrapper>
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <h2 className="text-balance font-serif text-3xl font-medium sm:text-4xl md:text-5xl tracking-tight">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground text-balance max-w-2xl mx-auto text-sm md:text-base">
            Hear from the teams and individuals who have transformed their workflow with our platform.
          </p>
        </div>

        <div className="mt-16 w-full relative overflow-hidden">
          <div className="relative flex h-[600px] w-full flex-row items-center justify-center overflow-hidden rounded-xl border border-border/50 bg-background/50">
            <Marquee pauseOnHover vertical className="[--duration:20s] flex-1">
              {firstRow.map((review) => (
                <ReviewCard key={review.name} {...review} />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover vertical className="[--duration:20s] flex-1 hidden sm:flex">
              {secondRow.map((review) => (
                <ReviewCard key={review.name} {...review} />
              ))}
            </Marquee>

            {/* Gradient overlays */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}
