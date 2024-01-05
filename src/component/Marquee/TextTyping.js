import React from 'react';
import './TextTyping.css'; // Import file CSS

const TextTyping = () => {
    return (
        <div className="wrapper">
            <div className="static-txt">I'm a</div>
            <ul className="dynamic-txt">
                <li><span>Web Designer</span></li>
                <li><span>Front-End Dev</span></li>
                <li><span>Back-End Dev</span></li>
                <li><span>Youtuber</span></li>
            </ul>
        </div>
    );
}

export default TextTyping;
