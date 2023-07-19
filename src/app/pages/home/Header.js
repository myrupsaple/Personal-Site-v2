import React from 'react';

export default function Header(props){
    return (
        <div className="grid grid-cols-1 justify-items-center">
            <div className="text-center h-48 w-48">
                <img
                    src="https://i.imgur.com/N5Dll8M.png"
                    className="bg-transparent"
                    alt="headshot"
                />
            </div>

            <div className="clear-both h-2"/>

            <h1 id="home_screen_name">Riley Matsuda</h1>

            <div className="clear-both h-2"/>

            <h5>Web Developer and Educator</h5>
            <h5>I enjoy creating cool things and teaching people new concepts.</h5>
        </div>
    );
}