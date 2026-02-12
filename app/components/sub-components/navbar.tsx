"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { montserrat } from "../../fonts";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isFunctionSection, setIsFunctionSection] = useState(false);
    const [isFooter, setIsFooter] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const docHeight = document.body.scrollHeight;

            setScrolled(scrollY > 50);

            const functionSection = document.getElementById("function");
            if (functionSection) {
                const sectionTop = functionSection.offsetTop;
                const sectionBottom = sectionTop + functionSection.offsetHeight;
                setIsFunctionSection(
                    scrollY + 80 >= sectionTop && scrollY + 80 < sectionBottom
                );
            }

            const isAtBottom = scrollY + windowHeight >= docHeight - 5;
            setIsFooter(isAtBottom);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    let bgColor = "transparent";
    if (isFunctionSection) {
        bgColor = "white";
    } else if (scrolled) {
        bgColor = "#35261e";
    }

    let navbarClasses = "";
    if (isFunctionSection || isFooter) {
        navbarClasses = "w-full rounded-none !mt-0 px-10 py-3";
    } else {
        navbarClasses = scrolled
            ? "w-[90%] mt-3 rounded-full px-10 py-3"
            : "w-full rounded-full px-20 py-5";
    }

    const textColor = isFunctionSection ? "text-black" : "text-white";

    return (
        <>
            {/* NAVBAR */}
            <div
                className={`fixed top-0 z-40 mx-auto left-0 right-0 transition-all duration-500 ease-in-out ${navbarClasses}`}
                style={{ backgroundColor: bgColor }}
            >
                <div
                    className={`flex justify-between items-center ${textColor} ${montserrat.className}`}
                >
                    <div className="w-[10%]"></div>

                    <div className="hidden md:flex gap-8 items-center">
                        <Link href="#landing">Home</Link>
                        <Link href="#about">About</Link>
                        <Link href="#services">Services</Link>
                        <Link href="#blog">Blog</Link>
                    </div>

                    {/* Hamburger */}
                    <button
                        onClick={() => setIsOpen(true)}
                        className="md:hidden text-2xl"
                    >
                        ☰
                    </button>
                </div>
            </div>

            {/* FULL SCREEN OVERLAY */}
            <div
                className={`fixed top-0 left-0 w-full h-screen bg-[#35261e] text-white z-50 transform transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)]
                ${isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"}
                origin-top-right`}
            >
                {/* Close Button */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-6 right-6 text-3xl"
                >
                    ✕
                </button>

                {/* Menu Items */}
                <div className="flex flex-col justify-center items-center h-full gap-10 text-3xl font-light">
                    <Link href="#landing" onClick={() => setIsOpen(false)} className="transition-all duration-500 hover:tracking-widest">
                        Home
                    </Link>
                    <Link href="#about" onClick={() => setIsOpen(false)} className="transition-all duration-500 hover:tracking-widest">
                        About
                    </Link>
                    <Link href="#services" onClick={() => setIsOpen(false)} className="transition-all duration-500 hover:tracking-widest">
                        Services
                    </Link>
                    <Link href="#blog" onClick={() => setIsOpen(false)} className="transition-all duration-500 hover:tracking-widest">
                        Blog
                    </Link>
                </div>
            </div>
        </>
    );
}
