import React from 'react';

import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

export default function WorkExperience(props){
    return (
        <div className="page-box bg-mpLYellow-5">
            <h1>Work Experience</h1>

            <br/>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                >
                    Web Development
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        I have three and a half years of professional experience developing web applications.
                    </div>    
                </AccordionDetails>
            </Accordion>
        </div>
    );
}