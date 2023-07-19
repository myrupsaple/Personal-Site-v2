import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

const accordionClasses = 'm-0';

export default function WorkExperience(props){
    const [activeTab, setActiveTab] = useState(-1);

    const setTabWrapper = useCallback((index) => {
        if(index === activeTab) setActiveTab(-1);
        else setActiveTab(index);
    })

    return (
        <>
            <h1 className="text-center">Software Projects</h1>

            <div className="clear-both h-4"/>

            <div className="text-center">
                Some of the things I've built in my free time.
            </div>

            <div className="clear-both h-4"/>

            <Accordion
                expanded={activeTab === 0}
                onClick={() => setTabWrapper(0)}
                className={accordionClasses}
            >
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                >
                    <b>Finance Desktop App (.NET, Windows Forms)</b>
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        This project is still a work in progress. I started this project as a way for me to
                        get familiar with the .NET library.
                    </div>

                    <br/>

                    <div>
                        The page for this project does not yet exist.
                    </div>

                    {/* <div>
                        You can read more about this project&nbsp;
                        <Link to="/software-projects/finance-app" className="text-coral">here</Link>.
                    </div> */}
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={activeTab === 1}
                onClick={() => setTabWrapper(1)}
                className={accordionClasses}
            >
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                >
                    <b>Hunger Games Fundraising App (React)</b>
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        At UCLA, InterVarsity Bruin Christian Fellowship hosts an annual fundraiser for scholarships
                        to their summer conference. I helped plan the event my freshman year, and led
                        the planning team the following three years.
                    </div>

                    <br/>

                    <div>
                        We used a bunch of spreadsheets to track fundraising totals and other variables during
                        the event. This quickly got complicated, and it was clear that spreadsheets alone
                        weren't enough to accomplish what we wanted to do. I created an app using React in
                        order to support the event's operations.
                    </div>

                    <br/>

                    <div>
                        You can read more about this project&nbsp;
                        <Link to="/software-projects/hunger-games" className="text-coral">here</Link>.
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={activeTab === 2}
                onClick={() => setTabWrapper(2)}
                className={accordionClasses}
            >
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                >
                    <b>Machine Learning Word Predictor (R, Shiny Apps)</b>
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        Before landing my first programming job, there was a period where I was interested in
                        pursuing data science and machine learning. I created this app as the capstone project for
                        the Johns Hopkins University Data Science Specialization course.
                    </div>

                    <br/>

                    <div>
                        This project was a test in everything I learned during the course, including implementing
                        a machine learning algorithm and using recursive programming to parse large datasets.
                    </div>

                    <br/>

                    <div>
                        You can read more about this project&nbsp;
                        <Link to="/software-projects/word-predictor" className="text-coral">here</Link>.
                    </div>
                </AccordionDetails>
            </Accordion>
        </>
    );
}