import './App.css';
import AboutMe from './components/AboutMe.jsx';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Navbar from './components/Navbar.jsx';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import MyJourney from './components/MyJourney.jsx';
import { Route, Routes } from 'react-router-dom';
import HeroPage from './pages/HeroPage.jsx';
import MainPage from './pages/MainPage.jsx';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HeroPage />} />
                <Route path="main" element={<MainPage />} />
            </Routes>
        </>
    );
}

export default App;
