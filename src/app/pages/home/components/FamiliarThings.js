import React from 'react';

const iconClasses = 'w-16 h-16 mb-2';

export default function FamiliarThings(props){
    return (
        <>
            <h2 className="text-center">
                Things I'm familiar with:
            </h2>

            <div className="clear-both h-8"/>

            <div className="grid grid-cols-1 text-center md:grid-cols-3 items-start">
                <div className="grid justify-items-center">
                    <img
                        src="https://i.imgur.com/iOaPvEU.png"
                        className={iconClasses}
                        alt="framework"
                    />

                    <h4 className="bold">Frameworks/Libraries</h4>
                    
                    <div>React.js</div>
                    <div>Node.js</div>
                    <div>.NET</div>
                    <div>Tailwind CSS</div>
                    <div>Bootstrap</div>
                    <div>Material UI</div>
                </div>

                <br className="md:hidden"/>

                <div className="grid justify-items-center">
                    <img
                        src="https://i.imgur.com/aylsvmF.png"
                        className={iconClasses}
                        alt="framework"
                    />

                    <h4 className="bold">Languages</h4>

                    <div>Javascript</div>
                    <div>C#</div>
                    <div>C++</div>
                    <div>R</div>
                    <div>MATLAB</div>
                </div>

                <br className="md:hidden"/>

                <div className="grid justify-items-center">
                    <img
                        src="https://i.imgur.com/9ihCEqP.png"
                        className={iconClasses}
                        alt="framework"
                    />

                    <h4 className="bold">Other Tools</h4>

                    <div>AWS</div>
                    <div>Visual Studio</div>
                    <div>Visual Studio Code</div>
                    <div>HTML</div>
                    <div>CSS</div>
                    <div>JQuery</div>
                </div>
            </div>
        </>
    );
}