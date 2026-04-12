"use client"
import Projects from "@/lib/web2Projects"
import ProCard from "@/app/components/proCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);


export default function Topproject() {
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


        // Remove the setTimeout and just animate cards directly
    const cards = gsap.utils.toArray('.card-item');
    if (cards.length > 0) {
        gsap.fromTo(cards,
            {
                x: -40,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.3,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: '.cards-container',
                    start: "top 80%",
                    toggleActions: "play none none none",
                }
            }
        );
    }

    }, { scope: container });

    return(
        <section id="projects" ref={container} className=" w-full xl:w-[95vw] flex flex-col items-start justify-center gap-10 px-5">
            <div data-animation="fade-down" className="flex flex-col items-start gap-6">
                <h1 className="text-xl text-white/50">MY WORK <br/> <span className="text-4xl tracking-widest xl:text-6xl font-bold text-white">Projects.</span></h1>
                <p className="w-2/3 text-md text-white/50">Each project reflects real-world problem solving — from AI-powered apps to microservices architecture. Click any project to explore the live demo or the Github repo.</p>
            </div>
            <div className="cards-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10">
                {Projects.map((project, i) => (<ProCard key={i} data={project} className="card-item"/>))}
            </div>
        </section>
    )
};
