// "use client"
// import Cube from "../../components/Cube";
// import { Skills } from "../../lib/data";
// import { Skill } from "../../types/data";

// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useRef } from "react";

// gsap.registerPlugin(ScrollTrigger);

// export default function Stack() {
//     const container = useRef(null);

//     useGSAP(() => {
//         // Animate the heading section (only once)
//         gsap.fromTo('[data-animation="fade-down"]',
//             {
//                 y: -50,
//                 opacity: 0,
//             },
//             {
//                 y: 0,
//                 opacity: 1,
//                 duration: 0.8,
//                 scrollTrigger: {
//                     trigger: '[data-animation="fade-up"]',
//                     start: "top 85%",
//                     toggleActions: "play none none none",
//                 }
//             }
//         );

//         gsap.fromTo('[data-animation="fade-up"]',
//             {
//                 y: 50,
//                 opacity: 0,
//             },
//             {
//                 y: 0,
//                 opacity: 1,
//                 duration: 0.8,
//                 scrollTrigger: {
//                     trigger: '[data-animation="fade-up"]',
//                     start: "top 85%",
//                     toggleActions: "play none none none",
//                 }
//             }
//         );

//         // Animate the paragraph separately (only once)
//         gsap.fromTo('[data-animation="zoom"]',
//             {
//                 scale: 0.95,
//                 opacity: 0,
//             },
//             {
//                 scale: 1,
//                 opacity: 1,
//                 duration: 0.7,
//                 ease: "back.out(1.2)",
//                 scrollTrigger: {
//                     trigger: '[data-animation="zoom"]',
//                     start: "top 85%",
//                     toggleActions: "play none none none",
//                 }
//             }
//         );

//         // Animate the cards container first (fade-up with slight delay)
//         gsap.fromTo('.cards-container',
//             {
//                 y: 30,
//                 opacity: 0,
//             },
//             {
//                 y: 0,
//                 opacity: 1,
//                 duration: 0.5,
//                 delay: 0.2, // Small delay before container fades in
//                 scrollTrigger: {
//                     trigger: '.cards-container',
//                     start: "top 85%",
//                     toggleActions: "play none none none",
//                 }
//             }
//         );

//         // Animate cards with stagger effect (only once)
//         const cards = gsap.utils.toArray('.card-item');
//         gsap.fromTo(cards,
//             {
//                 y: 40,
//                 opacity: 0,
//             },
//             {
//                 y: 0,
//                 opacity: 1,
//                 duration: 0.6,
//                 stagger: 0.15,
//                 ease: "power2.out",
//                 scrollTrigger: {
//                     trigger: '.cards-container', // Trigger when container comes into view
//                     start: "top 85%",
//                     toggleActions: "play none none none",
//                 }
//             }
//         );

//     }, { scope: container });

//     return(
//         <section id="stack" ref={container} className='flex flex-col items-start justify-start gap-8 w-full xl:w-[90vw]'>
//             <div data-animation="fade-down" className="flex flex-col items-start gap-6">
//                 <h1 className="text-xl text-white/50">WHY WORK WITH ME <br/> <span className="text-4xl tracking-widest xl:text-6xl font-bold text-white">Overview.</span></h1>
//             </div>
//             <div className="w-full flex flex-col justify-center gap-20">
//                 <div data-animation="fade-up" className="w-full flex flex-col justify-start gap-10">
//                     {/* title */}
//                     <div className="flex items-center gap-5">
//                         <span className="block w-8 bg-teal-400 rounded-full h-0.5"></span>
//                         <p className="text-lg text-teal-400">Frontend</p>
//                         <span className="block w-full h-px bg-white/[0.07]"></span>
//                     </div>

//                     {/* body */}
//                     <div className="w-full flex items-center gap-15">
//                         {Skills.map((item: Skill) => (
//                             (item.category === "Frontend" && <Cube 
//                                 key={item.name}
//                                 name={item.name}
//                                 image={item.image}
//                             />)
//                         ))}
//                     </div>

