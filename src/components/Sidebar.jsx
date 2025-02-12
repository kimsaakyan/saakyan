import React, { useState, useEffect } from 'react';
import {
    FaHome,
    FaInfoCircle,
    FaProjectDiagram,
    FaCog,
    FaPhone,
} from 'react-icons/fa';

const Sidebar = () => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);

    const [scrollPosition, setScrollPosition] = useState(0);

    // Функция для отслеживания прокрутки страницы
    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        // Показывать/скрывать sidebar после прокрутки 120px
        if (currentScrollY >= 120) {
            setIsSidebarVisible(false); // Скрыть sidebar
        } else {
            setIsSidebarVisible(true); // Показать sidebar
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className={`fixed top-20 left-0 w-10 bg-white text-black opacity-45 hover:opacity-100 transition-opacity rounded-r-xl flex flex-col items-center py-6 space-y-6`}
        >
            <a href="#home" className="text-xl hover:text-blue-400">
                <FaHome />
            </a>
            <a href="#about" className="text-xl hover:text-blue-400">
                <FaInfoCircle />
            </a>
            <a href="#projects" className="text-xl hover:text-blue-400">
                <FaProjectDiagram />
            </a>
            <a href="#services" className="text-xl hover:text-blue-400">
                <FaCog />
            </a>
            <a href="#contact" className="text-xl hover:text-blue-400">
                <FaPhone />
            </a>
        </div>
    );
};

export default Sidebar;
