import React from 'react';

export default function ScrollBar(props){
    const { show, scrollPosition, scrollNavTrigger, windowHeight } = props;

    const documentHeight = document.documentElement.scrollHeight;

    let scrollPercentage = scrollPosition / (documentHeight - windowHeight);
    console.log(scrollPercentage, scrollPosition, documentHeight, windowHeight)
    scrollPercentage = `${scrollPercentage * 100}%`;

    const scrollOffset = (
        (scrollPosition > scrollNavTrigger ?
            document?.getElementById('navbar-main')?.offsetHeight
        :
            0
        ) || 0
    );
    const scrollClasses = scrollOffset ? `top-[${scrollOffset}px]` : 'top-0';
    
    if(!show) return null;
    return (
        <div className={`bg-coral h-1 sticky ${scrollClasses} transition-[top] duration-300`} style={{ width: scrollPercentage }}/>
    );
}