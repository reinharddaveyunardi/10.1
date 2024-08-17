import React, { memo } from "react";
import { homeroom, leadVice, students } from "@/data/data";
import { motion } from "framer-motion";
import { onScreenEffect } from "@/animations/Variants";
import { CardProps } from "@/interface";

const Card = memo(({ name, role, img }: CardProps) => {
    return (
        <motion.div
            className="my-2"
            variants={onScreenEffect}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
        >
            <motion.div className="drop-shadow-xl">
                <div>
                    <div className="relative xl:h-[60px] h-[2px] w-[200px] p-2 drop-shadow-xl">
                        <img
                            className="xl:w-[180px] md:w-[150px] w-[120px] absolute rounded-md drop-shadow-xl"
                            src={img}
                            alt={name}
                        />
                    </div>
                    <div className="flex flex-col bg-white rounded-md xl:w-[470px] w-[360px] h-[90px] xl:pl-[35%] pl-[30%] pr-[10%] ml-[20px] mt-[60px] justify-center">
                        <h1 className="font-bold italic text-[#4E4E4E]">
                            {name}
                        </h1>
                        <hr />
                        <p className="text-[#4E4E4E]">{role}</p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
});

Card.displayName = "Card";

const HomeroomSection = memo(({ homeroom }: { homeroom: any[] }) => {
    return (
        <div>
            {homeroom.map((item, key) => (
                <Card
                    name={item.name}
                    role={item.role}
                    img={item.img}
                    key={key}
                />
            ))}
        </div>
    );
});

HomeroomSection.displayName = "HomeroomSection";

const LeadViceSection = memo(({ leadVice }: { leadVice: any[] }) => {
    return (
        <div className="flex flex-col xl:flex xl:flex-row xl:gap-24 gap-6">
            {leadVice.map((item, key) => (
                <Card
                    name={item.name}
                    role={item.role}
                    img={item.img}
                    key={key}
                />
            ))}
        </div>
    );
});

LeadViceSection.displayName = "LeadViceSection";

const StudentsSection = memo(({ students }: { students: any[] }) => {
    return (
        <div className="flex flex-col xl:grid xl:grid-cols-3 xl:gap-24 gap-6">
            {students.map((item, key) => (
                <Card
                    name={item.name}
                    role={item.role}
                    img={item.img}
                    key={key}
                />
            ))}
        </div>
    );
});

StudentsSection.displayName = "StudentsSection";

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
                HOMEROOM
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
                LEADER & VICE
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
                STUDENTS
            </motion.h1>
            <section className="flex flex-col justify-center items-center">
                <StudentsSection students={students} />
            </section>
            <motion.h1
                variants={onScreenEffect}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
                className="text-3xl xl:text-4xl  font-black "
            >
                OUR GALLERY
            </motion.h1>
        </div>
    );
}

Class.displayName = "Class";

export default Class;
