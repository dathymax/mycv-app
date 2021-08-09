import './Education.css';
import React from 'react';

const Education = () => {
    return (
        <>
            <div className="workexp">
                <div className="workexp-heading">
                    <i className="fa fa-certificate fa-fw cv-icon"/>
                    <h2 id="workexp-heading">Education</h2>
                </div>
                <div className="workexp-container">

                    <h5 className="workexp-container-heading">W3Schools.com</h5><br/>
                    <i className="fa fa-calendar fa-fw cv-icon"></i>
                    <span className="workexp-container-date">Forever</span>
                    <p className="workexp-container-details">Web Development! All I need to know in one place</p>
                    <hr className="straight"/>


                    <h5 className="workexp-container-heading">London Business School</h5><br/>
                    <i className="fa fa-calendar fa-fw cv-icon"></i>
                    <span className="workexp-container-date">2013 - 2015</span>
                    <p className="workexp-container-details">Master Degree</p>
                    <hr className="straight"/>


                    <h5 className="workexp-container-heading">School of Coding</h5><br/>
                    <i className="fa fa-calendar fa-fw cv-icon"></i>
                    <span className="workexp-container-date">2010 - 2013</span>
                    <p className="workexp-container-details">Bachelor Degree</p>
                    <hr className="straight"/>

                </div>
            </div>
        </>
    )   
}

export default Education;