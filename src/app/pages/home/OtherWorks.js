import React from 'react';
import { Link } from 'react-router-dom';

import { otherWorksClasses } from '../../components/classes';

export default function OtherWorks(props){
    return (
        <>
            <h1
                id="other_works"
                className="text-center"
            >
                Other Works
            </h1>
            <div className="clear-both h-4"/>

            <h3 id="other_works_certifications">
                Certifications and Recognitions
            </h3>

            <div className="clear-both h-4"/>
            
            <h6 className={otherWorksClasses.title}>CBEST Certification</h6>
            <div className={otherWorksClasses.description}>California Basic Educational Skills Test</div>
            <div className={otherWorksClasses.date}>Earned August 2019</div>

            <div className="clear-both h-2"/>

            <h6 className={otherWorksClasses.title}>NREMT Certification</h6>
            <div className={otherWorksClasses.description}>National Registry of emergency Medical Technicians</div>
            <div className={otherWorksClasses.date}>Earned January 2017</div>

            <div className="clear-both h-2"/>

            <h6 className={otherWorksClasses.title}>Adobe Photoshop CS6 Certification</h6>
            <div className={otherWorksClasses.description}>Cypress High School</div>
            <div className={otherWorksClasses.date}>Earned April 2015</div>

            <div className="clear-both h-2"/>

            <h6 className={otherWorksClasses.title}>Eagle Scout</h6>
            <div className={otherWorksClasses.description}>Boy Scout Troop 578 - Anaheim, CA</div>
            <div className={otherWorksClasses.date}>Earned November 2013</div>

            <div className="clear-both h-8"/>

            <h3 id="other_works_ucla">
                <Link to="/other-works/ucla" className="text-coral">
                    Experience at UCLA
                </Link>
            </h3>
            <div>
                <ul>
                    <li><b>Directed research:</b> Implantable Ear Drug Delivery Device</li>
                    <li><b>InterVarsity Christian Fellowship:</b> Fundraising Coordinator, Sound Team Coordinator</li>
                    <li><b>UCLA Lab School:</b> CalTeach Science Education Intern</li>
                    <li><b>UCLA Ronald Reagan Medical Center:</b> Nursing Volunteer</li>
                    <li><Link to="/other-works/ucla" className="text-coral">More Info</Link></li>
                </ul>
            </div>

            {/* <div className="clear-both h-8"/>

            <h3 id="other_works_photography">
                <Link to="/other-works/photography" className="text-coral">
                    Photography
                </Link>
            </h3>
            <div>
                <ul>
                    <li><Link to="/other-works/photography" className="text-coral">More Info</Link></li>
                </ul>
            </div> */}
        </>
    );
}