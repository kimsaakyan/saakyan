import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const educationData = [
    {
        title: 'High School Diploma',
        institution: 'Russian School No. 2 - 2005 - 2017',
    },
    {
        title: "Bachelor's Degree",
        institution: 'Russian-Armenian University - 2017 - 2022',
    },
    {
        title: 'Programming Specialization Courses',
        institution: 'Armenian Code Academy - 2022 - 2023',
    },
];

const EducationTimeline = () => {
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false); // Сбрасываем видимость при уходе элемента
                }
            },
            { threshold: 0.2 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    return (
        <div className="relative" ref={containerRef}>
            {/* Линия времени */}
            <div className="absolute top-0 left-4 h-full border-l-2 border-gray-500"></div>

            {/* Education Items с анимацией */}
            <div className="space-y-8">
                {isVisible &&
                    educationData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.3 }}
                            className="relative flex items-center"
                        >
                            {/* Временная точка */}
                            <div className="w-4 h-4 bg-gray-500 border-2 border-gray-700 rounded-full absolute left-[-8px]"></div>
                            <div className="ml-6 p-4 w-3/4">
                                <h3 className="text-lg font-semibold mb-1">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-gray-400">
                                    {item.institution}
                                </p>
                            </div>
                        </motion.div>
                    ))}
            </div>
        </div>
    );
};

export default EducationTimeline;
