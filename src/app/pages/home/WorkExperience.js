import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

import FamiliarThings from './components/FamiliarThings';

const accordionClasses = 'm-0';

export default function WorkExperience(props){
    const [activeTab, setActiveTab] = useState(1);

    const setTabWrapper = useCallback((index) => {
        if(index === activeTab) setActiveTab(-1);
        else setActiveTab(index);
    })

    return (
        <>
            <h1 className="text-center">Work Experience</h1>

            <div className="clear-both h-4"/>

            <div className="text-center">
                I've spent the last three and a half years working at two different learning centers,
                where I was able to use my programming skills to benefit an educational cause.
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
                    <b>MathPlex Tutoring (January 2022-May 2023)</b>
                </AccordionSummary>
                <AccordionDetails>
                    <b className="text-fedBlue">Lead Software Engineer, Manager, Curriculum Developer</b>

                    <br/>
                    <br/>

                    <div>
                        I joined the startup MathPlex Tutoring shortly after their launch, and began working on
                        admin and member portals to help the company manage internal communications, store
                        and stream files, schedule student appointments, and generate progress reports. I also
                        worked on an adaptive online testing system to help improve the accuracy of student assessments.
                    </div>

                    <br/>

                    <div>
                        My primary role at MathPlex was as the lear software engineer,
                        but I also spent some time each week managing the center's operations
                        and working with students. In the early days of MathPlex, I also contributed towards
                        the curriculum development process.
                    </div>

                    <br/>

                    <div>
                        You can read more about my work with MathPlex&nbsp;
                        <Link to="/work-experience/mathplex-tutoring" className="text-coral">here</Link>.
                    </div>
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
                    <b>Mathnasium of Garden Grove (January 2020-December 2021)</b>
                </AccordionSummary>
                <AccordionDetails>
                    <b className="text-fedBlue">Software Engineer</b>

                    <br/>
                    <br/>

                    <div>
                        I was hired at Mathnasium in January of 2020 to create an admin portal. The goal was
                        to produce something that could replicate the company's corporate management software,
                        but could be better tailored to our specific needs.
                    </div>

                    <br/>

                    <div>
                        At Mathnasium, students could drop by whenever they wanted. This lead to lots of students
                        being in the center at once during busy hours. At the onset of the COVID-19 pandemic, it
                        was clear that this model would no longer work. The admin portal expanded into a member
                        portal that allowed our customers to schedule their appointments in advance. This
                        allowed us to control the maximum number of students in the center
                        at any given time.
                    </div>

                    <br/>

                    <div>
                        Over the course of the next two years, the admin and member portals continued expanding,
                        and more and more features were added.
                    </div>

                    <br/>

                    <div>
                        You can read more about my work with Mathnasium&nbsp;
                        <Link to="/work-experience/mathnasium" className="text-coral">here</Link>.
                    </div>
                </AccordionDetails>
            </Accordion>

            <br/>
            <hr/>
            <br/>

            <FamiliarThings/>
        </>
    );
}