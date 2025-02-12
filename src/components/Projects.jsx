import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        id: 1,
        title: 'Online Headphones Store',
        description:
            'Developed a responsive e-commerce platform for headphones with features like product filtering, shopping cart, and smooth animations. Utilized Redux Toolkit for state management and React Router DOM for navigation.',
        tools: [
            'React',
            'HTML',
            'Redux Toolkit',
            'Tailwind CSS',
            'React Router DOM',
            'Framer Motion',
            'React Hooks',
        ],
        link: 'https://kimsaakyan.github.io/hp-store/',
    },
    {
        id: 2,
        title: 'Music Player',
        description:
            'Developed a dynamic music player with features like play, pause, add tracks to a playlist, add songs to favorites, and search functionality for quick track access.',
        tools: ['React', 'React Hooks', 'React State', 'Tailwind CSS'],
        link: 'https://kimsaakyan.github.io/music-player-app/',
    },
    {
        id: 3,
        title: 'Blog Platform',
        description:
            'Developed a client-side blog platform with features like creating, editing, and deleting articles, archiving and managing articles, liking/disliking posts, and viewing popular articles.',
        tools: ['React', 'Tailwind CSS'],
        link: 'https://kimsaakyan.github.io/myblog-app/',
    },
];

const Projects = () => {
    return (
        <section className="py-12 px-6 text-white">
            <div className="container mx-auto max-w-7xl">
                {/* Заголовок */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10"
                >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                        Projects
                    </h1>
                    <p className="text-gray-300 mt-4">
                        A showcase of my recent work, highlighting creativity,
                        functionality, and attention to detail.
                    </p>
                </motion.div>

                {/* Основной контейнер слайдера */}
                <div className="flex flex-wrap justify-center items-center gap-4">
                    {projects.map(({ id, title, description, tools, link }) => (
                        <div
                            key={id}
                            className="p-6 border border-gray-500 shadow-lg rounded-lg transform transition-transform hover:scale-105 w-[300px]"
                        >
                            {/* Заголовок */}
                            <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
                                {title}
                            </h3>

                            {/* Описание */}
                            <p className="text-gray-200 mb-4 text-sm leading-snug">
                                {description}
                            </p>

                            {/* Инструменты */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {tools.map((tool, index) => (
                                    <span
                                        key={index}
                                        className="bg-indigo-100 text-indigo-600 text-xs font-medium px-2 py-1 rounded-full"
                                    >
                                        #{tool}
                                    </span>
                                ))}
                            </div>

                            {/* Кнопка для перехода */}
                            <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out"
                            >
                                View Project
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
