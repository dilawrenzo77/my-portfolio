import React from 'react';

interface CubeProps {
  name: string;
  image: string;
  glowColor?: 'purple-blue' | 'pink-orange' | 'cyan-green' | 'amber-red';
  className?: string;
}

const glowThemes = {
  'purple-blue': {
    from: 'from-purple-500/40',
    to: 'to-blue-500/40',
    hoverFrom: 'group-hover:from-purple-500/70',
    hoverTo: 'group-hover:to-blue-500/70',
    shadow: 'group-hover:shadow-[0_0_25px_rgba(139,92,246,0.4)]',
  },
  'pink-orange': {
    from: 'from-pink-500/40',
    to: 'to-orange-500/40',
    hoverFrom: 'group-hover:from-pink-500/70',
    hoverTo: 'group-hover:to-orange-500/70',
    shadow: 'group-hover:shadow-[0_0_25px_rgba(236,72,153,0.4)]',
  },
  'cyan-green': {
    from: 'from-cyan-500/40',
    to: 'to-green-500/40',
    hoverFrom: 'group-hover:from-cyan-500/70',
    hoverTo: 'group-hover:to-green-500/70',
    shadow: 'group-hover:shadow-[0_0_25px_rgba(6,182,212,0.4)]',
  },
  'amber-red': {
    from: 'from-amber-500/40',
    to: 'to-red-500/40',
    hoverFrom: 'group-hover:from-amber-500/70',
    hoverTo: 'group-hover:to-red-500/70',
    shadow: 'group-hover:shadow-[0_0_25px_rgba(245,158,11,0.4)]',
  },
};

const Cube: React.FC<CubeProps> = ({
  name,
  image,
  glowColor = 'purple-blue',
  className = '',
}) => {
  const theme = glowThemes[glowColor];

  return (
    <div
      className={`flex flex-col items-center gap-2 sm:gap-3 group cursor-pointer ${className}`}
      style={{ opacity: 1, transform: 'none' }}
    >
      {/* Cube Container */}
      <div className="relative w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24">
        {/* Glow Layer - Rotated background gradient that glows on hover */}
        <div
          className={`
            absolute inset-0 bg-gradient-to-br ${theme.from} ${theme.to}
            rounded-2xl rotate-[22.5deg]
            ${theme.hoverFrom} ${theme.hoverTo}
            transition-all duration-300 ${theme.shadow}
          `}
        />

        {/* Inner Dark Layer - Creates the "inset" effect */}
        <div className="absolute inset-[2px] bg-[#1d1836] rounded-2xl rotate-[22.5deg]" />

        {/* Icon Container - Holds the actual skill image */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div
            className="
              w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14
              rounded-2xl bg-white flex items-center justify-center
              shadow-inner group-hover:scale-105 transition-transform duration-300
            "
          >
            <img
              src={image}
              alt={name}
              className="w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Skill Name */}
      <p
        className="
          text-white text-md
          font-medium mt-4 text-center leading-tight
        "
      >
        {name}
      </p>
    </div>
  );
};

export default Cube;