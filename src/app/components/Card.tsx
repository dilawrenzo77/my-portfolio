"use client"
import React, { useRef } from 'react';
import styled from 'styled-components';
import type { CardProps } from "../../types/data";
import Image from "next/image";

const Card: React.FC<CardProps> = ({ name, description, image }) => {
  // Fix: Add HTMLDivElement type to useRef
  const cardRef = useRef<HTMLDivElement>(null);

  // Fix: Type the event as React.MouseEvent
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1, 1, 1)`;
  };
  
  // Fix: Type the event as React.MouseEvent
  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <StyledWrapper>
      <div 
        ref={cardRef}
        className="card-container group"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          willChange: "transform",
          transition: "450ms cubic-bezier(0.03, 0.98, 0.52, 0.99)",
          transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
        }}
      >
        <div className="gradient-border">
          <div className="card flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-4">
                <div className="bg-black/10 p-3 rounded-xl backdrop-blur-lg border border-white/20 w-fit">
                    <div className="relative w-20 h-20">
                        <Image src={image} alt={name} fill sizes="80px" className="object-cover group-hover:scale-105 transition-all duration-300"/>
                    </div>
                </div>
                <p className="text-lg font-bold text-white text-center">{name}</p>
                <p className="text-sm text-white/50">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card-container {
    display: inline-block;
    cursor: pointer;
  }
  
  .gradient-border {
    border-radius: 20px;
    background: linear-gradient(to right, 
      #00F7FF,
      rgba(255, 75, 165, 0.8)
    );
    padding: 2px;
    outline: none;
    border: none;
  }
  
  .card {
    width:19rem;
    height: 22rem;
    background: linear-gradient(344deg, rgba(40,40,55,1) 0%, #211832 50%);
    border-radius: 18px;
    color: #F9F9F9;
    padding: 16px;
    outline: none;
    border: none;
    transition: all 0.3s ease;
  }
  
  /* Remove focus ring if it appears on click */
  .gradient-border:focus,
  .card:focus,
  .card-container:focus {
    outline: none;
  }
`;

export default Card;