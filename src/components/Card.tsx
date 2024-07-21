import { onScreenEffect } from "@/animations/Variants";
import { CardProps } from "@/interface";
import { motion } from "framer-motion";
import React from "react";

function Card({ ...CardProps }: CardProps) {
    return (
        <motion.div
            className="my-2"
            key={CardProps.key}
            variants={onScreenEffect}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
        >
            <motion.div className="drop-shadow-xl">
                <div>
                    <div className="relative xl:h-[60px] h-[2px] w-[200px] drop-shadow-xl">
                        <img
                            className="xl:w-[180px] md:w-[150px] w-[120px] absolute rounded-md drop-shadow-xl"
                            src={CardProps.img}
                            alt={CardProps.name}
                        />
                    </div>
                    <div className="flex flex-col bg-white rounded-md xl:w-[470px] w-[360px] h-[90px] xl:pl-[35%] pl-[30%] pr-[10%] ml-[20px] mt-[60px] justify-center">
                        <h1 className="font-bold italic text-[#4E4E4E]">
                            {CardProps.name}
                        </h1>
                        <hr />
                        <p className="text-[#4E4E4E]">{CardProps.role}</p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default Card;
