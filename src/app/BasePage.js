import React, { useState, useCallback } from 'react';
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

function getClassNames(showSide){
    if(showSide) return basePageClasses.withSideBar;
    else return basePageClasses.noSideBar;
}

const panelClasses = "grid grid-cols-1 duration-300";

// Todo: Add scroll tracking for sidebar highlights
// Todo: Add view on desktop notification
// Todo: Figure out bold/italic (Other Works section)
// Todo: Hide menu bar if not on home page
// Todo: Move graphics to cloudinary

function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

export default function BasePage(props){
    return (
        <div>
            {/* <div className="h-screen fixed z-0">
                <img
                    alt="background"
                    className="h-full"
                    src={"/media/bg/bg-2.jpg"}
                />
            </div> */}
            <div className="h-full absolute min-h-screen z-50">
                <div className={`top-0 h-20 ${panelClasses} ${basePageClasses.sideBar}`}>
                    <NavBar/>
                </div>

                <div className="clear-both h-8"/>
                
                <div className={`min-h-screen ${panelClasses} ${basePageClasses.main}`}>
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