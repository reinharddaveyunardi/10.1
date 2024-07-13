import React from "react";
import { homeroom, leadVice, students } from "@/data/data";
import { motion, Variants } from "framer-motion";

const onScreenEffect: Variants = {
    offscreen: {
        y: 300,
        opacity: 0,
    },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", bounce: 0.1, duration: 1.5 },
    },
};

const Card = ({ name, role, img }: any, key: number) => {
    return (
        <motion.div
            className="my-2"
            key={key}
            variants={onScreenEffect}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
        >
            <div className="drop-shadow-xl">
                <div>
                    <div className="relative xl:h-[60px] h-[2px] w-[200px] drop-shadow-xl">
                        <img
                            className="xl:w-[180px] md:w-[150px] w-[120px] absolute rounded-md drop-shadow-xl"
                            src={img}
                            alt={name}
                        />
                    </div>
                    <div className="flex flex-col bg-white rounded-md xl:w-[470px] w-[360px] h-[90px] xl:pl-[35%] pl-[35%] pr-[10%] ml-[20px] mt-[60px] justify-center">
                        <h1 className="font-bold italic text-[#4E4E4E]">
                            {name}
                        </h1>
                        <hr />
                        <p className="text-[#4E4E4E]">{role}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const HomeroomSection = ({ homeroom }: any) => {
    return (
        <>
            <div>
                {homeroom.map((item: any, key: number) => (
                    <Card
                        name={item.name}
                        role={item.role}
                        img={item.img}
                        key={key}
                    />
                ))}
            </div>
        </>
    );
};
const LeadViceSection = ({ leadVice }: any) => {
    return (
        <>
            <div className="flex flex-col xl:flex xl:flex-row xl:gap-24 gap-6">
                {leadVice.map((item: any, key: number) => (
                    <Card
                        name={item.name}
                        role={item.role}
                        img={item.img}
                        key={key}
                    />
                ))}
            </div>
        </>
    );
};

const StudentsSection = ({ students }: any) => {
    return (
        <>
            <div className="flex flex-col xl:grid xl:grid-cols-3 xl:gap-24 gap-6">
                {students.map((item: any, key: number) => (
                    <Card
                        name={item.name}
                        role={item.role}
                        img={item.img}
                        key={key}
                    />
                ))}
            </div>
        </>
    );
};

function Class() {
    return (
        <div className="h-full w-full flex flex-col xl:gap-16 my-16 gap-12 justify-center items-center">
            <motion.h1
                variants={onScreenEffect}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
                className="text-3xl xl:text-4xl font-black mt-12"
            >
                Homeroom
            </motion.h1>
            <section className="flex flex-col justify-center items-center">
                <HomeroomSection homeroom={homeroom} />
            </section>
            <motion.h1
                variants={onScreenEffect}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
                className="text-3xl xl:text-4xl  font-black "
            >
                Leader & Vice
            </motion.h1>
            <section className="flex flex-col justify-center items-center">
                <LeadViceSection leadVice={leadVice} />
            </section>
            <motion.h1
                variants={onScreenEffect}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
                className="text-3xl xl:text-4xl  font-black "
            >
                Students
            </motion.h1>
            <section className="flex flex-col justify-center items-center">
                <StudentsSection students={students} />
            </section>
        </div>
    );
}

export default Class;
