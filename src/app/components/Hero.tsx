"use client"
import Link from "next/link";
import Terminal, { ColorMode, TerminalOutput } from 'react-terminal-ui';
import React, { useState, useEffect, useRef } from 'react';
import { Download, ArrowRight } from "lucide-react";

const profileData = {
  "name": "Mbata Lawrence Chibuzor",
  "role": "Full Stack",
  "languages": ["Java", "JavaScript"],
  "stack": ["PERN", "SpringBoot"],
  "passion": "Building",
  "available": true
};

// Type-safe syntax highlighting function with multi-line formatting
const highlightJSON = (obj: any, indent: number = 0): React.ReactNode => {
  const spaces = ' '.repeat(indent);
  
  if (Array.isArray(obj)) {
    return (
      <span>
        [<span style={{ color: '#32cd32' }}>
          {obj.map((item: any, i: number) => (
            <span key={i}>
              {highlightJSON(item, 0)}
              {i < obj.length - 1 && ', '}
            </span>
          ))}
        </span>]
      </span>
    );
  }
  
  if (typeof obj === 'object' && obj !== null) {
    const entries = Object.entries(obj);
    return (
      <span>
        {'{\n'}
        {entries.map(([key, value]: [string, any], i: number) => (
          <span key={key}>
            {spaces}  <span style={{ color: '#00f7ff' }}>"{key}"</span>
            <span style={{ color: '#ffffff' }}>: </span>
            {highlightJSON(value, indent + 2)}
            {i < entries.length - 1 ? ',' : ''}
            {'\n\n'}
          </span>
        ))}
        {spaces}{'}'}
      </span>
    );
  }
  
  if (typeof obj === 'string') {
    return <span style={{ color: '#32cd32' }}>"{obj}"</span>;
  }
  
  if (typeof obj === 'number') {
    return <span style={{ color: '#32cd32' }}>{obj}</span>;
  }
  
  if (typeof obj === 'boolean') {
    return <span style={{ color: '#ff8c42' }}>{obj.toString()}</span>;
  }
  
  return <span>{String(obj)}</span>;
};

export default function Hero() {
  const terminalContent = [
    <TerminalOutput key="1">
      <span style={{ color: '#32cd32' }}>$</span>{' '}
      <span style={{ color: '#948979' }}>cat</span>
      <span style={{ color: '#FFD400' }}>profile.json</span>
    </TerminalOutput>,
    <TerminalOutput key="2">
      <pre style={{ margin: 0, fontFamily: 'inherit', whiteSpace: 'pre-wrap', lineHeight: '1.1' }}>
        {highlightJSON(profileData)}
      </pre>
    </TerminalOutput>,
    <TerminalOutput key="3">
      <span style={{ color: '#32cd32', display: 'inline-flex', alignItems: 'center' }}>
        $ <span style={{ 
          display: 'inline-block', 
          width: '10px', 
          height: '20px', 
          backgroundColor: '#32cd32',
          marginLeft: '4px',
          animation: 'blink 1s step-end infinite'
        }} />
      </span>
    </TerminalOutput>,
  ];

  const [displayMessage, setDisplayMessage] = useState("Frontend");
  const [isAnimating, setIsAnimating] = useState(false);
  const messages = ["Frontend", "Backend", "Micro-services Architecture", "AI"];
  const messageIndexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      
      setTimeout(() => {
        messageIndexRef.current = (messageIndexRef.current + 1) % messages.length;
        setDisplayMessage(messages[messageIndexRef.current]);
        setIsAnimating(false);
      }, 5000);
    }, 3000);

    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <section className="w-full xl:w-[90vw] flex flex-col md:flex-row items-start justify-center gap-15 md:gap-6 min-h-screen py-10 px-3 md:px-1">
      <div className="flex flex-col items-start justify-center gap-6 sm:gap-5 lg:gap-7 xl:gap-10 w-full border-l-gradient pl-5">
        <p className="text-4xl tracking-widest xl:text-6xl font-bold text-white">I Build Software <br /><span className="text-[#915eff]">That Scales</span></p>
        <p className="text-sm lg:text-lg xl:text-xl font-thin text-gray-300">Full Stack Developer turning complex ideas into <span className="text-[#915eff]">production-grade</span> applications with AI, microservices & modern architecture.</p>

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

        <div className="w-full flex items-center justify-start gap-4 flex-wrap">
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
      <div className="container rounded-lg overflow-hidden h-[34rem] border border-white/[0.10]" style={{ maxWidth: '500px', margin: '0 auto' }}>
        <div className="text-2xl" style={{ backgroundColor: '#09122C' }}>
          <Terminal
            name="~/mbatalawrence"
            colorMode={ColorMode.Dark}
          >
            {terminalContent.map((content, index) => (
              <div key={index} className="mb-2">
                {content}
              </div>
            ))}
          </Terminal>
        </div>
      </div>
      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        /* Force all terminal elements to use the dark background */
        :global(.react-terminal-container),
        :global(.react-terminal),
        :global(.react-terminal-wrapper),
        :global(.react-terminal-header),
        :global(.react-terminal-content),
        :global(.terminal),
        :global(.terminal-container),
        :global([class*="terminal"]) {
          background-color: #0c0918 !important;
        }
        
        /* Target the header specifically */
        :global(.react-terminal-header),
        :global(.react-terminal-header > *),
        :global(.terminal-header),
        :global([class*="header"]) {
          background-color: #0c0918 !important;
        }
        
        /* Target the body/content area */
        :global(.react-terminal-line),
        :global(.react-terminal-output),
        :global(.terminal-output),
        :global([class*="output"]),
        :global([class*="content"]) {
          background-color: #0c0918 !important;
        }
      `}</style>
    </section>
  );
}