import HeroSection from '@/components/hero-section'
import Header from '@/components/navigation/header'
import AnimationContainer from '@/global/animation-container'
import Wrapper from '@/global/wrapper'
import { Features } from '@/components/features'
import Testimonials from '@/components/testimonials'
import FAQ from '@/components/faqs'
import Stats from '@/components/stats'
import { MacbookScroll } from '@/components/ui/macbook-scroll'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
export default function Home() {
  return (
    <section className="bg-background overflow-hidden relative">
      <Header />
      <AnimationContainer delay={0}>
        <HeroSection />
      </AnimationContainer>
      <Wrapper>
        <AnimationContainer delay={0}>
          <Features />
        </AnimationContainer>
        <AnimationContainer delay={0}>
          <Stats />
        </AnimationContainer>
        <AnimationContainer delay={0}>
          <Testimonials />
        </AnimationContainer>
        <AnimationContainer delay={0}>
          <FAQ />
        </AnimationContainer>
        
      </Wrapper>
      <section className="w-full bg-black pt-36 pb-0 flex flex-col items-center overflow-hidden">
  <AnimationContainer
  delay={0.2}
  animation="scaleUp"
  className="relative w-full flex flex-col items-center justify-center"
>


            <div className="mx-auto max-w-2xl px-6">
              <div className="text-center">
                <h2 className="text-balance font-serif text-3xl sm:text-4xl font-medium text-white">Effortless by Design</h2>
                <p className="text-zinc-400 mx-auto mt-4 max-w-md text-balance text-sm">Everything you need to know, made effortless</p>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                        <Button
                                      asChild
                                      size="sm"
                                      className=" pr-1">
                                      <Link href="/resources">
                                          <span className="text-nowrap">Start Learning </span>
                                          <ChevronRight className="opacity-50" />
                                      </Link>
                                  </Button>
                          
                      </div>  
              </div>
            </div>
        
  
  {/* 🌑 Background fade overlay - Intensified */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/10 to-black pointer-events-none z-10" />

  {/* 💻 MacBook Container */}
  <div className="relative w-full max-w-[2000px] flex flex-col items-center justify-start pt-10 sm:pt-14 px-6 pb-10 sm:pb-20">
  
    {/* 📈 Big + responsive scaling + brightness fix + Margin compensation for scale */}
    <div
      className="
        origin-top transition-transform duration-500
        scale-[0.6] sm:scale-[0.7] md:scale-[0.9] lg:scale-[1.1] xl:scale-[1.2]
        mb-[-13rem] sm:mb-[-10rem] md:mb-[-3rem] lg:mb-[4rem] xl:mb-[7rem]
        translate-y-2
        brightness-110 contrast-105
      "
    >

      <MacbookScroll src="/dashboard.png" showGradient />
    </div>
    {/* 🌑 Maximized bottom-up fade */}
    <div className="absolute bottom-0 left-0 w-full h-56 sm:h-80 md:h-96 bg-gradient-to-t from-black via-black via-black/40 via-black/20 to-transparent z-20" /> 
    </div>
</AnimationContainer>
</section>
    </section>
  )
}
