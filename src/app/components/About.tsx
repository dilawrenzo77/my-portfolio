"use client"
import Card from "./Card";
import { AboutData } from "../../lib/data";
import { About } from "../../types/data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const container = useRef(null);

    useGSAP(() => {
        // Animate the heading section (only once)
        gsap.fromTo('[data-animation="fade-up"]',
            {
                y: 50,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                scrollTrigger: {
                    trigger: '[data-animation="fade-up"]',
                    start: "top 85%",
                    toggleActions: "play none none none",
                }
            }
        );

        // Animate the paragraph separately (only once)
        gsap.fromTo('[data-animation="zoom"]',
            {
                scale: 0.95,
                opacity: 0,
            },
            {
                scale: 1,
                opacity: 1,
                duration: 0.7,
                ease: "back.out(1.2)",
                scrollTrigger: {
                    trigger: '[data-animation="zoom"]',
                    start: "top 85%",
                    toggleActions: "play none none none",
                }
            }
        );

        // Animate the cards container first (fade-up with slight delay)
        gsap.fromTo('.cards-container',
            {
                y: 30,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.5,
                delay: 0.2, // Small delay before container fades in
                scrollTrigger: {
                    trigger: '.cards-container',
                    start: "top 85%",
                    toggleActions: "play none none none",
                }
            }
        );

        // Animate cards with stagger effect (only once)
        const cards = gsap.utils.toArray('.card-item');
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
                    trigger: '.cards-container', // Trigger when container comes into view
                    start: "top 85%",
                    toggleActions: "play none none none",
                }
            }
        );

    }, { scope: container });

    return(
        <section id="about" ref={container} className="flex flex-col items-start w-full xl:w-[90vw] gap-20 px-10">
            <div data-animation="fade-up" className="flex flex-col items-start gap-6">
                <h1 className="text-xl text-white/50">WHY WORK WITH ME <br/> <span className="text-4xl tracking-widest xl:text-6xl font-bold text-white">Overview.</span></h1>
                <p data-animation="zoom" className="w-2/3 text-md text-white/50">I focus on writing clean, purposeful code that contributes to meaningful business outcomes. Across different projects, I’ve built RESTful APIs, integrated AI features into applications, and developed clean, user-friendly interfaces for softwares. My goal is to deliver reliable, well-tested software that&apos;s ready to perform as it grows.</p>
            </div>
            <div className="cards-container w-full flex flex-wrap items-start justify-center gap-12">
                {AboutData.map((item: About, index: number) => (
                    <div key={item.name} className="card-item" data-animation="fade-up">
                        <Card 
                            name={item.name}
                            description={item.description}
                            image={item.image}
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}