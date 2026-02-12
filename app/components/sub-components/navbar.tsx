"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { montserrat } from "../../fonts";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isFunctionSection, setIsFunctionSection] = useState(false);
    const [isFooter, setIsFooter] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const docHeight = document.body.scrollHeight;

        setScrolled(scrollY > 50);

        // Function section detection
        const functionSection = document.getElementById("function");
        if (functionSection) {
            const sectionTop = functionSection.offsetTop;
            const sectionBottom = sectionTop + functionSection.offsetHeight;
            setIsFunctionSection(scrollY + 80 >= sectionTop && scrollY + 80 < sectionBottom);
        }

        // Very bottom detection (reliable)
        const isAtBottom = scrollY + windowHeight >= docHeight - 5;
        setIsFooter(isAtBottom);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Background color
    let bgColor = "transparent";
    if (isFunctionSection) {
        bgColor = "white"; // Function section
    } else if (scrolled) {
        bgColor = "#35261e"; // Scrolled normal
    }

    // Navbar width and rounding
    let navbarClasses = "";
    if (isFunctionSection || isFooter) {
        navbarClasses = "w-full rounded-none !mt-0 px-10 py-3"; // Full width for function & footer
    } else {
        navbarClasses = scrolled
        ? "w-[90%] mt-3 rounded-full px-10 py-3"
        : "w-full rounded-full px-20 py-5";
    }

    // Text color
    const textColor = isFunctionSection ? "text-black" : "text-white";



    return (
        <div className={`fixed top-0 z-30 mx-auto left-0 right-0 transition-all duration-500 ease-in-out ${navbarClasses}`} style={{ backgroundColor: bgColor }}>
            <div className={`flex justify-between items-center ${textColor} ${montserrat.className}`}>
                <div className="w-[10%]"></div>
                <div className="flex gap-8 items-center">
                <Link href="#landing" className="hover:bg-[#ffffff3a] px-5 py-1 transition-all rounded-full" >
                    Home
                </Link>
                <Link href="#about" className="hover:bg-[#ffffff3a] px-5 py-1 transition-all rounded-full" >
                    About
                </Link>
                <Link href="#services" className="hover:bg-[#ffffff3a] px-5 py-1 transition-all rounded-full" >
                    Services
                </Link>
                <Link href="#blog" className="hover:bg-[#ffffff3a] px-5 py-1 transition-all rounded-full" >
                    Blog
                </Link>
                </div>

                <button className="px-5 py-2 bg-white text-black rounded-full w-[10%]">
                    Contact
                </button>
            </div>
        </div>
    );
}
