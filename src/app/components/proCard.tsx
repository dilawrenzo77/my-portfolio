"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from 'react';
// import styled from 'styled-components';
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from 'react';



interface ProjectProp{
    projectId: number;
    projectName: string;
    projectTitle: string;
    projectDescription: string;
    projectDetails: string;
    projectTools: string[];
    keyFeatures: string[];
    projectThumbnail: string;
    projectLink: string;
    projectGithub: string;
}
interface ProCardProps {
    data: ProjectProp;
}

// Client-only wrapper to suppress hydration warning
const ClientOnly = ({ children }: { children: React.ReactNode }) => {
    const [hasMounted, setHasMounted] = useState(false);
    
    useEffect(() => {
        setHasMounted(true);
    }, []);
    
    if (!hasMounted) return null;
    return <>{children}</>;
};


export default function ProCard({ data, className }: ProCardProps & { className?: string }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * 10; // Max 10deg tilt
    const rotateY = ((x - centerX) / centerX) * 10; // Max 10deg tilt
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1, 1, 1)`;
  };
  
  const handleMouseLeave = (e) => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
      <div 
        ref={cardRef}
        className={`card-item group w-full sm:w-[calc(40% - 14px)] lg:w-[calc(20% - 19px)] ${className || ''}`}        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          willChange: "transform",
          transition: "450ms cubic-bezier(0.03, 0.98, 0.52, 0.99)",
          transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
        }}
      >
        <div className="flex flex-col h-[27rem]">
        <Link href={data.projectLink} className="block h-full ">
            <div className="flex flex-col gap-5 rounded-xl bg-[#450693]/10 h-full">
            {/* Image container - fixed height */}
            <div className="relative w-full h-48 rounded-lg overflow-hidden">
                <Image 
                src={`/projectImages/${data.projectThumbnail}`} 
                fill
                sizes="99vw"
                className="object-cover" 
                alt="proImage"
                />
            </div>
            
            {/* Project name and details */}
            <div className="flex flex-col gap-2 px-2">
                <p className="text-md tracking-widest font-semibold">{data.projectName}</p>
                <p className="text-xs text-neutral-400 line-clamp-4">{data.projectDetails}</p>
            </div>
            
            {/* Key features
            <div className="flex flex-col gap-2">
                {data.keyFeatures.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-white/[0.10]"></span>
                    <p className="text-xs text-neutral-400">{item}</p>
                </div>
                ))}
            </div> */}
            
            {/* Divider */}
            <hr className="border-white/[0.07]"/>
            
            <div className="flex items-center flex-wrap gap-2 px-2">
                <ClientOnly>
                    {data.projectTools.map((tool, i) => {
                        const colors = [
                        'text-blue-400',
                        'text-teal-400', 
                        'text-purple-400',
                        'text-pink-400',
                        'text-green-400',
                        'text-yellow-400',
                        'text-indigo-400',
                        'text-orange-400',
                        'text-cyan-400',
                        'text-emerald-400',
                        'text-rose-400'
                        ];
                        const randomColor = colors[Math.floor(Math.random() * colors.length)];
                        
                        return (
                        <p key={i} className={`text-sm ${randomColor}`}>
                            <span className="text-lg ">#</span>{tool}
                        </p>
                        );
                    })}
                </ClientOnly>
            </div>
            
            {/* View project link */}
            <p className="mb-2 flex items-center gap-1 text-sm font-medium hover:text-teal-300 transition-colors duration-300 px-2">
                view project <ArrowRight size={10} />
            </p>
            </div>
        </Link>
        </div>
    </div>
  );
}


