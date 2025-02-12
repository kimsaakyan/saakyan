import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
    return (
        <section className="py-12 px-6 text-white">
            {/* Основной контейнер */}
            <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-12">
                {/* Левая часть: Фото */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center flex-none w-[250px]"
                >
                    <img
                        src="/kim.jpg"
                        alt="My Personal Photo"
                        className="rounded-lg shadow-lg"
                    />
                </motion.div>

                {/* Правая часть: Описание и информация */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 text-white p-6"
                >
                    {/* Заголовок */}
                    <h1 className="text-sm font-bold mb-4 bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
                        Who Am I?
                    </h1>

                    {/* Описание */}
                    <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                        Hello! I'm a web developer with a passion for creating
                        beautiful and functional web applications. I specialize
                        in front-end development with React, Node.js, and modern
                        UI/UX frameworks.
                    </p>

                    <hr className="my-4 border-gray-400" />

                    {/* Информационная карточка */}
                    <div className="mb-6 mt-6 text-sm grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <p>
                            <strong>Name:</strong> Kim Saakyan
                        </p>
                        <p>
                            <strong>From:</strong> Moscow, Russia
                        </p>
                        <p>
                            <strong>Email:</strong> saakyan.kimo@gmail.com
                        </p>
                        <p>
                            <strong>Age:</strong> 26
                        </p>
                    </div>

                    {/* Кнопка Download CV */}
                    <div className="flex justify-center md:justify-start">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md shadow-lg transition duration-300"
                            onClick={() =>
                                window.open(
                                    'https://drive.google.com/file/d/1rzJkEVnhu96pjANZHS8_bRNOJwbk79mM/view?usp=sharing',
                                    '_blank'
                                )
                            }
                        >
                            Download CV
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutMe;
