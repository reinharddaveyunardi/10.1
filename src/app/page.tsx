"use client";
import About from "@/components/About";
import Class from "@/components/Class";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Lenis from "lenis";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        const lenis = new Lenis();
        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    }, []);
    return (
        <>
            <Hero />
            <About />
            <Class />
            <Footer />
        </>
    );
}
