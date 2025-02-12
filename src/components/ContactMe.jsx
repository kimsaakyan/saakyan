import React from 'react';
import { motion } from 'framer-motion';

const ContactMe = () => {
    return (
        <section className="py-16 px-6 text-white">
            <div className="container mx-auto max-w-5xl">
                {/* Заголовок */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 px-4"
                >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                        Contact Me
                    </h1>
                    <p className="text-gray-300 mt-4">
                        Have a question or want to work together? Feel free to
                        reach out!
                    </p>
                </motion.div>

                {/* Контактная форма */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="border border-gray-500 rounded-xl shadow-lg p-6 md:p-8"
                >
                    <form className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {/* Имя */}
                        <div className="flex flex-col">
                            <label
                                htmlFor="name"
                                className="text-sm font-medium text-gray-400"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="mt-2 p-3 rounded-lg bg-gray-700 text-gray-300 focus:ring-2 focus:ring-indigo-500"
                                placeholder="Your Name"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div className="flex flex-col">
                            <label
                                htmlFor="email"
                                className="text-sm font-medium text-gray-400"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="mt-2 p-3 rounded-lg bg-gray-700 text-gray-300 focus:ring-2 focus:ring-indigo-500"
                                placeholder="Your Email"
                                required
                            />
                        </div>

                        {/* Сообщение */}
                        <div className="flex flex-col col-span-1 md:col-span-2">
                            <label
                                htmlFor="message"
                                className="text-sm font-medium text-gray-400"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows="4"
                                className="mt-2 p-3 rounded-lg bg-gray-700 text-gray-300 focus:ring-2 focus:ring-indigo-500"
                                placeholder="Your Message"
                                required
                            ></textarea>
                        </div>

                        {/* Кнопка отправки */}
                        <div className="col-span-1 md:col-span-2 flex justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-indigo-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-indigo-600 transition-all w-full sm:w-auto"
                            >
                                Send Message
                            </motion.button>
                        </div>
                    </form>
                </motion.div>

                {/* Социальные сети */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mt-12 flex flex-wrap justify-center gap-4"
                >
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-indigo-500 transition text-sm"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/kimsaakyan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-indigo-500 transition text-sm"
                    >
                        GitHub
                    </a>
                    <a
                        href="mailto:saakyan.kimo@gmail.com"
                        className="text-gray-400 hover:text-indigo-500 transition text-sm"
                    >
                        Email
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactMe;
