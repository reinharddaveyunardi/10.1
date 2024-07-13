"use client";
import About from "@/components/About";
import Class from "@/components/Class";
import SmoothScroll from "@/components/SmoothScroll";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Lenis from "lenis";
import { useEffect } from "react";
import "@/app/globals.css";

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
        <div>
            <Hero />
            <About />
            <Class />
            <SmoothScroll />
            <Footer />
        </div>
    );
}
