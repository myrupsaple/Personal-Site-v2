import React from 'react';
import { Link } from 'react-router-dom';

import { softwareProjectClasses } from '../../components/classes';

export default function SoftwareProjects(props){
    return (
        <div className="page-box-wide">
            <div className="card">
                <Link className="flex text-coral" to="/">
                    &lt; Home
                </Link>
                
                <h1
                    id="software-projects"
                    className="text-center"
                >
                    Software Projects
                </h1>
                <div className="clear-both h-4"/>

                <h4 id="software_projects_finance_tracker">
                    {/* <Link to="/software-projects/finance-tracker" className="text-coral"> */}
                        Finance Tracker
                    {/* </Link> */}
                </h4>
                <h6 className={softwareProjectClasses.utilized}><u>Utilized</u>: Windows Forms, .NET, C#, and SQL.</h6>
                <div className={softwareProjectClasses.content}>
                    <ul>
                        <li>Developed a Windows desktop app using Windows Forms and .NET that allows users to track spending habits.</li>
                        <li>Connected the app to a SQL Server database allowing users to log in and store transactions persistently.</li>
                        {/* <li><Link to="/software-projects/finance-tracker" className="text-coral">More Info</Link></li> */}
                    </ul>
                </div>

                <div className="clear-both h-8"/>

                <h4 id="software_projects_hunger_games">
                    <Link to="/software-projects/hunger-games" className="text-coral">
                        Hunger Games App
                    </Link>
                </h4>
                <h6 className={softwareProjectClasses.utilized}><u>Utilized</u>: ReactJS, MySQL, NodeJS, Axios, Express, and AWS.</h6>
                <div className={softwareProjectClasses.content}>
                    <ul>
                        <li>Developed a web app to assist with the annual Hunger Games fundraiser hosted by InterVarsity Christian Fellowship at UCLA.</li>
                        <li>Implemented persistent storage using Redux and a MySQL database hosted on an AWS server.</li>
                        <li>Created a web application to keep track of various parameters needed to play the game, enhancing participants’ overall experience.</li>
                        <li>Cached images from the server to reduce loading times on certain pages.</li>
                        <li>Established a websocket connection that allowed the app to automatically refresh as game events were updated.</li>
                        <li><Link to="/software-projects/hunger-games" className="text-coral">More Info</Link></li>

                    </ul>
                </div>

                <div className="clear-both h-8"/>

                <h4 id="software_projects_word_predictor">
                    <Link to="/software-projects/word-predictor" className="text-coral">
                        Word Predictor
                    </Link>
                </h4>
                <h6 className={softwareProjectClasses.utilized}><u>Utilized</u>: R, machine learning, and data science.</h6>
                <div className={softwareProjectClasses.content}>
                    <ul>
                        <li>Completed as a capstone project for the St. Johns Hopkins online Data Science specialization course.</li>
                        <li>Utilized knowledge of machine learning and data science to create an app that suggested next words for a user to type, similar to the options that appear over the iPhone keyboard.</li>
                        <li>Developed different learning models that a user could pick from, with each model producing different suggestions.</li>
                        <li><Link to="/software-projects/word-predictor" className="text-coral">More Info</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}