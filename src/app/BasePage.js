import React, { useState, useRef, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import NavBar from './components/NavBar';

import { basePageClasses } from './components/classes';

import WorkExperience from './pages/work-experience/_WorkExperience';
import MathPlexTutoring from './pages/work-experience/MathPlexTutoring';
import Mathnasium from './pages/work-experience/Mathnasium';

import FinanceTracker from './pages/software-projects/FinanceTracker';
import HungerGames from './pages/software-projects/HungerGames';
import WordPredictor from './pages/software-projects/WordPredictor';

import Ucla from './pages/other-works/Ucla';
// import Certifications from './pages/other-works/Certifications';
import Photography from './pages/other-works/Photography';

export default function BasePage(props){
    const mounted = useRef(false);
    useEffect(() => {
        mounted.current = true;
        return () => (mounted.current = false);
    });

    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [documentHeight, setDocumentHeight] = useState(0);

    let scrollNavTrigger = document?.getElementById('navbar-main')?.offsetHeight || 100; // Pixels
    scrollNavTrigger += 20;

    const handleScroll = () => {
        const position = window.scrollY;
        if(mounted.current) setScrollPosition(position);
    };
    const handleHeight = (e) => {
        const height = e.target.innerHeight;
        if(mounted.current) setWindowHeight(height);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleHeight);

        if(mounted.current) setDocumentHeight(document.documentElement.scrollHeight);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleHeight);
        }
    });

    const isHome = document.getElementById('home_screen_name') ? true : false;

    return (
        <div>
            {/* <div className="h-screen fixed z-0">
                <img
                    alt="background"
                    className="h-full"
                    src={"/media/bg/bg-2.jpg"}
                />
            </div> */}
            <div className="h-min-content absolute min-h-screen">
                <NavBar
                    scrollPosition={scrollPosition}
                    scrollNavTrigger={scrollNavTrigger}
                    showScroll={isHome}
                    windowHeight={windowHeight}
                    documentHeight={documentHeight}
                />
                
                <div className={`min-h-screen ${basePageClasses.main}`}>
                    <Routes>
                        <Route path="/" element={<Home/>}/>

                        <Route path="/work-experience" element={<WorkExperience/>}/>
                        <Route path="/work-experience/mathplex-tutoring" exact element={<MathPlexTutoring/>}/>
                        <Route path="/work-experience/mathnasium" exact element={<Mathnasium/>}/>

                        <Route path="/software-projects/finance-tracker" exact element={<FinanceTracker/>}/>
                        <Route path="/software-projects/hunger-games" exact element={<HungerGames/>}/>
                        <Route path="/software-projects/word-predictor" exact element={<WordPredictor/>}/>

                        {/* <Route path="/other-works/certifications" element={<Certifications/>}/> */}
                        <Route path="/other-works/ucla" exact element={<Ucla/>}/>
                        <Route path="/other-works/photography" exact element={<Photography/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}