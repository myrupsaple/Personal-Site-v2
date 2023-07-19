import React, { useRef, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { navBarClasses } from './classes';

export default function NavBar(props){
    const mounted = useRef(false);
    useEffect(() => {
        mounted.current = true;
        return () => (mounted.current = false);
    });

    const { scrollPosition } = props;

    const navHeight = document.getElementById('navbar-main')?.offsetHeight || 0;
    const navAdditionalClasses = (
        scrollPosition < navHeight ? 
            navBarClasses.beforeTrigger 
        : scrollPosition < 300 ? 
            navBarClasses.midTrigger 
        : 
            navBarClasses.afterTrigger
    );

    return (
        <div id="navbar-main" className={`${navBarClasses.default} ${navAdditionalClasses}`}>
            <div className="flex flex-row items-center">
                <h1 className="text-teal cursor-pointer">
                    <Link className="cursor-pointer" to="/">RM</Link>
                </h1>

                <div className="ml-auto mr-6 flex flex-row gap-x-10 items-center">
                    <Link to="/work-experience">
                        <h6 className="hover-text-teal">
                            Work Experience
                        </h6>
                    </Link>

                    <Link to="/personal-projects">
                        <h6 className="hover-text-teal">
                            Personal Projects
                        </h6>
                    </Link>

                    <a
                        
                        href="https://dl.dropboxusercontent.com/scl/fi/mskw0og8a956ai9fsm6xa/Resume-Riley-Matsuda.pdf?rlkey=slc41s2zzsmm2gnzl35vm73od&dl=0"
                        target="_blank"
                        download
                    >
                        <h6 className="hover-text-teal">
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
        </div>
    );
}