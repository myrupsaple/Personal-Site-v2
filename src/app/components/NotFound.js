import React from 'react';

import { Link } from 'react-router-dom';

export default function NotFound(){
    return (
        <div className="h-min-screen w-min-screen">
            <img
                src="/media/error/bg3.jpg"
                className="h-full w-full"
            />

            <div
                className="absolute top-48 left-20"
            >
                <div className="text-7xl">
                    404
                </div>
                
                <br/>

                <div className="text-4xl">
                    We can't find the
                </div>

                <div className="clear-both h-4"/>

                <div className="text-4xl">
                    page you're looking for.
                </div>

                <br/>

                <div>
                    Take me <Link className="text-coral" to="/">Home</Link>
                </div>
            </div>
        </div>
    );
}