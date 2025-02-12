import React from 'react';
import Navbar from '../components/Navbar';
import AboutMe from '../components/AboutMe';
import MyJourney from '../components/MyJourney';
import Technologies from '../components/Technologies';
import Projects from '../components/Projects';
import ContactMe from '../components/ContactMe';

const MainPage = () => {
    return (
        <main className="flex flex-col">
            <Navbar />
            <AboutMe />
            <MyJourney />
            <Technologies />
            <Projects />
            <ContactMe />
        </main>
    );
};

export default MainPage;
