"use client";
import About from "@/components/About";
import Class from "@/components/Class";
import HorizontalScroll from "@/components/HorizontalScroll";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { useEffect, useState } from "react";
import "@/app/globals.css";

export default function Home() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timerLoad = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timerLoad);
    }, []);

    if (loading) {
        return (
            <div className="flex flex-col gap-4 justify-center items-center h-screen">
                <div className="loader" />
                <span className="text-center">Loading</span>
            </div>
        );
    }
    return (
        <div>
            <Hero />
            <About />
            <Class />
            <HorizontalScroll />
            <Footer />
        </div>
    );
}
