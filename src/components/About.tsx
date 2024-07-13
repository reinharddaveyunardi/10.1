import React from "react";
import { motion, Variants } from "framer-motion";
import { about } from "@/data/data";

const aboutEffect: Variants = {
    offscreen: {
        y: 300,
    },
    onscreen: {
        y: 0,
        transition: { type: "spring", bounce: 0.4, duration: 1.5 },
    },
};

function About() {
    return (
        <div className="h-32 w-full flex justify-center items-center bg-neutral-50">
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
                variants={aboutEffect}
            >
                <p className="text-black text-xl xl:text-4xl font-bold">
                    {about}
                </p>
            </motion.div>
        </div>
    );
}

export default About;
