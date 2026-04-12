"use client"
import { FiInstagram } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import Link from "next/link";
import Form from "./Form";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Contacts() {
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

    }, { scope: container });

    return (
    <>
        <section id="contracts" ref={container} className="flex flex-col items-start justify-start gap-15 w-full xl:w-[90vw] px-10">
            <div data-animation="fade-down" className="flex items-center justify-start w-full">
                <h1 className="text-xl text-white/50">Lets get in touch <br/> <span className="text-4xl tracking-widest xl:text-6xl font-bold text-white">Contact ME.</span></h1>
            </div>
            <div data-animation="zoom" className="flex flex-col items-center justify-center w-full gap-8">
                {/* contact form */}
                <Form />
                <div className="flex items-center justify-center gap-6 flex-wrap">
                    <Link href="https://github.com/dilawrenzo77">
                    <div className="flex items-center justify-center gap-2 px-3 py-1 rounded-sm cursor-pointer hover:scale-105 transition-all duration-300">
                        <FaGithub size={30}/>
                        <span className="text-lg">|</span>
                        <p className="text-lg font-semibold">Github</p>
                    </div>
                    </Link>

                    <Link href="https://www.linkedin.com/in/mbata-lawrence-5b46a71a3/">
                    <div className="flex items-center justify-center gap-2 px-3 py-1 rounded-sm cursor-pointer hover:scale-105 transition-all duration-300">
                        <FaLinkedin size={30}/>
                        <span className="text-lg">|</span>
                        <p className="text-lg font-semibold">LinkedIn</p>
                    </div>
                    </Link>


                    <Link href="https://www.instagram.com/di_loreenzo?igsh=MthmN3o3d3Vzc3Mw">
                    <div className="flex items-center justify-center gap-2 px-3 py-1 rounded-sm cursor-pointer hover:scale-105 transition-all duration-300">
                        <FiInstagram size={30}/>
                        <span className="text-lg">|</span>
                        <p className="text-lg font-semibold">Instagram</p>
                    </div>
                    </Link>
                </div>
            </div>
        </section>
    </>)
};
