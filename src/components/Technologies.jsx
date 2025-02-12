import React, { useState } from 'react';
import { motion } from 'framer-motion';

const techCategories = {
    All: [
        { name: 'HTML5', category: 'Frontend' },
        { name: 'CSS3', category: 'Frontend' },
        { name: 'JavaScript', category: 'Frontend' },
        { name: 'React', category: 'Frontend' },
        { name: 'Node.js', category: 'Backend' },
        { name: 'Express.js', category: 'Backend' },
        { name: 'GitHub', category: 'Tools' },
    ],
    Frontend: [
        { name: 'HTML5' },
        { name: 'CSS3' },
        { name: 'JavaScript' },
        { name: 'React' },
        { name: 'Next.js' },
    ],
    Backend: [{ name: 'Node.js' }, { name: 'Express.js' }],
    Tools: [{ name: 'Git' }, { name: 'GitHub' }],
};

const Technologies = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    return (
        <section className="py-16 px-6 text-white">
            {/* Заголовок */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-8"
            >
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                    Technologies & Tools
                </h1>
                <p className="text-gray-400 mt-2 text-sm sm:text-base">
                    Filter technologies by category to see relevant tools &
                    frameworks.
                </p>
            </motion.div>

            {/* Фильтры */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
                {Object.keys(techCategories).map((category) => (
                    <button
                        key={category}
                        onClick={() => handleCategoryChange(category)}
                        className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                            category === selectedCategory
                                ? 'bg-indigo-500 text-white shadow-md'
                                : 'bg-gray-600 text-gray-200 hover:bg-indigo-600'
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Анимированная сетка технологий */}
            <motion.div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {techCategories[selectedCategory].map((tech, index) => (
                    <motion.div
                        key={index}
                        initial={{ scale: 0.8 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center justify-center bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-200 ease-in-out hover:bg-gradient-to-r hover:from-blue-400 hover:to-indigo-500 cursor-pointer"
                    >
                        <p className="text-gray-200 text-lg font-semibold">
                            {tech.name}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Technologies;
