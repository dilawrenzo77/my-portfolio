"use client"
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        
        // Close the menu
        setIsOpen(false);
        
        // Get the target element
        const targetId = href.replace('#', '');
        const element = document.getElementById(targetId);
        
        if (element) {
            // Smooth scroll to the element
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return(
        <nav className="w-full xl:w-[90vw] flex items-center justify-between py-3 relative px-3">
            <div className="flex items-center justify-center gap-2">
                <h1 className="text-lg font-bold text-[#915eff]">MBATA LAWRENCE</h1>
                <span className="hidden lg:block font-bold text-neutral-600">|</span>
                <p className="hidden lg:block text-sm font-bold text-neutral-400">Software Developer</p>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center sm:justify-between gap-10 flex-wrap">
                <Link href="#about" scroll={true}>
                    <div className="cursor-pointer">
                        <p className="font-semibold text-lg text-white/80 hover:text-white/40 transition-all duration-300">About</p>
                    </div>
                </Link>
                <Link href="#stack" scroll={true}>
                    <div className="cursor-pointer">
                        <p className="font-semibold text-lg text-white/80 hover:text-white/40 transition-all duration-300">Stack</p>
                    </div>
                </Link>
                <Link href="#projects" scroll={true}>
                    <div className="cursor-pointer">
                        <p className="font-semibold text-lg text-white/80 hover:text-white/40 transition-all duration-300">Projects</p>
                    </div>
                </Link>
                <Link href="#experience" scroll={true}>
                    <div className="cursor-pointer">
                        <p className="font-semibold text-lg text-white/80 hover:text-white/40 transition-all duration-300">Experience</p>
                    </div>
                </Link>
                <Link href="#contracts" scroll={true}>
                    <div className="cursor-pointer">
                        <p className="font-semibold text-lg text-white/80 hover:text-white/40 transition-all duration-300">Contacts</p>
                    </div>
                </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="block md:hidden z-50 relative"
                aria-label="Toggle menu"
            >
                {isOpen ? (
                    <X className="h-8 w-8 text-white mr-2" />
                ) : (
                    <Menu className="h-6 w-6 text-white" />
                )}
            </button>

            {/* Mobile Slide Menu */}
            <div 
                className={`
                    fixed top-0 right-0 h-full w-[80%] max-w-sm 
                    bg-black/95 backdrop-blur-md 
                    border-l border-white/10
                    shadow-2xl
                    transform transition-transform duration-600 ease-in-out
                    z-40
                    ${isOpen ? 'translate-x-0' : 'translate-x-full'}
                `}
            >
                <div className="flex flex-col pt-24 px-6 gap-8">
                    {/* Menu Header */}
                    <div className="border-b border-white/10 pb-6">
                        <h1 className="text-xl font-bold text-[#915eff]">MBATA LAWRENCE</h1>
                        <p className="text-sm font-bold text-neutral-400 mt-1">Software Developer</p>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-col gap-6">
                        <a 
                            href="#about" 
                            onClick={(e) => handleLinkClick(e, '#about')}
                            className="group cursor-pointer"
                        >
                            <p className="font-semibold text-xl text-white/80 group-hover:text-[#915eff] transition-all duration-300">
                                About
                            </p>
                        </a>
                        <a 
                            href="#stack" 
                            onClick={(e) => handleLinkClick(e, '#stack')}
                            className="group cursor-pointer"
                        >
                            <p className="font-semibold text-xl text-white/80 group-hover:text-[#915eff] transition-all duration-300">
                                Stack
                            </p>
                        </a>
                        <a 
                            href="#projects" 
                            onClick={(e) => handleLinkClick(e, '#projects')}
                            className="group cursor-pointer"
                        >
                            <p className="font-semibold text-xl text-white/80 group-hover:text-[#915eff] transition-all duration-300">
                                Projects
                            </p>
                        </a>
                        <a 
                            href="#experience" 
                            onClick={(e) => handleLinkClick(e, '#experience')}
                            className="group cursor-pointer"
                        >
                            <p className="font-semibold text-xl text-white/80 group-hover:text-[#915eff] transition-all duration-300">
                                Experience
                            </p>
                        </a>
                        <a 
                            href="#contracts" 
                            onClick={(e) => handleLinkClick(e, '#contracts')}
                            className="group cursor-pointer"
                        >
                            <p className="font-semibold text-xl text-white/80 group-hover:text-[#915eff] transition-all duration-300">
                                Contacts
                            </p>
                        </a>
                    </div>
                </div>
            </div>

            {/* Overlay */}
            {isOpen && (
                <div 
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 sm:hidden transition-all duration-300"
                />
            )}
        </nav>
    )
};