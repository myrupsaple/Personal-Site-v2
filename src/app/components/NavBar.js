import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import ScrollBar from './ScrollBar';

import { navBarClasses } from './classes';

export default function NavBar(props){
    const mounted = useRef(false);
    useEffect(() => {
        mounted.current = true;
        return () => (mounted.current = false);
    });

    const { showScroll, windowHeight, scrollPosition, scrollNavTrigger } = props;

    const navHeight = document.getElementById('navbar-main')?.offsetHeight || 0;
    const navStickyClasses = (
        !scrollPosition || scrollPosition < navHeight ? 
            navBarClasses.beforeTrigger 
        : scrollPosition < scrollNavTrigger ? 
            `${navBarClasses.midTrigger}`
        : 
            navBarClasses.afterTrigger
    );

    return (
        <div id="navbar-main" className={`${navStickyClasses} z-[99999]`}>
            <div className={`flex flex-row items-center ${navBarClasses.default}`}>
                <h1 className={navBarClasses.leftSide}>
                    <Link className="cursor-pointer" to="/">RM</Link>
                </h1>

                <div className={navBarClasses.rightSide}>
                    <Link to="/work-experience">
                        <h6 className={navBarClasses.rightSideItems.coral}>
                            Work Experience
                        </h6>
                    </Link>

                    <Link to="/software-projects">
                        <h6 className={navBarClasses.rightSideItems.coral}>
                            Personal Projects
                        </h6>
                    </Link>

                    <a
                        href="https://dl.dropboxusercontent.com/scl/fi/kgljn01wdr8e15473lido/Resume-Riley-Matsuda.pdf?rlkey=m2x3jimrm3p55h0z30y075y87&dl=0"
                        target="_blank"
                        rel="noreferrer"
                        download
                    >
                        <h6 className={navBarClasses.rightSideItems.teal}>
                            Download Resume
                        </h6>
                    </a>

                    {/* <button
                        className={`text-teal border-teal bg-white
                            hover:border-transparent hover:bg-teal self-center hover:text-white
                            rounded-full duration-300 border px-4 py-2
                        `}
                        onClick={() => null}
                        type="button"
                    >
                        Contact
                    </button> */}
                </div>
            </div>
            <ScrollBar
                scrollPosition={scrollPosition}
                show={showScroll}
                scrollNavTrigger={scrollNavTrigger}
                windowHeight={windowHeight}
            />
        </div>
    );
}