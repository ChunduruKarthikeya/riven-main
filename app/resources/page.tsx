import React from 'react'
import { LampComponent } from '@/components/lamp'
import { CardBody, CardItem,CardContainer } from '@/components/3d-card'
import { CheckIcon } from 'lucide-react'
import Link from 'next/link'
export default function ResourcesPage() {
  return (
    <section className="pt-0 md:pt-10 pb-24 bg-black relative z-10">
  <LampComponent />
  <div className="flex flex-wrap items-center justify-center flex-col md:flex-row gap-8 mt-[-150px] md:mt-[-180px]">

          <CardContainer className="inter-var ">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ={50}
                className="text-xl font-bold text-neutral-600 dark:text-white "
              >
                DSA Learning Resources
                
              </CardItem>
              <CardItem
                translateZ={60}
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Master DSA with ease using these resources!
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <Link href= "https://leetcode.com/"
                    className="text-primary font-medium hover:underline"
                    >
                     Leetcode
                    </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <Link href="https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
                    className="text-primary font-medium hover:underline"
                    >
                      TUF Strivers 
                  </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <Link href= "https://www.hackerrank.com/"
                    className="text-primary font-medium hover:underline"
                    >
                     HackerRank
                    </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <Link
                  href="https://www.codehelp.in/"
                   className="text-primary font-medium hover:underline"
                  >
                  Codehelp by Love Babbar
                 </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <Link
                  href="https://www.geeksforgeeks.org/"
                   className="text-primary font-medium hover:underline"
                  >
                  GeeksforGeeks
                 </Link>
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                
              </div>
            </CardBody>
          </CardContainer>
          
          {/* Card 2 */}
          <CardContainer className="inter-var ">
           <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ={50}
                className="text-xl font-bold text-neutral-600 dark:text-white "
              >
                Full Stack Development
                
              </CardItem>
              <CardItem
                translateZ={60}
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Developing expertise in full-stack development and system design.
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <Link
                   href="https://www.youtube.com/@freecodecamp"
                   className="text-primary font-medium hover:underline"
                  >
                   freecodecamp
                  </Link>
                  </li>
                  <li className="flex items-center gap-2">
                  <Link
                 href="https://www.youtube.com/@chaiaurcode"
                 className="text-primary font-medium hover:underline"
                 >
                Chai aur Code
                </Link>
                  </li>
                  <li className="flex items-center gap-2">
                   <Link
                  href="https://www.youtube.com/@javascriptmastery"
                  className="text-primary font-medium hover:underline"
                 >
                 JS Mastery
                  </Link>
                  </li>
                  <li className="flex items-center gap-2">
                 <Link
                 href="https://www.youtube.com/@CodeWithHarry/videos"
                 className="text-primary font-medium hover:underline"
                 >
               CodewithHarry
                </Link>
                  </li>
                  <li className="flex items-center gap-2">
                   
                    More resource gold on the way.
                  </li>
                  
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                
              </div>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var ">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ={50}
                className="text-xl font-bold text-neutral-600 dark:text-white "
              >
                AI and ML 
                
              </CardItem>
              <CardItem
                translateZ={60}
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Master the future — from AI basics to cutting-edge machine learning.
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <Link
                            href="https://roadmap.sh/ai-engineer"
                            className="text-primary font-medium hover:underline">
                            Roadmap
                        </Link>

                  </li>
                            <Link
                            href="https://www.deeplearning.ai/"
                            className="text-primary font-medium hover:underline">
                            deeplearning.ai
                        </Link>

                  <li className="flex items-center gap-2">
                    <Link
                            href="https://www.youtube.com/playlist?list=PLWKjhJtqVAblStefaz_YOVpDWqcRScc2s"
                            className="text-primary font-medium hover:underline">
                            ML resources
                        </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <Link
                            href="https://www.youtube.com/@statquest/playlists"
                            className="text-primary font-medium hover:underline">
                            Josh Starmer
                        </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    
                  More resource gold is on the way
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                
              </div>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var ">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ={50}
                className="text-xl font-bold text-neutral-600 dark:text-white "
              >
                Cyber Security
                
              </CardItem>
              <CardItem
                translateZ={60}
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Find, organize, and access top cybersecurity resources — from threat reports to best practices — all in one secure place.
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                   <Link
                            href="https://roadmap.sh/cyber-security"
                            className="text-primary font-medium hover:underline">
                            Roadmap
                        </Link>

                  </li>
                  <li className="flex items-center gap-2">
                    <Link
                            href="https://thexssrat.notion.site/List-of-resources-that-will-help-you-become-a-better-hacker-f1018e4f39c4410aab4ff22279e6d6b1"
                            className="text-primary font-medium hover:underline">
                            Tools and Guide
                        </Link>
                  </li>
                  <li className="flex items-center gap-2">
                   
                    More resource gold on the way.
                  </li>
                 
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                
              </div>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var ">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ={50}
                className="text-xl font-bold text-neutral-600 dark:text-white "
              >
                Data Analyst
               
              </CardItem>
              <CardItem
                translateZ={60}
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Discover datasets, tools, and guides to level up your analysis — all in one place.
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                   <Link
                            href="https://roadmap.sh/data-analyst"
                            className="text-primary font-medium hover:underline">
                            Roadmap
                        </Link>

                  </li>
                  <li className="flex items-center gap-2">
                   <Link
                            href="https://www.youtube.com/@AlexTheAnalyst/playlists"
                            className="text-primary font-medium hover:underline">
                            Resources
                        </Link> 
                  </li>
                   <li className="flex items-center gap-2">
                   <Link
                            href="https://www.kaggle.com/"
                            className="text-primary font-medium hover:underline">
                            Datasets Library
                        </Link> 
                  </li>
                  <li className="flex items-center gap-2">
                    
                    More resource gold is on the way
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                
              </div>
            </CardBody>
          </CardContainer>
          
          <CardContainer className="inter-var ">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ={50}
                className="text-xl font-bold text-neutral-600 dark:text-white "
              >
                 Roadmaps and Guides
                
              </CardItem>
              <CardItem
                translateZ={60}
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Your clear path from beginner to pro — with roadmaps, guides, and resources that keep you moving forward.
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <Link
                            href="https://roadmap.sh/"
                            className="text-primary font-medium hover:underline">
                            Roadmaps
                        </Link>

                  </li>
                  <li className="flex items-center gap-2">
                     <Link
                            href="https://bytebytego.com/guides/"
                            className="text-primary font-medium hover:underline">
                            System Design
                        </Link>
                    
                  </li>
                  <li className="flex items-center gap-2">
                    
                    More resources gold is on the way
                  </li>
                  
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                
              </div>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var ">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ={50}
                className="text-xl font-bold text-neutral-600 dark:text-white "
              >
                 Certifications Platforms
                
              </CardItem>
              <CardItem
                translateZ={60}
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Showcase your expertise with recognized credentials.
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <Link
                            href="https://www.coursera.org/"
                            className="text-primary font-medium hover:underline">
                            Coursera
                        </Link>

                  </li>
                  <li className="flex items-center gap-2">
                     <Link
                            href="https://www.freecodecamp.org/"
                            className="text-primary font-medium hover:underline">
                            freecodecamp Certifications
                        </Link>
                    
                  </li>
                    <li className="flex items-center gap-2">
                     <Link
                            href="https://info.credly.com/"
                            className="text-primary font-medium hover:underline">
                            Credly by Pearson
                        </Link>
                    
                  </li>
                  <li className="flex items-center gap-2">
                     <Link
                            href="https://www.theforage.com/"
                            className="text-primary font-medium hover:underline">
                            Forage
                        </Link>
                    
                  </li>
                  
                  <li className="flex items-center gap-2">
                    
                    More resource gold is on the way
                  </li>
                  
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                
              </div>
            </CardBody>
          </CardContainer>
           <CardContainer className="inter-var ">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ={50}
                className="text-xl font-bold text-neutral-600 dark:text-white "
              >
                 Job Search Platforms
                
              </CardItem>
              <CardItem
                translateZ={60}
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Land your next big role with the right tools, tips, and connections.
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <Link
                            href="https://www.linkedin.com/jobs/"
                            className="text-primary font-medium hover:underline">
                            LinkedIn Jobs
                        </Link>

                  </li>
                  <li className="flex items-center gap-2">
                     <Link
                            href="https://in.indeed.com/"
                            className="text-primary font-medium hover:underline">
                            Indeed
                        </Link>
                    
                  </li>
                    <li className="flex items-center gap-2">
                     <Link
                            href="https://www.naukri.com/"
                            className="text-primary font-medium hover:underline">
                            Naukri
                        </Link>
                    
                  </li>
                  <li className="flex items-center gap-2">
                     <Link
                            href="https://medial.app/jobs"
                            className="text-primary font-medium hover:underline">
                            Medial-(paid)
                        </Link>
                    
                  </li>
                  
                  <li className="flex items-center gap-2">
                    
                    More resource gold is on the way
                  </li>
                  
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                
              </div>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var">
     <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-[200px] rounded-xl p-6 border flex items-center justify-center">
    <CardItem
      translateZ={50}
      className="text-2xl font-bold text-neutral-600 dark:text-white text-center"
    >
      Coming Soon
      <p className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">I’m on it — finding the best, so you don’t have to.</p>
    </CardItem>
    </CardBody>
   </CardContainer>

        </div>
      </section>
  )
}
