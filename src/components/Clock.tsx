import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Clock() {
    const [time, setTime] = useState(new Date());
    const [greeting, setGreeting] = useState("");
    const [showModal, setShowModal] = useState(true);
    useEffect(() => {
        const updateClock = () => {
            setTime(new Date());
        };
        const interval = setInterval(updateClock, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const hour = time.getHours();
        if (hour < 12) {
            setGreeting("Good Morning");
        } else if (hour < 18) {
            setGreeting("Good Afternoon");
        } else {
            setGreeting("Good Evening");
        }
    }, [time]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowModal(false);
        }, 2500);
    }, []);
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return (
        <AnimatePresence>
            {showModal && (
                <div className="fixed inset-0 mt-4 flex justify-center items-start z-[99]">
                    <motion.div
                        className="bg-white rounded-lg p-4 shadow-lg w-[90%] xl:w-[45%] flex justify-between"
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -100 }}
                        transition={{
                            duration: 1.5,
                            type: "spring",
                            bounce: 0.4,
                        }}
                    >
                        <h1 className="text-black opacity-75">
                            {greeting}, welcome to 10.1 website!
                        </h1>
                        <h1 className="text-black opacity-65">
                            {day}/{month}/{year}
                        </h1>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

export default Clock;
