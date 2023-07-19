import React, { useRef, useEffect } from 'react';

import Header from './home/Header';
import About from './home/About';
import WorkExperience from './home/WorkExperience';
import SoftwareProjects from './home/SoftwareProjects';
import OtherWorks from './home/OtherWorks';

export default function Home(props){
    const mounted = useRef(false);
    useEffect(() => {
        mounted.current = true;
        return () => (mounted.current = false);
    });

    return (
        <div>
            <div className="px-20 py-12">
                <Header/>
            </div>

            <img src="https://i.imgur.com/gRgIAp7.png" className="w-full"/>

            <div className="bg-teal w-full px-20 py-12 text-white drop-shadow-xl -mb-40">
                <About/>

                <div className="clear-both h-40"/>
            </div>
            
            <div className="rounded-lg bg-slateLight px-12 py-8 mx-12 mb-24 drop-shadow-xl">
                <WorkExperience/>
            </div>

            <div className="bg-coral w-full px-20 py-12 text-white drop-shadow-xl -mb-40">
                <SoftwareProjects/>

                <div className="clear-both h-40"/>
            </div>

            <div className="rounded-lg bg-slateLight px-12 py-8 mx-12 mb-24 drop-shadow-xl">
                <OtherWorks/>
            </div>
        </div>
    );
}