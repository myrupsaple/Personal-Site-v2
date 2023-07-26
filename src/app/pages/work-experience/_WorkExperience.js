import React from 'react';
import { Link } from 'react-router-dom';

import { workExperienceClasses } from '../../components/classes';

export default function WorkExperience(props){
    return (
        <div className="page-box-wide">
            <div className="card">
                <Link className="flex text-coral" to="/">
                    &lt; Home
                </Link>

                <br/>

                <h1
                    id="work_experience"
                    className="text-center"
                >
                    Work Experience
                </h1>
                <div className="clear-both h-4"/>

                <h4 id="work_mathplex">
                    <Link to="/work-experience/mathplex-tutoring" className="text-coral">
                        MathPlex Tutoring
                    </Link> (January 2022-May 2023)
                </h4>

                <h6 className={workExperienceClasses.position}>Lead Software Engineer, Manager</h6>
                <div className={workExperienceClasses.content}>
                    <ul>
                        <li><b>This position was performed under the same ownership as Mathnasium of Garden Grove.</b></li>
                        <li>Improved student reassessment scores by 5% on average by implementing an adaptive online testing system.</li>
                        <li>Cut administrative overhead and improved parent communication by continuously analyzing user needs and implementing time-saving features.</li>
                        <li>Reduced file loading times by over 80% by establishing a server-side file storage and streaming system, and integrating this with the Cloudinary API to stream graphic files.</li>
                        <li><u>Applied knowledge</u> in ReactJS, Material UI, MySQL, NodeJS, Express, Jest (unit testing), RESTful API design, and AWS.</li>
                        <li><Link to="/work-experience/mathplex-tutoring" className="text-coral">More Info</Link></li>
                    </ul>
                </div>

                <div className="clear-both h-8"/>

                <h4 id="work_mathnasium">
                    <Link to="/work-experience/mathnasium" className="text-coral">
                        Mathnasium of Garden Grove
                    </Link> (January 2020-December 2021)
                </h4>
                <h6 className={workExperienceClasses.position}>Software Engineer</h6>
                <div className={workExperienceClasses.content}>
                    <ul>
                        <li>Developed admin and member web portals from the ground up to manage and schedule appointments at the onset of the COVID-19 pandemic.</li>
                        <li>Decreased instructor administrative work hours by over 15% by streamlining notetaking and internal communication protocols.</li>
                        <li>Increased customer satisfaction by implementing a SMS system using Twilio’s API, allowing parents to perform many basic functions without needing to log in to the web portal.</li>
                        <li><u>Applied knowledge</u> in full-stack development: ReactJS, Bootstrap, MySQL, NodeJS, Express, RESTful API design, AWS.</li>
                        <li><Link to="/work-experience/mathnasium" className="text-coral">More Info</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}