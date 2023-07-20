import React from 'react';
import { Link } from 'react-router-dom';
import { imgClasses } from '../../components/classes';

export default function WordPredictor(props){
    return (
        <div className="page-box">
            <Link className="flex text-coral" to="/software-projects">
                &lt; Software Projects
            </Link>

            <br/>

            <h2>Word Predictor</h2>

            <br/>

            <div>
                This project was completed as a capstone project for the Johns Hopkins University's Data
                Science Specialization. It was the cumulation of a 3-month long course that covered various
                introductory topics in data science, including the use of the R programming language.
                Creating this app was an exercise in my knowledge of data science, recursive programming,
                and text processing.
            </div>

            <br/>

            <div>
                A report explaining all of the reasoning and logic that went into this project can be found
                on &nbsp;<a className="text-coral" href="https://rpubs.com/myrupsaple/DSCFullReport" target="_blank">RPubs</a>&nbsp;.
            </div>

            <br/>

            <div>
                You can see the app in action on
                &nbsp;<a className="text-coral" href="https://myrupsaple.shinyapps.io/WordPredictor/" target="_blank">Shiny Apps</a>&nbsp;.
                Note that you will need to wait for the app to load. If there are no buttons underneath "suggestions",
                then the app has not finished loading. Once loaded, it should look something like this:
            </div>

            <br/>

            <div className={imgClasses.imgBox}>
                <div>
                    <img src="https://i.imgur.com/yjC53aI.png" className={"max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl"} alt="spreadsheet-1a"/>
                </div>
            </div>
        </div>
    );
}