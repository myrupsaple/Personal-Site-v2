import React from 'react';
import { Link } from 'react-router-dom';

import { uclaClasses } from '../../components/classes';

export default function Ucla(props){
    return (
        <div className="page-box bg-mpLYellow-5">
            <Link className="flex text-mpLRed-1" to="/">
                Back
            </Link>

            <br/>

            <h2>Experience at UCLA</h2>

            <br/>

            <div>
                <h4 className={uclaClasses.title}>Directed Research</h4>
                <h6 className={uclaClasses.date}>September 2018 - August 2019</h6>
                <h6 className={uclaClasses.subtitle}>Hoffman Lab, David Geffen School of Medicine, UCLA</h6>
                <h6 className={uclaClasses.subtitle}>Implantable Inner Ear Drug Delivery Device</h6>
                <ul>
                    <li>Worked with a team of five other undergraduate bioengineers to develop a long-term device capable of delivering drugs to the inner ear.</li>
                    <li>This bioengineering capstone project aimed to tackle the issue of hearing loss which is a common side effect of platinum-based chemotherapeutics.</li>
                    <li>Received the runner-up award for best presentation at the annual UCLA Bioengineering Symposium.</li>
                    <li>
                        Continued research for two quarters beyond the symposium, eventually culminating in a publication in the American Academy of Otolaryngology
                        (<a className="text-mpLRed-1" href="https://journals.sagepub.com/doi/abs/10.1177/0194599820930229" target="_blank">Link</a>).
                    </li>
                </ul>
            </div>

            <br/>

            <div>
                <h4 className={uclaClasses.title}>InterVarsity Christian Fellowship</h4>
                <h6 className={uclaClasses.date}>Spring 2016, 2017, 2018, & 2019</h6>
                <h6 className={uclaClasses.subtitle}>Planning Team (2016), Project Coordinator (2017-2019)</h6>
                <h6 className={uclaClasses.subtitle}><a href="https://ivhg20181.wixsite.com/ivhungergames" target="_blank">2018 Website</a></h6>
                <ul>
                    <li>In 2016, worked with three other students to organize a scholarship fundraiser involving over 50 participants and bringing in over $5,000.</li>
                    <li>Served as the team leader the following three years, expanding the planning team, revising the event as necessary, and increasing income to over
                        $10,000 per year.</li>
                    <li>Engineered spreadsheets to automate various tasks throughout the event, helping to reduce both human errors and overall workload.</li>
                </ul>

                <br/>

                <h6 className={uclaClasses.date}>Fall 2016 - Spring 2019</h6>
                <h6 className={uclaClasses.subtitle}>Sound Team Coordinator</h6>
                <ul>
                    <li>Set up audio/visual equipment and ran the soundboard at InterVarsity's weekly large group gatherings and other group events.</li>
                    <li>Trained new team members on proper care and use of the AV equipment.</li>
                </ul>
            </div>

            <br/>

            <div>
                <h4 className={uclaClasses.title}>UCLA Lab School</h4>
                <h6 className={uclaClasses.date}>Spring 2018</h6>
                <h6 className={uclaClasses.subtitle}>CalTeach Science Education Intern</h6>
                <ul>
                    <li>Spent one day each week at the UCLA Lab School observing and assisting a 5th grade mentor teacher with the class's science lessons.</li>
                    <li>Developed a lesson about the earth's seasons and taught it to the 5th grade students on the last day of the internship.</li>
                </ul>
            </div>

            <br/>

            <div>
                <h4 className={uclaClasses.title}>UCLA Ronald Reagan Medical Center</h4>
                <h6 className={uclaClasses.date}>Winter-Spring 2017</h6>
                <h6 className={uclaClasses.subtitle}>Nursing Volunteer</h6>
                <ul>
                    <li>Interacted and communicated with nurses and physicians to help provide care within the cardiothoracic and medical-surgical units.</li>
                    <li>Managed the front desk, transferred calls, received and fulfilled patient requests, and restocked supply carts as needed.</li>
                </ul>
            </div>
        </div>
    );
}