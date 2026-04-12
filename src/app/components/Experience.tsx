"use client"
import { ChevronsDown } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const experience1: string[] = [
    "Engineered backend systems for an educational platform serving learners",
    "Architected and deployed 15+ responsive web applications using React.js, Next.js, and Tailwind CSS for clients across e-commerce, education, and service industries",
    "Built RESTful APIs with Node.js/Express and PostgreSQL, reducing average response time by 35% through query optimization and indexing strategies",
    "Designed and built responsive, mobile friendly websites using React, Next.js and Tailwind for small businesses and personal projects"
];

const experience2: string[] = [
    "Designed Tableau Dashboards for 5+ clients transforming raw data into actionable insights.",
    "Built and maintained complex SQL queries to extract and analyze large datasets, improving query efficiency.",
    "Conducted end to end data analysis (cleaning, modelling, visualization) for e-commerce and healthcare clients, identifying trends that boost revenue",
    "Created Predictive models (python and sci-kit learn) to forecast sales and customer behaviour, improving inventory planning accuracy"
]

const experience3: string[] = [
    "Developed and delivered comprehensive hands-on programming lectures in Python and SQL, ensuring students gained practical knowledge", 
    "Provided personalized tutoring, code reviews, helping students learn and master complex programming concepts",
    "Implemented high-level assessment to monitor students progress resulting in a high satisfaction rate" 
]
export default function Experience() {
    const container = useRef(null);

    useGSAP(() => {

        gsap.fromTo('[data-animation="fade-down"]',
            {
                y: -50,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                scrollTrigger: {
                    trigger: '[data-animation="fade-down"]',
                    start: "top 85%",
                    toggleActions: "play none none none",
                }
            }
        );


    const cards = gsap.utils.toArray('.experience-item');
    if (cards.length > 0) {
        gsap.fromTo(cards,
            {
                y: 50,      // Start 50px lower (fade up)
                x: -30,     // Start 30px to the left
                opacity: 0,
            },
            {
                y: 0,       // End at original position
                x: 0,       // End at original position
                opacity: 1,
                duration: 0.8,
                stagger: 0.25,  // Slightly slower for experience cards
                ease: "power3.out",  // Smoother easing
                scrollTrigger: {
                    trigger: '.experience-container',
                    start: "top 80%",
                    toggleActions: "play none none none",
                }
            }
        );
    }

    }, { scope: container });


    return (
        <section id="experience" ref={container} className="flex flex-col items-start w-full xl:w-[90vw] gap-15 px-10">
            <div data-animation="fade-down" className="flex flex-col items-start gap-6">
                <h1 className="text-xl text-white/50">Real Projects, real Impact<br/> <span className="text-4xl tracking-widest xl:text-6xl font-bold text-white">Experience.</span></h1>
            </div>
            <div className="flex flex-col items-start gap-4 w-full bg-[#211832] rounded-lg border border-white/[0.10] hover:border-white transition-all duration-300 px-10 py-5">
                <div className="flex flex-col items-start gap-4">
                    <p className="text-xs p-2 rounded-lg bg-[#915eff]/10 backdrop-blur-lg text-white/40 ">100% Client Satisfaction rate</p>
                    <div>
                        <p className="text-xl font-semibold">Full Stack Developer @ <span className="text-[#915eff]">Freelance</span></p>
                        <p className="text-md text-white/50">February 2024 - Present <span>Remote</span></p>
                    </div>
                    <div className="experience-container flex flex-col items-start gap-5">
                        {experience1.map((item: string,i: number) => (
                            <div key={i} className="experience-item flex items-start justify-start gap-2">
                                <ChevronsDown className="text-[#915eff]" size={40}/>
                                <p className="text-sm md:text-lg text-white">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-start gap-4 w-full bg-[#211832] rounded-lg border border-white/[0.10] px-5 py-2">
                <div className="flex flex-col items-start gap-4">
                    <p className="text-xs p-2 rounded-lg bg-[#915eff]/10 backdrop-blur-lg text-white/40 ">100% Client Satisfaction rate</p>
                    <div>
                        <p className="text-xl font-semibold">Junior Data Analyst @ <span className="text-[#915eff]">Freelance</span></p>
                        <p className="text-md text-white/50">September 2023 - August 2024 <span>Remote</span></p>
                    </div>
                    <div className="experience-container flex flex-col items-start gap-5">
                        {experience2.map((item: string,i: number) => (
                            <div key={i} className="experience-item flex items-start justify-start gap-2">
                                <ChevronsDown className="text-[#915eff]" size={40}/>
                                <p className="text-sm md:text-lg text-white">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-start gap-4 w-full bg-[#211832] rounded-lg border border-white/[0.10] px-5 py-2">
                <div className="flex flex-col items-start gap-4">
                    <p className="text-xs p-2 rounded-lg bg-[#915eff]/10 backdrop-blur-lg text-white/40 ">100% Client Satisfaction rate</p>
                    <div>
                        <p className="text-xl font-semibold">Programming Instructor @ <span className="text-[#915eff]">Ecolyte Academy</span></p>
                        <p className="text-md text-white/50">January 2021 - September 2023</p>
                    </div>
                    <div className="experience-container flex flex-col items-start gap-5">
                        {experience3.map((item: string,i: number) => (
                            <div key={i} className="experience-item flex items-start justify-start gap-2">
                                <ChevronsDown className="text-[#915eff]" size={40}/>
                                <p className="text-sm md:text-lg text-white">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
};