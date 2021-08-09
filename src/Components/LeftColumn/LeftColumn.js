import './LeftColumn.css';
import React from 'react';
import Image from './Image/Image';
import Info from './Info/Info';
import '../css/grid.css';

const LeftColumn = () => {
    return (
        <div className="left-column">
            <Image/>
            <Info />
        </div>
    )
}

export default LeftColumn;