import React from 'react';
import { Link } from 'react-router-dom';

export default function Certifications(props){
    return (
        <div className="page-box">
            <Link className="flex text-mpLRed-1" to="/">
                Back
            </Link>

            <br/>

            <h5>Certifications</h5>
        </div>
    );
}