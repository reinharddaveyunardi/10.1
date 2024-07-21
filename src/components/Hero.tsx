import React from "react";
import { motion } from "framer-motion";
import { title, desc } from "@/data/data";
import { IoLogoInstagram } from "react-icons/io";
import { FaSpotify } from "react-icons/fa";
import "@/app/globals.css";
import Clock from "./Clock";

const Title = ({ title }: any) => {
    return (
        <>
            <div className="flex">
                <motion.div
                    className="title"
                    initial={{ opacity: 0, translateY: -150 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 1.5, bounce: 0.5, type: "spring" }}
                >
                    <h1 className="text-[8rem] font-black">1</h1>
                </motion.div>
                <motion.div
                    className="title"
                    initial={{ opacity: 0, translateY: -150 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{
                        duration: 1.5,
                        bounce: 0.5,
                        type: "spring",
                        delay: 0.2,
                    }}
                >
                    <h1 className="text-[8rem] font-black">0</h1>
                </motion.div>
                <motion.div
                    className="title"
                    initial={{ opacity: 0, translateY: -150 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{
                        duration: 1.5,
                        bounce: 0.5,
                        type: "spring",
                        delay: 0.3,
                    }}
                >
                    <h1 className="text-[8rem] font-black">.</h1>
                </motion.div>
                <motion.div
                    className="title"
                    initial={{ opacity: 0, translateY: -150 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{
                        duration: 1.5,
                        bounce: 0.5,
                        type: "spring",
                        delay: 0.4,
                    }}
                >
                    <h1 className="text-[8rem] font-black">1</h1>
                </motion.div>
            </div>
        </>
    );
};
const Desc = ({ desc }: any) => {
    return (
        <>
            <div className="flex">
                <motion.p
                    className="text-3xl font-black"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 1.5,
                        delay: 1.5,
                    }}
                >
                    2024
                </motion.p>
                <motion.p
                    className="text-3xl font-black"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 1.5,
                        delay: 1.6,
                    }}
                >
                    /
                </motion.p>
                <motion.p
                    className="text-3xl font-black"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 1.5,
                        delay: 1.7,
                    }}
                >
                    2025
                </motion.p>
            </div>
        </>
    );
};

const Links = () => {
    return (
        <>
            <motion.div
                className="flex gap-6 mt-6"
                transition={{ delayChildren: 0.5, staggerChildren: 0.05 }}
            >
                <motion.a
                    initial={{ opacity: 0, translateY: 150 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{
                        duration: 2,
                        type: "spring",
                        bounce: 0.1,
                        delay: 0.25,
                        damping: 24,
                        stiffness: 300,
                    }}
                    href="https://www.instagram.com/x.onecb/"
                    target="_blank"
                    aria-label="Instagram"
                    rel="noopener noreferrer"
                >
                    <IoLogoInstagram className="text-3xl rounded-md bg-gradient-to-br from-pink-600 to-purple-600" />
                </motion.a>
                {/* <motion.a
                    initial={{ opacity: 0, translateY: 150 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{
                        duration: 2,
                        type: "spring",
                        bounce: 0.5,
                        delay: 0.3,
                        damping: 24,
                        stiffness: 300,
                    }}
                    href="https://google.com"
                    target="_blank"
                    aria-label="Spotify"
                    rel="noopener noreferrer"
                >
                    <FaSpotify className="text-3xl text-green-500" />
                </motion.a> */}
            </motion.div>
        </>
    );
};

function Hero() {
    return (
        <div className="h-screen w-full justify-center items-center flex flex-col">
            <Clock />
            <Title title={title} />
            <Desc desc={desc} />
            <Links />
        </div>
    );
}

export default Hero;
