import React from 'react';
import {
    FaHome,
    FaInfoCircle,
    FaProjectDiagram,
    FaCog,
    FaPhone,
} from 'react-icons/fa';

const Sidebar2 = () => {
    return (
        <aside className="border border-l-0 text-gray-100 shadow-lg fixed top-14 left-0 lg:w-48 w-16 py-10 transition-all duration-300 rounded-r-lg">
            <ul className="flex flex-col mt-4 px-2 lg:px-4 gap-6">
                <li className="hover:text-indigo-500 flex justify-center lg:justify-start">
                    <a href="#" className="flex items-center gap-4 py-2">
                        <FaHome size={20} />
                        <span className="hidden lg:inline text-lg">
                            Home
                        </span>
                    </a>
                </li>
                <li className="hover:text-indigo-500 flex justify-center lg:justify-start">
                    <a href="#" className="flex items-center gap-4 py-2">
                        <FaInfoCircle size={20} />
                        <span className="hidden lg:inline text-lg">
                            About
                        </span>
                    </a>
                </li>
                <li className="hover:text-indigo-500 flex justify-center lg:justify-start">
                    <a href="#" className="flex items-center gap-4 py-2">
                        <FaProjectDiagram size={20} />
                        <span className="hidden lg:inline text-lg">
                            Education
                        </span>
                    </a>
                </li>
                <li className="hover:text-indigo-500 flex justify-center lg:justify-start">
                    <a href="#" className="flex items-center gap-4 py-2">
                        <FaCog size={20} />
                        <span className="hidden lg:inline text-lg">
                            Projects
                        </span>
                    </a>
                </li>
                <li className="hover:text-indigo-500 flex justify-center lg:justify-start">
                    <a href="#" className="flex items-center gap-4 py-2">
                        <FaPhone size={20} />
                        <span className="hidden lg:inline text-lg">
                            Contact Me
                        </span>
                    </a>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar2;
