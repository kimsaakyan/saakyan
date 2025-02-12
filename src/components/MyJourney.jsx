import React from 'react';
import { motion } from 'framer-motion';
import EducationTimeline from './EducationTimeline';

const MyJourney = () => {
    return (
        <section className="py-12 px-6 text-white min-h-screen">
            <div className="container mx-auto max-w-6xl">
                {/* Заголовок */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10"
                >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                        My Journey
                    </h1>
                    <p className="text-gray-300 mt-4">
                        From learning to building: my journey as a Frontend
                        Developer.
                    </p>
                </motion.div>

                <div className="flex flex-col md:flex-row gap-8">
                    {/* Education Section */}
                    <div className="flex-1 p-6">
                        <h2 className="text-md font-semibold mb-4 text-center md:text-left bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
                            Education
                        </h2>
                        <hr className="border-t border-[#555] mb-4" />
                        <EducationTimeline />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyJourney;
