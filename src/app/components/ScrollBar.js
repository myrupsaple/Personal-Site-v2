import React from 'react';

export default function ScrollBar(props){
    const { show, scrollPosition, windowHeight, documentHeight } = props;

    let scrollPercentage = scrollPosition / (documentHeight - windowHeight);
    scrollPercentage = `${scrollPercentage * 100}%`;
    
    if(!show) return null;
    return (
        <div className="bg-teal h-1 sticky top-0" style={{ width: scrollPercentage }}/>
    );
}