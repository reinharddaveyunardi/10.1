"use client";
import About from "@/components/About";
import Class from "@/components/Class";
import SmoothScroll from "@/components/SmoothScroll";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { useEffect, useState } from "react";
import "@/app/globals.css";

export default function Home() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timerLoad = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timerLoad);
    }, []);

    if (loading) {
        return <div></div>;
    }
    return (
        <div>
            <Hero />
            <About />
            <Class />
            {/* <motion.div
                variants={onScreenEffectFade}
                initial="offScreen"
                whileInView="onScreen"
                viewport={{ once: true }}
            >
                <SmoothScroll />
            </motion.div> */}
            <Footer />
        </div>
    );
}
