"use client"
import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 p-3 bg-[#915eff]/50 hover:bg-[#7b3fd8] text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none"
                    aria-label="Back to top"
                >
                    <ArrowUp className="h-6 w-6" />
                </button>
            )}
        </>
    );
}