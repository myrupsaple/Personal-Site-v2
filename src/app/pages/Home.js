import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { homeClasses } from '../components/classes';

export default function Home(props){
    const mounted = useRef(false);
    useEffect(() => {
        mounted.current = true;
        return () => (mounted.current = false);
    });

    return (
        <div className="page-box">
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

                <h5>University of California, Los Angeles</h5>
                <h5>Bioengineering, B.S. Class of 2019</h5>
                <h5>Technical Breadth: Computer Science</h5>
                <h5>
                    <a
                        className="text-mpLRed-1"
                    >
                        riley@thematsudas.com
                    </a>
                    &nbsp;|&nbsp;
                    <a
                        href="https://www.linkedin.com/in/riley-matsuda/"
                        target="_blank"
                        className="text-mpLRed-1"
                    >
                        linkedin.com/in/riley-matsuda
                    </a>
                </h5>
            </div>

            <div className="clear-both h-8"/>
            <hr/>
            <div className="clear-both h-8"/>

            {/* <div className="text-xs">Thanks for visiting! Things look best if viewing on desktop.</div> */}

            <h1 className="text-center">
                About Me
            </h1>
            <div className="clear-both h-4"/>
            <div>
                
            </div>

            <br/>

            <div>
                I am a full-stack web developer who is passionate about <b>programming</b> and <b>education</b>.
                I enjoy <b>learning new things</b> and <b>finding ways to innovate and improve existing processes</b>.
                For the past three and a half years, I have been fortunate enough to work at learning centers
                that allowed me to pursue both programming and education simultaneously. I recently decided
                that it was time to move on in my career, and am <b>currently seeking employment</b>.
            </div>

            <div className="clear-both h-8"/>

            <hr/>

            <div className="clear-both h-8"/>

            <h1
                id="work_experience"
                className="text-center"
            >
                Work Experience
            </h1>
            <div className="clear-both h-4"/>

            <h4 id="work_mathplex">
                <Link to="/work-experience/mathplex-tutoring" className="text-mpLRed-1">
                    MathPlex Tutoring
                </Link> (January 2022-May 2023)
            </h4>

            <h6 className={homeClasses.workExperience.position}>Lead Software Engineer, Manager</h6>
            <div className={homeClasses.workExperience.content}>
                <ul>
                    <li>Designed an adaptive online testing system allowing for personalized student assessments, leading to improved student progress.</li>
                    <li>Implemented customized PDF progress reports for students that could quickly be viewed by instructors or shared with parents.</li>
                    <li>Established a server-side file system to store curriculum and graphic files, and integrated this with the Cloudinary API.</li>
                    <li>Collected feedback and added new features in order to reduce administrative overhead and improve communication with parents.</li>
                    <li><u>Applied knowledge</u> in ReactJS, Material UI, MySQL, NodeJS, Express, Jest (unit testing), RESTful design, and AWS.</li>
                    <li><Link to="/work-experience/mathplex-tutoring" className="text-mpLRed-1">More Info</Link></li>
                </ul>
            </div>

            <div className="clear-both h-8"/>

            <h4 id="work_mathnasium">
                <Link to="/work-experience/mathnasium" className="text-mpLRed-1">
                    Mathnasium of Garden Grove
                </Link> (January 2020-December 2021)
            </h4>
            <h6 className={homeClasses.workExperience.position}>Software Engineer</h6>
            <div className={homeClasses.workExperience.content}>
                <ul>
                    <li>Developed admin and member web portals from the ground up to manage and schedule appointments at the onset of the COVID-19 pandemic.</li>
                    <li>Engineered a RESTful server backend using Express and JSON Web Tokens, ensuring fast and secure access to application data.</li>
                    <li>Reduced parent complaints and management overhead by setting up reminder texts for appointments and by providing parents with online access to students’ session notes and progress reports.</li>
                    <li>Implemented new features in order to improve internal communication and promote a data-driven approach to teaching.</li>
                    <li><u>Applied knowledge</u> in full-stack development including ReactJS, Bootstrap, MySQL, NodeJS, Express, RESTful design, AWS.</li>
                    <li><Link to="/work-experience/mathnasium" className="text-mpLRed-1">More Info</Link></li>
                </ul>
            </div>

            <div className="clear-both h-8"/>

            <hr/>

            <div className="clear-both h-8"/>

            <h1
                id="software-projects"
                className="text-center"
            >
                Software Projects
            </h1>
            <div className="clear-both h-4"/>

            <h4 id="software_projects_finance_tracker">
                <Link to="/software-projects/finance-tracker" className="text-mpLRed-1">
                    Finance Tracker
                </Link>
            </h4>
            <h6 className={homeClasses.softwareProjects.utilized}><a>Utilized</a>: Windows Forms, .NET, C#, and SQL.</h6>
            <div className={homeClasses.softwareProjects.content}>
                <ul>
                    <li>Developed a Windows desktop app using Windows Forms and .NET that allows users to track spending habits.</li>
                    <li>Connected the app to a SQL Server database allowing users to log in and store transactions persistently.</li>
                    <li><Link to="/software-projects/finance-tracker" className="text-mpLRed-1">More Info</Link></li>
                </ul>
            </div>

            <div className="clear-both h-8"/>

            <h4 id="software_projects_hunger_games">
                <Link to="/software-projects/hunger-games" className="text-mpLRed-1">
                    Hunger Games App
                </Link>
            </h4>
            <h6 className={homeClasses.softwareProjects.utilized}><a>Utilized</a>: ReactJS, MySQL, NodeJS, Axios, Express, and AWS.</h6>
            <div className={homeClasses.softwareProjects.content}>
                <ul>
                    <li>Developed a web app to assist with the annual Hunger Games fundraiser hosted by InterVarsity Christian Fellowship at UCLA.</li>
                    <li>Implemented persistent storage using Redux and a MySQL database hosted on an AWS server.</li>
                    <li>Created a web application to keep track of various parameters needed to play the game, enhancing participants’ overall experience.</li>
                    <li>Cached images from the server to reduce loading times on certain pages.</li>
                    <li>Established a websocket connection that allowed the app to automatically refresh as game events were updated.</li>
                    <li><Link to="/software-projects/hunger-games" className="text-mpLRed-1">More Info</Link></li>

                </ul>
            </div>

            <div className="clear-both h-8"/>

            <h4 id="software_projects_word_predictor">
                <Link to="/software-projects/word-predictor" className="text-mpLRed-1">
                    Word Predictor
                </Link>
            </h4>
            <h6 className={homeClasses.softwareProjects.utilized}><a>Utilized</a>: R, machine learning, and data science.</h6>
            <div className={homeClasses.softwareProjects.content}>
                <ul>
                    <li>Completed as a capstone project for the St. Johns Hopkins online Data Science specialization course.</li>
                    <li>Utilized knowledge of machine learning and data science to create an app that suggested next words for a user to type, similar to the options that appear over the iPhone keyboard.</li>
                    <li>Developed different learning models that a user could pick from, with each model producing different suggestions.</li>
                    <li><Link to="/software-projects/word-predictor" className="text-mpLRed-1">More Info</Link></li>
                </ul>
            </div>

            <div className="clear-both h-8"/>

            <hr/>

            <div className="clear-both h-8"/>

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
            
            <h6 className={homeClasses.otherWorks.title}>CBEST Certification</h6>
            <div className={homeClasses.otherWorks.description}>California Basic Educational Skills Test</div>
            <div className={homeClasses.otherWorks.date}>Earned August 2019</div>

            <div className="clear-both h-2"/>

            <h6 className={homeClasses.otherWorks.title}>NREMT Certification</h6>
            <div className={homeClasses.otherWorks.description}>National Registry of emergency Medical Technicians</div>
            <div className={homeClasses.otherWorks.date}>Earned January 2017</div>

            <div className="clear-both h-2"/>

            <h6 className={homeClasses.otherWorks.title}>Adobe Photoshop CS6 Certification</h6>
            <div className={homeClasses.otherWorks.description}>Cypress High School</div>
            <div className={homeClasses.otherWorks.date}>Earned April 2015</div>

            <div className="clear-both h-2"/>

            <h6 className={homeClasses.otherWorks.title}>Eagle Scout</h6>
            <div className={homeClasses.otherWorks.description}>Boy Scout Troop 578 - Anaheim, CA</div>
            <div className={homeClasses.otherWorks.date}>Earned November 2013</div>

            <div className="clear-both h-8"/>

            <h3 id="other_works_ucla">
                <Link to="/other-works/ucla" className="text-mpLRed-1">
                    Experience at UCLA
                </Link>
            </h3>
            <div>
                <ul>
                    <li><b>Directed research:</b> Implantable Ear Drug Delivery Device</li>
                    <li><b>InterVarsity Christian Fellowship:</b> Fundraising Coordinator, Sound Team Coordinator</li>
                    <li><b>UCLA Lab School:</b> CalTeach Science Education Intern</li>
                    <li><b>UCLA Ronald Reagan Medical Center:</b> Nursing Volunteer</li>
                    <li><Link to="/other-works/ucla" className="text-mpLRed-1">More Info</Link></li>
                </ul>
            </div>

            <div className="clear-both h-8"/>

            <h3 id="other_works_photography">
                <Link to="/other-works/photography" className="text-mpLRed-1">
                    Photography
                </Link>
            </h3>
            <div>
                <ul>
                    <li><Link to="/other-works/photography" className="text-mpLRed-1">More Info</Link></li>
                </ul>
            </div>
        </div>
    );
}