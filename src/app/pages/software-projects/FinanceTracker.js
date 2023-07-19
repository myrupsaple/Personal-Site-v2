import React from 'react';
import { Link } from 'react-router-dom';

export default function FinanceTracker(props){
    return (
        <div className="page-box">
            <Link className="flex text-coral" to="/software-projects">
                &lt; Software Projects
            </Link>

            <br/>

            <h5>This project is still a work in progress. This page will be updated soon!</h5>
        </div>
    );
}