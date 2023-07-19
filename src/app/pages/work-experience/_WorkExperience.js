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
                        <li>Designed an adaptive online testing system allowing for personalized student assessments, leading to improved student progress.</li>
                        <li>Implemented customized PDF progress reports for students that could quickly be viewed by instructors or shared with parents.</li>
                        <li>Established a server-side file system to store curriculum and graphic files, and integrated this with the Cloudinary API.</li>
                        <li>Collected feedback and added new features in order to reduce administrative overhead and improve communication with parents.</li>
                        <li><u>Applied knowledge</u> in ReactJS, Material UI, MySQL, NodeJS, Express, Jest (unit testing), RESTful design, and AWS.</li>
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
                        <li>Engineered a RESTful server backend using Express and JSON Web Tokens, ensuring fast and secure access to application data.</li>
                        <li>Reduced parent complaints and management overhead by setting up reminder texts for appointments and by providing parents with online access to students’ session notes and progress reports.</li>
                        <li>Implemented new features in order to improve internal communication and promote a data-driven approach to teaching.</li>
                        <li><u>Applied knowledge</u> in full-stack development including ReactJS, Bootstrap, MySQL, NodeJS, Express, RESTful design, AWS.</li>
                        <li><Link to="/work-experience/mathnasium" className="text-coral">More Info</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}