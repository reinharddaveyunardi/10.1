import React, { useRef, useState, useLayoutEffect, useCallback, useEffect } from "react";
import { ResizeObserver } from "resize-observer";
import { motion, useTransform, useSpring, useMotionValue } from "framer-motion";
import "@/components/styles.scss";
import { useScrollPercentage } from "react-scroll-percentage";

const HorizontalScroll = () => {
    const scrollRef = useRef(null);
    const scrollGhostRef = useRef(null);
    const [inScrollRange, setScrollRange] = useState(0);
    const [ViewportWidth, setViewportWidth] = useState(0);

    const scrollPer = useMotionValue(0);

    useLayoutEffect(() => {
        scrollRef && setScrollRange(scrollRef.current.scrollWidth);
    }, [scrollRef]);

    const onResize = useCallback((entries) => {
        for (let e of entries) {
            setViewportWidth(e.contentRect.width);
        }
    }, []);

    useLayoutEffect(() => {
        const resizeObserver = new ResizeObserver((entries) => onResize(entries));
        resizeObserver.observe(scrollGhostRef.current);
        return () => resizeObserver.disconnect();
    }, [onResize]);

    const [containerRef, Percentage] = useScrollPercentage({
        threshold: 0.1,
    });

    useEffect(() => {
        scrollPer.set(Percentage);
    }, [Percentage]);

    const transform = useTransform(scrollPer, [0, 1], [0, -inScrollRange + ViewportWidth]);
    const physics = { damping: 15, mass: 0.27, stiffness: 55 };
    const spring = useSpring(transform, physics);

    return (
        <motion.div ref={containerRef}>
            <div className="scroll-container">
                <motion.section ref={scrollRef} style={{ x: spring }} className="thumbnails-container">
                    <div className="thumbnails">
                        <div className="thumbnail">
                            <img src="/formal.jpeg" alt="thumbnail" />
                        </div>
                        <div className="thumbnail">
                            <img src="/10-1.jpeg" alt="thumbnail" />
                        </div>
                        <div className="thumbnail">
                            <img src="/tunjuk.jpeg" alt="thumbnail" />
                        </div>
                        <div className="thumbnail">
                            <img src="/dp-tidur.jpeg" alt="thumbnail" />
                        </div>
                        <div className="thumbnail">
                            <img src="/juara1.jpeg" alt="thumbnail" />
                        </div>
                        <div className="thumbnail">
                            <img src="/fotbar-juara.jpeg" alt="thumbnail" />
                        </div>
                        <div className="thumbnail">
                            <img src="/fotbar-fs.jpeg" alt="thumbnail" />
                        </div>
                    </div>
                </motion.section>
            </div>
            <div ref={scrollGhostRef} style={{ height: inScrollRange }} className="ghost" />
        </motion.div>
    );
};

export default HorizontalScroll;