//                 </div>
//                 <div data-animation="fade-up" className="w-full flex flex-col justify-start gap-10">
//                     {/* title */}
//                     <div className="flex items-center gap-5">
//                         <span className="block w-8 bg-green-400 rounded-full h-0.5"></span>
//                         <p className="text-lg text-green-400">Backend</p>
//                         <span className="block w-full h-px bg-white/[0.07]"></span>
//                     </div>

//                     {/* body */}
//                     <div className="w-full flex items-center gap-15">
//                         {Skills.map((item: Skill) => (
//                             (item.category === "Backend" && <Cube 
//                                 key={item.name}
//                                 name={item.name}
//                                 image={item.image}
//                             />)
//                         ))}
//                     </div>

//                 </div>
//                 <div data-animation="fade-up" className="w-full flex flex-col justify-start gap-10">
//                     {/* title */}
//                     <div className="flex items-center gap-5">
//                         <span className="block w-8 bg-amber-400 rounded-full h-0.5"></span>
//                         <p className="text-lg text-amber-400">Databases</p>
//                         <span className="block w-full h-px bg-white/[0.07]"></span>
//                     </div>

//                     {/* body */}
//                     <div className="w-full flex items-center gap-15">
//                         {Skills.map((item: Skill) => (
//                             (item.category === "Database" && <Cube 
//                                 key={item.name}
//                                 name={item.name}
//                                 image={item.image}
//                             />)
//                         ))}
//                     </div>

//                 </div>
//                 <div data-animation="fade-up" className="w-full flex flex-col justify-start gap-10">
//                     {/* title */}
//                     <div className="flex items-center gap-5">
//                         <span className="block w-8 bg-purple-400 rounded-full h-0.5"></span>
//                         <p className="text-lg text-purple-400">Devops</p>
//                         <span className="block w-full h-px bg-white/[0.07]"></span>
//                     </div>

//                     {/* body */}
//                     <div className="w-full flex items-center gap-15">
//                         {Skills.map((item: Skill) => (
//                             (item.category === "Devops" && <Cube 
//                                 key={item.name}
//                                 name={item.name}
//                                 image={item.image}
//                             />)
//                         ))}
//                     </div>

//                 </div>
//                 <div data-animation="fade-up" className="w-full flex flex-col justify-start gap-10">
//                     {/* title */}
//                     <div className="flex items-center gap-5">
//                         <span className="block w-8 bg-pink-400 rounded-full h-0.5"></span>
//                         <p className="text-lg text-pink-400">AI</p>
//                         <span className="block w-full h-px bg-white/[0.07]"></span>
//                     </div>

//                     {/* body */}
//                     <div className="w-full flex items-center gap-15">
//                         {Skills.map((item: Skill) => (
//                             (item.category === "AI" && <Cube 
//                                 key={item.name}
//                                 name={item.name}
//                                 image={item.image}
//                             />)
//                         ))}
//                     </div>

//                 </div>
//             </div>
//         </section>
//     )
// };

