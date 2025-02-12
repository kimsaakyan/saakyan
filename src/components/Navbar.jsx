import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="w-full text-white px-6 py-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Логотип */}
                <Link to="/" className="text-xl font-bold">
                    SAAKYAN
                </Link>

                {/* Гамбургер-меню для sm и меньше */}
                <div className="sm:hidden">
                    <button onClick={toggleMenu} className="text-2xl">
                        {isMenuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>

                {/* Ссылки меню */}
                <ul
                    className={`flex-col sm:flex-row sm:flex sm:gap-8 absolute sm:static top-16 left-0 right-0 bg-black sm:bg-transparent rounded-md sm:rounded-none p-6 sm:p-0 transition-transform ${
                        isMenuOpen ? 'flex' : 'hidden'
                    } text-white`}
                >
                    <li>
                        <a
                            href="#about"
                            className="block py-2 sm:py-0 sm:hover:text-blue-400"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About Me
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            className="block py-2 sm:py-0 sm:hover:text-blue-400"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            href="#technologies"
                            className="block py-2 sm:py-0 sm:hover:text-blue-400"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Technologies
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact-me"
                            className="block py-2 sm:py-0 sm:hover:text-blue-400"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact Me
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
