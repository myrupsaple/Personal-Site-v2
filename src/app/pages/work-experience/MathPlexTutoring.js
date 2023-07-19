import React from 'react';
import { Link } from 'react-router-dom';

const mathnasiumLink = <a className="text-mpLRed-1" href="/work-experience/mathnasium">Mathnasium</a>;

export default function MathPlexTutoring(props){
    return (
        <div className="page-box">
            <Link className="flex text-mpLRed-1" to="/">
                Home
            </Link>

            <br/>

            <h2>MathPlex Tutoring</h2>
            <h5>Lead Software Engineer, Manager, Curriculum Developer, January 2022-May 2023</h5>
            <h5>Irvine, CA</h5>

            <br/>

            <br/>

            <div>
                Near the end of 2021, the management team at {mathnasiumLink}&nbsp;
                began talking about starting a new tutoring center in Irvine. The new center would focus on math and
                English. We began working on curriculum towards the end of the year, and began a lease in January of 2022.
            </div>

            <br/>

            <div>
                My primary role at MathPlex was as the lead software engineer in charge of creating admin and member
                portals for both our math (MathPlex) and English (ReadingPlex) centers. The math portals built off of
                the admin and member portals that were created for {mathnasiumLink},
                but required significantly more functionality.
            </div>

            <br/>

            <div>
                Because of our custom built curriculum, we needed a way to store and retrieve PDFs and image files.
                We also needed to be able to compile PDF reports to send home to parents, and had to come up
                with an online adaptive assessment system. This led to the creation of an entire curriculum
                management system on the admin portal.
            </div>

            <br/>

            <div className="flex flex-row gap-x-4 justify-center">
                <div>
                    <img src="https://i.imgur.com/Kjffnuf.png" className="max-w-xl" alt="admin-1a"/>
                </div>
                <div>
                    <img src="https://i.imgur.com/kCfI7AI.png" className="max-w-xl" alt="admin-1b"/>
                </div>
            </div>

            <br/>

            <div>
                Files were stored on our server and downloaded directly using the NodeJS 'fs' library.
            </div>

            <br/>
            
            <div className="flex flex-row gap-x-4 justify-center">
                <div>
                    <img src="https://imgur.com/liwyBep.png" className="max-w-[12rem]" alt="admin-2a"/>
                </div>
                <div>
                    <img src="https://i.imgur.com/aWbbUVE.png" className="max-w-[10rem]" alt="admin-2a"/>
                </div>
            </div>

            <br/>

            <div>
                Functionality for PDF report generation was added later at the request of parents who wanted
                more detailed updates on their students' progress.
            </div>

            <br/>

            <div className="flex flex-row gap-x-4 justify-center">
                <div>
                    <img src="https://i.imgur.com/ZxHB6nJ.png" className="max-w-xl" alt="admin-3"/>
                </div>
            </div>

            <br/>

            <div>
                The creation of the ReadingPlex admin and member portals was requested after the MathPlex portals
                had already mostly been established. This provided some design challenges, as user accounts needed to be
                shared between the different centers, while most of the other data would remain separate.
                The database needed to be redesigned to account for this.
            </div>

            <br/>

            <div>
                Although the portals use the same frontend design principles, their functionalies were designed with
                the needs of each of the centers in mind.
            </div>

            <br/>

            <div className="flex flex-row gap-x-4 justify-center">
                <div>
                    <img src="https://i.imgur.com/hYv6acZ.png" className="max-w-xl" alt="admin-2a"/>
                </div>
                <div>
                    <img src="https://i.imgur.com/hMDif7O.png" className="max-w-xl" alt="admin-2a"/>
                </div>
            </div>

            {/* <br/>

            <div>
                In addition to leading the development of our web applications, I was also tasked with
                creating curriculum and managing the center 
            </div> */}
        </div>
    );
}