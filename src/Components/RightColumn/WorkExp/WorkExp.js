import './WorkExp.css';
import React from 'react';

const WorkExp = () => {
    return (
        <>
            <div className="workexp">
                <div className="workexp-heading">
                    <i className="fa fa-suitcase fa-fw cv-icon"/>
                    <h2 id="workexp-heading">Work Experience</h2>
                </div>
                <div className="workexp-container">

                    <h5 className="workexp-container-heading">Front End Developer / w3schools.com</h5><br/>
                    <i className="fa fa-calendar fa-fw cv-icon"></i>
                    <span className="workexp-container-date">Jan 2015 - </span>
                    <span className="workexp-container-current">Current</span>
                    <p className="workexp-container-details">Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>
                    <hr className="straight"/>


                    <h5 className="workexp-container-heading">Web Developer / something.com</h5><br/>
                    <i className="fa fa-calendar fa-fw cv-icon"></i>
                    <span className="workexp-container-date">Mar 2012 - Dec 2014</span>
                    <p className="workexp-container-details">Consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>
                    <hr className="straight"/>


                    <h5 className="workexp-container-heading">Graphic Designer / designsomething.com</h5><br/>
                    <i className="fa fa-calendar fa-fw cv-icon"></i>
                    <span className="workexp-container-date">Jun 2010 - Mar 2012</span>
                    <p className="workexp-container-details">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <hr className="straight"/>

                </div>
            </div>
        </>
    )   
}

export default WorkExp;