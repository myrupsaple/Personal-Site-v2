import React from 'react';
import { Link } from 'react-router-dom';

import { imgClasses } from '../../components/classes';

export default function Mathnasium(props){
    return (
        <div className="page-box">
            <Link className="flex text-coral" to="/work-experience">
                &lt; Work Experience
            </Link>

            <br/>

            <h2>Mathnasium of Garden Grove</h2>
            <h5>Software Engineer, January 2020-December 2021</h5>
            <h5>Garden Grove, CA</h5>

            <br/>

            <div>
                I began working at the Mathnasium of Garden Grove as a part time instructor in the summer of 2017.
                I returned at the start of 2020 after graduating from UCLA, and was tasked with creaing an online scheduling
                system for our students' appointments when the COVID-19 pandemic began to gain attention. This scheduling
                system was intended to allow us to limit the number of students in the center at any given time.
                Before COVID, students were able to drop in for sessions any time during opening hours.
            </div>

            <br/>

            <div>
                The scheduling software eventually turned into admin and member portals that made it easier to manage
                day-to-day operations, such as tracking student progress and tracking tuition payments.
            </div>

            <br/>

            <div>
                Admin Portal:
            </div>

            <br/>

            <div className={imgClasses.imgBox}>
                <div>
                    <img src="https://i.imgur.com/hbqWjwH.png" className={imgClasses.imgDuo} alt="admin-1a"/>
                </div>
                <div>
                    <img src="https://i.imgur.com/L7qwa0O.png" className={imgClasses.imgDuo} alt="admin-1b"/>
                </div>
            </div>

            <br/>

            <div>Member Portal:</div>

            <br/>

            <div className={imgClasses.imgBox}>
                <div>
                    <img src="https://i.imgur.com/f8vNcIS.png" className={imgClasses.imgDuo} alt="member-1a"/>
                </div>
                <div>
                    <img src="https://i.imgur.com/bxNR0Pg.png" className={imgClasses.imgDuo} alt="member-1b"/>
                </div>
            </div>

            <br/>

            <div>
                We eventually decided that we wanted to implement a data-driven approach to teaching, and began adding
                featuers that made it easier for instructors to communicate with one another across sessions.
                This allowed us to provide higher quality sessions for our students.
            </div>

            <br/>

            <div className={imgClasses.imgBox}>
                <div>
                    <img src="https://i.imgur.com/4pZdebv.png" className={imgClasses.imgDuo} alt="admin-2a"/>
                </div>
                <div>
                    <img src="https://i.imgur.com/g6T6Moq.png" className={imgClasses.imgDuo} alt="admin-2b"/>
                </div>
            </div>

            <br/>

            <div>
                A websocket was added to establish a persistent connection between the client and server, allowing
                the server to push new data to users without them needing to refresh the page or click a button.
                This helped keep data up-to-date on the admin portal, which is important since data is being
                updated regularly throughout the day by multiple instructors. The socket also allowed us to view
                a list of users who were currently online.
            </div>

            <br/>

            <div className={imgClasses.imgBox}>
                <div>
                    <img src="https://i.imgur.com/B5q0c7R.png" className={imgClasses.imgSingle} alt="admin-3a"/>
                </div>
            </div>

            <br/>

            <div>
                Support for these admin and member portals was suspended in early 2022 after the software was
                determined to be stable.
            </div>
        </div>
    );
}