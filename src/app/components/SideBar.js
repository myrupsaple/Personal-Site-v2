import React, { useRef, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { navBarClasses } from './classes';

export default function SideBar(props){
    const mounted = useRef(false);
    useEffect(() => {
        mounted.current = true;
        return () => (mounted.current = false);
    });

    return (
        <div className="bg-transparent px-6 py-6">
            <div className="flex flex-row items-center">
                <h1 className="text-teal"><Link to="/">RM</Link></h1>

                <div className="ml-auto mr-6 flex flex-row gap-x-10">
                    <h6>
                        <Link to="/work-experience">Work Experience</Link>
                    </h6>

                    <h6>
                        <Link to="/personal-projects">Personal Projects</Link>
                    </h6>

                    <h6>
                        <a
                            href="https://www.dropbox.com/s/qwjni65f897ppd6/Riley%20Matsuda.pdf?dl=1"
                            target="_blank"
                            download
                        >
                            Download Resume
                        </a>
                    </h6>

                    <button
                        className="text-mpLRed bg-mpLRed-4 hover:bg-mpLRed-7 hover:ring-mpLRed self-center rounded-md duration-300 border"
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