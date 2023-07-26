import React from 'react';

export default function Footer(props){
    return (
        <div className="w-full text-white text-sm bg-teal px-8 py-2 grid grid-cols-1 sm:flex sm:flex-row">
            <div>
                Created from scratch using React
            </div>
            <div className="sm:ml-auto">
                &copy; 2023 Riley Matsuda
            </div>
        </div>
    );
}