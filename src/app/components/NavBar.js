import React, { useRef, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { navBarClasses } from './classes';

export default function NavBar(props){
    const mounted = useRef(false);
    useEffect(() => {
        mounted.current = true;
        return () => (mounted.current = false);
    });

    return (
        <div className="bg-transparent px-6 py-6">
            <div className="flex flex-row items-center">
                <h1 className="text-teal cursor-pointer">
                    <Link className="cursor-pointer" to="/">RM</Link>
                </h1>

                <div className="ml-auto mr-6 flex flex-row gap-x-10 items-center">
                    <Link to="/work-experience">
                        <h6>
                            Work Experience
                        </h6>
                    </Link>

                    <Link to="/personal-projects">
                        <h6>
                            Personal Projects
                        </h6>
                    </Link>

                    <a
                        
                        href="https://www.dropbox.com/s/qwjni65f897ppd6/Riley%20Matsuda.pdf?dl=1"
                        target="_blank"
                        download
                    >
                        <h6>
                            Download Resume
                        </h6>
                    </a>

                    <button
                        className={`text-teal border-teal bg-white
                            hover:border-transparent hover:bg-teal self-center hover:text-white
                            rounded-full duration-300 border px-4 py-2
                        `}
                        onClick={() => null}
                        type="button"
                    >
                        Contact
                    </button>
                </div>


            </div>
        </div>
    );
}