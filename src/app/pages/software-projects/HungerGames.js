import React from 'react';
import { Link } from 'react-router-dom';

export default function HungerGames(props){
    return (
        <div className="page-box">
            <Link className="flex text-mpLRed-1" to="/">
                Back
            </Link>

            <br/>

            <h2>"Hunger Games" Companion App</h2>

            <br/>

            <div>
                At UCLA, I was a part of the planning team for our annual "Hunger Games" fundraiser all four years,
                and served as the team leader my last three years with the organization. The fundraiser was a
                real-life, battle royale-type survival game, where contestants could raise money before and during
                the competition in order to give them various advantages. Funds raised from this event went
                towards scholarships for our week-long conference at the end of the year.
            </div>

            <br/>

            <div>
                Originally, many of the calculations needed to run the games were done by hand on a minimalistic
                spreadsheet. In our third and fourth year, I designed a more complex spreadsheet that helped to
                automate a lot of these calculations.
            </div>

            <br/>

            <div className="flex flex-row gap-x-4 justify-center">
                <div>
                    <img src="https://i.imgur.com/cUvjMZD.png" className="max-w-xl" alt="spreadsheet-1a"/>
                </div>
                <div>
                    <img src="https://i.imgur.com/KGkW5vR.png" className="max-w-xl" alt="spreadsheet-1b"/>
                </div>
            </div>

            <br/>

            <div>
                Although these spreadsheets got the job done, there were certain limitations that we began running
                into. As more features were added to the sheet, it became more and more complicated (as seen
                in the pictures above). This made it difficult to navigate. Furthermore, there were some
                features we wanted to add, but couldn't implement with spreadsheets alone.
            </div>

            <br/>

            <div>
                To address these limitations and to get some hands-on experience with web development, I created
                a web app that was able to perform the same calculations as the spreadsheet, and also had
                the extra features that we were previously missing.
            </div>

            <br/>

            <div className="flex flex-row gap-x-4 justify-center">
                <div>
                    <img src="https://i.imgur.com/s0zc19e.png" className="max-w-xl" alt="web-app-1a"/>
                </div>
                <div>
                    <img src="https://i.imgur.com/RrByCJI.png" className="max-w-[15rem]" alt="web-app-1b"/>
                </div>
            </div>

            <br/>

            <div>
                The web app incldued forms that provided better validation and made it easier to
                modify values than with the spreadsheet.
            </div>
        </div>
    );
}