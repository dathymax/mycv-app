import './RightColumn.css';
import React from 'react';
import WorkExp from './WorkExp/WorkExp';
import Education from './Education/Education';
import '../css/grid.css';

const RightColumn = () => {
    return (
        <>
            <div className="right-column">
                <WorkExp/>
                <Education/>
            </div>
        </>
    )
}

export default RightColumn;