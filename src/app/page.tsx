"use client";
import About from "@/components/About";
import Class from "@/components/Class";
import SmoothScroll from "@/components/SmoothScroll";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Lenis from "lenis";
import { useEffect } from "react";
import "@/app/globals.css";
import { motion, Variants } from "framer-motion";

const onScreenEffectFade: Variants = {
    offScreen: {
        y: 100,
        opacity: 0,
    },
    onScreen: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
};

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
