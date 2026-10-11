"use client"
import Link from "next/link";
import React, { useState, useEffect, useRef } from 'react';
import { Download, ArrowRight } from "lucide-react";
import BorderGlow from "./BorderGlow";

const profileData = {
  "name": "Mbata Lawrence Chibuzor",
  "role": "Full Stack",
  "languages": ["Java", "JavaScript"],
  "stack": ["PERN", "SpringBoot"],
  "passion": "Building",
  "available": true
};


export default function Hero() {
  const [displayMessage, setDisplayMessage] = useState("Frontend");
  const [isAnimating, setIsAnimating] = useState(false);
  const messages = ["Frontend", "Backend", "Mobile Apps" ,"Micro-services", "AI", "System-Design"];
  const messageIndexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      
      setTimeout(() => {
        messageIndexRef.current = (messageIndexRef.current + 1) % messages.length;
        setDisplayMessage(messages[messageIndexRef.current]);
        setIsAnimating(false);
      }, 8000);
    }, 3000);

    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <section className="w-full xl:w-[90vw] flex flex-col md:flex-row items-center justify-center gap-15 md:gap-6 min-h-screen py-10 px-3 md:px-1">
      <div className="w-full md:w-7/12 flex flex-col items-center md:items-start justify-center gap-6 sm:gap-5 lg:gap-7 xl:gap-10 border-l-gradient pl-5">
        <p className="text-4xl text-center md:text-start tracking-widest xl:text-6xl font-bold text-white">I Build Software <br /><span className="text-[#915eff]">That Scales</span></p>
        <p className="text-sm text-center md:text-start lg:text-lg xl:text-xl font-thin text-gray-300">Full Stack Software Developer turning complex ideas into <span className="text-[#915eff]">production-grade</span> applications with modern architecture, system design, microservices and AI.</p>

        {/* Simple Conveyor Belt */}
        <div className="min-h-[30px]">
          <div
            className={`
              transition-all duration-800 ease-in-out
              ${isAnimating ? 'opacity-0 -translate-y-8' : 'opacity-100 translate-y-0'}
            `}
          >
            <p className="text-xl font-extrabold bg-gradient-to-r from-purple-400/80 via-pink-400/80 to-blue-400/80 bg-clip-text text-transparent">{displayMessage}</p>
          </div>
        </div>

        <div className="w-full flex items-center justify-center  md:justify-start gap-4 flex-wrap">
            <Link href="#projects">
                <button className="bg-gradient-to-r from-purple-400/80 via-pink-400/80 to-blue-400/80 rounded-lg px-7 py-2 text-md lg:text-lg xl:text-xl hover:scale-105 transition-all duration-300 border border-white/[0.10] text-white flex items-center gap-2">View my Projects <span><ArrowRight size={15}/></span></button>
            </Link>
            <Link href="/MbataLawrence26CV.pdf" download="mbatalawrenceResume.pdf">
                <button className=" rounded-lg px-7 py-2 text-md lg:text-lg xl:text-xl hover:scale-110 transition-all duration-300 border border-white/[0.10] text-white flex items-center gap-2"><span><Download size={15}/></span>Resume</button>
            </Link>
        </div>

        <div className="flex items-center justify-center gap-4 flex-wrap mt-2">
          <Link href="https://github.com/dilawrenzo77">
            <div className="border border-white/70  rounded-full p-1 cursor-pointer hover:scale-110 transition-all duration-300">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.24902C6.51613 2.24902 2 6.70064 2 12.249C2 16.6361 4.87097 20.3781 8.87097 21.7329C9.3871 21.8297 9.54839 21.5071 9.54839 21.2813C9.54839 21.0555 9.54839 20.4103 9.51613 19.5393C6.74194 20.1845 6.16129 18.1845 6.16129 18.1845C5.70968 17.0555 5.03226 16.7329 5.03226 16.7329C4.12903 16.0877 5.06452 16.0877 5.06452 16.0877C6.06452 16.12 6.6129 17.12 6.6129 17.12C7.48387 18.6684 8.96774 18.2168 9.51613 17.9264C9.6129 17.2813 9.87097 16.8297 10.1613 16.5716C7.96774 16.3458 5.6129 15.4748 5.6129 11.6684C5.6129 10.5716 6.03226 9.70064 6.64516 9.02322C6.54839 8.79741 6.19355 7.76515 6.74194 6.37806C6.74194 6.37806 7.6129 6.11999 9.51613 7.41031C10.3226 7.18451 11.1613 7.05548 12.0323 7.05548C12.9032 7.05548 13.7742 7.15225 14.5484 7.41031C16.4516 6.15225 17.2903 6.37806 17.2903 6.37806C17.8387 7.73289 17.5161 8.79741 17.3871 9.02322C18.0323 9.70064 18.4194 10.6039 18.4194 11.6684C18.4194 15.4748 16.0645 16.3458 13.871 16.5716C14.2258 16.8942 14.5484 17.5393 14.5484 18.4426C14.5484 19.7974 14.5161 20.8619 14.5161 21.1845C14.5161 21.4426 14.7097 21.7329 15.1935 21.6361C19.129 20.3135 22 16.6039 22 12.1845C21.9677 6.70064 17.4839 2.24902 12 2.24902Z" fill="#8e919d"/>
              </svg>
            </div>
          </Link>
          <Link href="https://www.linkedin.com/in/mbata-lawrence-5b46a71a3/">
            <div className="border border-white/70  rounded-full p-1 cursor-pointer hover:scale-110 transition-all duration-300">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.7065 3H4.34844C3.62264 3 3.04199 3.58065 3.04199 4.30645V19.6935C3.04199 20.3903 3.62264 21 4.34844 21H19.6485C20.3743 21 20.9549 20.4194 20.9549 19.6935V4.27742C21.013 3.58065 20.4323 3 19.7065 3ZM8.35491 18.3H5.71297V9.73548H8.35491V18.3ZM7.01942 8.54516C6.14846 8.54516 5.4807 7.84839 5.4807 7.00645C5.4807 6.16452 6.17749 5.46774 7.01942 5.46774C7.86136 5.46774 8.55813 6.16452 8.55813 7.00645C8.55813 7.84839 7.91942 8.54516 7.01942 8.54516ZM18.371 18.3H15.7291V14.1484C15.7291 13.1613 15.7001 11.8548 14.3356 11.8548C12.942 11.8548 12.7388 12.9581 12.7388 14.0613V18.3H10.0968V9.73548H12.6807V10.9258H12.7097C13.0872 10.229 13.9291 9.53226 15.2356 9.53226C17.9356 9.53226 18.4291 11.2742 18.4291 13.6548V18.3H18.371Z" fill="#8e919d"/>
              </svg>
            </div>
          </Link>
          <div className="border border-white/70 rounded-full p-1 px-3 text-black">
            <p className="text-white">mbatalawrence@gmail.com</p>
          </div>
        </div>
      </div>

      
      <BorderGlow
        edgeSensitivity={30}
        glowColor="40 80 80"
        backgroundColor="#120F17"
        borderRadius={28}
        glowRadius={40}
        glowIntensity={1}
        coneSpread={25}
        animated
        className="grow"
        colors={['#c084fc', '#f472b6', '#38bdf8']}
      >
        <div style={{ padding: '2em' }} className="w-full flex flex-col items-start gap-6">
          <div className="flex items-center justify-between gap-2 w-full">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_5px_2px_rgba(239,68,68,0.7)]"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500 shadow-[0_0_5px_2px_rgba(245,158,11,0.7)]"></div>
              <div className="w-3 h-3 rounded-full bg-teal-500 shadow-[0_0_5px_2px_rgba(20,184,166,0.7)]"></div>
            </div>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600 opacity-50"></span>
              </span>
              <p className="text-xs text-gray-500">LIVE TERMINAL</p>
            </div>
          </div>
          <div className="h-px w-full bg-white/20" />   
          <div className="w-full">
            <p className="text-xs sm:text-sm xl:text-md opacity-80"><span className="text-purple-400">const</span> Developer = <span>&#123;</span></p>
            <p className="text-xs sm:text-sm 2xl:text-md"><span>&nbsp;</span><span>&nbsp;</span>&apos;name&apos;: <span className="text-emerald-300 ">&apos;Mbata Lawrence Chibuzor&apos;</span>,</p>
            <p className="text-xs sm:text-sm 2xl:text-md mt-1"><span>&nbsp;</span><span>&nbsp;</span>&apos;role&apos;: <span className="text-emerald-300">&apos;Full Stack&apos;</span>,</p>
            <p className="text-xs sm:text-sm 2xl:text-md mt-1"><span>&nbsp;</span><span>&nbsp;</span>&apos;languages&apos;: [<span className="text-emerald-300">&apos;Java&apos;, &apos;JavaScript&apos;]</span>,</p>
            <p className="text-xs sm:text-sm 2xl:text-md mt-1"><span>&nbsp;</span><span>&nbsp;</span>&apos;stack&apos;: [<span className="text-emerald-300">&apos;PERN&apos;, &apos;SpringBoot&apos;]</span>,</p>
            <p className="text-xs sm:text-sm 2xl:text-md mt-1"><span>&nbsp;</span><span>&nbsp;</span>&apos;passion&apos;: <span className="text-emerald-300">&apos;Building&apos;</span>,</p>
            <p className="text-xs sm:text-sm 2xl:text-md mt-1"><span>&nbsp;</span><span>&nbsp;</span>&apos;available&apos;: <span className="text-emerald-300">true</span></p>
          <p><span>&#125;</span>;</p>
          </div>

          <p className="text-xs sm:text-sm xl:text-md">Developer.<span className="opacity-60">fullStack<span>&#40;&#41;</span></span></p>
        </div>
      </BorderGlow>
    </section>
  );
}