"use client"
import Cube from "../../components/Cube";
import { Skills } from "../../lib/data";
import { Skill } from "../../types/data";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Stack() {
    const container = useRef(null);

    useGSAP(() => {
        // Animate the heading section (fade down)
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

        // Animate each skill category section with sequential delay
        const sections = gsap.utils.toArray('.skill-section');
        
        // First, fade up the container that holds all sections
        gsap.fromTo('.skills-container',
            {
                y: 30,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.5,
                scrollTrigger: {
                    trigger: '.skills-container',
                    start: "top 85%",
                    toggleActions: "play none none none",
                }
            }
        );

        // Animate each section heading with fade-up and stagger
        gsap.fromTo('.section-heading',
            {
                y: 30,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.2, // Each heading appears with 0.2s delay
                ease: "power2.out",
                scrollTrigger: {
                    trigger: '.skills-container',
                    start: "top 85%",
                    toggleActions: "play none none none",
                }
            }
        );

        // Animate skills within each section with stagger
        sections.forEach((section: any) => {
            const skills = section.querySelectorAll('.skill-item');
            if (skills.length) {
                gsap.fromTo(skills,
                    {
                        y: 40,
                        opacity: 0,
                        scale: 0.9,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        duration: 0.5,
                        stagger: 0.1, // Skills within same section stagger
                        ease: "back.out(0.8)",
                        scrollTrigger: {
                            trigger: section,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        }
                    }
                );
            }
        });

    }, { scope: container });

    return(
        <section id="stack" ref={container} className='flex flex-col items-start justify-start gap-10 w-full xl:w-[90vw] px-10'>
            <div data-animation="fade-down" className="flex flex-col items-start gap-6 ">
                <h1 className="text-xl text-white/50">Tools I work with<br/> <span className="text-4xl tracking-widest xl:text-6xl font-bold text-white">Skills.</span></h1>
            </div>
            
            <div className="skills-container w-full flex flex-col justify-center gap-20">
                {/* Frontend Section */}
                <div className="skill-section w-full flex flex-col justify-start gap-10">
                    <div className="section-heading flex items-center gap-5">
                        <span className="block w-8 bg-teal-400 rounded-full h-0.5"></span>
                        <p className="text-lg text-teal-400">Frontend</p>
                        <span className="block w-full h-px bg-white/[0.07]"></span>
                    </div>

                    <div className="w-full flex flex-wrap items-center gap-15">
                        {Skills.map((item: Skill) => (
                            (item.category === "Frontend" && 
                                <div key={item.name} className="skill-item">
                                    <Cube 
                                        name={item.name}
                                        image={item.image}
                                    />
                                </div>
                            )
                        ))}
                    </div>
                </div>

                {/* Backend Section */}
                <div className="skill-section w-full flex flex-col justify-start gap-10">
                    <div className="section-heading flex items-center gap-5">
                        <span className="block w-8 bg-green-400 rounded-full h-0.5"></span>
                        <p className="text-lg text-green-400">Backend</p>
                        <span className="block w-full h-px bg-white/[0.07]"></span>
                    </div>

                    <div className="w-full flex flex-wrap items-center gap-15">
                        {Skills.map((item: Skill) => (
                            (item.category === "Backend" && 
                                <div key={item.name} className="skill-item">
                                    <Cube 
                                        name={item.name}
                                        image={item.image}
                                    />
                                </div>
                            )
                        ))}
                    </div>
                </div>

                {/* Databases Section */}
                <div className="skill-section w-full flex flex-col justify-start gap-10">
                    <div className="section-heading flex items-center gap-5">
                        <span className="block w-8 bg-amber-400 rounded-full h-0.5"></span>
                        <p className="text-lg text-amber-400">Databases</p>
                        <span className="block w-full h-px bg-white/[0.07]"></span>
                    </div>

                    <div className="w-full flex flex-wrap items-center gap-15">
                        {Skills.map((item: Skill) => (
                            (item.category === "Database" && 
                                <div key={item.name} className="skill-item">
                                    <Cube 
                                        name={item.name}
                                        image={item.image}
                                    />
                                </div>
                            )
                        ))}
                    </div>
                </div>

                {/* DevOps Section */}
                <div className="skill-section w-full flex flex-col justify-start gap-10">
                    <div className="section-heading flex items-center gap-5">
                        <span className="block w-8 bg-purple-400 rounded-full h-0.5"></span>
                        <p className="text-lg text-purple-400">DevOps</p>
                        <span className="block w-full h-px bg-white/[0.07]"></span>
                    </div>

                    <div className="w-full flex flex-wrap items-center gap-15">
                        {Skills.map((item: Skill) => (
                            (item.category === "Devops" && 
                                <div key={item.name} className="skill-item">
                                    <Cube 
                                        name={item.name}
                                        image={item.image}
                                    />
                                </div>
                            )
                        ))}
                    </div>
                </div>

                {/* AI Section */}
                <div className="skill-section w-full flex flex-col justify-start gap-10">
                    <div className="section-heading flex items-center gap-5">
                        <span className="block w-8 bg-pink-400 rounded-full h-0.5"></span>
                        <p className="text-lg text-pink-400">AI</p>
                        <span className="block w-full h-px bg-white/[0.07]"></span>
                    </div>

                    <div className="w-full flex flex-wrap items-center gap-15">
                        {Skills.map((item: Skill) => (
                            (item.category === "AI" && 
                                <div key={item.name} className="skill-item">
                                    <Cube 
                                        name={item.name}
                                        image={item.image}
                                    />
                                </div>
                            )
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
