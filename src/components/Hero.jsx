import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();
    const handleExploreClick = () => {
        navigate('/main');
    };

    return (
        <section className="relative w-full h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white">
            {/* Основной контейнер */}
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center h-full px-6 md:px-12 gap-12">
                {/* Левая часть: Фото */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gray-700 overflow-hidden shadow-lg"
                >
                    <img
                        src="/kim2.JPG"
                        alt="Hero"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                {/* Правая часть: Контент */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center md:text-left space-y-6 max-w-md"
                >
                    <h1 className="text-4xl md:text-5xl font-bold">
                        Welcome to{' '}
                        <span className="text-[#8376ff]">My World</span>
                    </h1>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        Hi! I am a passionate web developer who loves crafting
                        amazing user experiences. Let’s build something great
                        together.
                    </p>
                    <div className="flex justify-center md:justify-start space-x-4 mt-4">
                        {/* Иконки социальных сетей */}
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-[#8376ff] transition"
                        >
                            <FiFacebook size={24} />
                        </a>
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-[#8376ff] transition"
                        >
                            <FiTwitter size={24} />
                        </a>
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-[#8376ff] transition"
                        >
                            <FiInstagram size={24} />
                        </a>
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-[#8376ff] transition"
                        >
                            <FiLinkedin size={24} />
                        </a>
                    </div>
                    {/* Кнопка Explore */}
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleExploreClick}
                        className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg transition duration-300"
                    >
                        Explore
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
