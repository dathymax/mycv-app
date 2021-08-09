import './Info.css';
import React from 'react';
import '../../css/grid.css';
import '../../../../node_modules/font-awesome/css/font-awesome.min.css';

const Info = () => {
    const percent100 = {
        width: '100%',
    }
    const percent90 = {
        width: '90%',
    }
    const percent80 = {
        width: '80%',
    }
    const percent70 = {
        width: '70%',
    }
    const percent50 = {
        width: '50%',
    }
    const percent25 = {
        width: '25%',
    }
    return (
        <div className="info">
            <p className="cv-info">
                <i className="fa fa-briefcase fa-fw cv-icon"/>
                Designer
            </p>
            <p className="cv-info">
                <i className="fa fa-home fa-fw cv-icon"/>
                London, UK
            </p>
            <p className="cv-info">
                <i className="fa fa-envelope fa-fw cv-icon"/>
                ex@mail.com
            </p>
            <p className="cv-info">
                <i className="fa fa-phone fa-fw cv-icon"/>
                1224435534
            </p>
            <hr className="straight"/>
            <div className="skills">
                <p className="cv-skills-heading">
                    <i className="fa fa-asterisk fa-fw cv-icon"/>
                    Skills
                </p>
                <p className="cv-skills">
                    Adobe Photoshop
                </p>
                <div className="cv-skills-percent-full">
                    <div className="cv-skills-percents" style={percent90}>
                        90%
                    </div>
                </div>
                <p className="cv-skills">
                    Photography
                </p>
                <div className="cv-skills-percent-full">
                    <div className="cv-skills-percents" style={percent80}>
                        80%
                    </div>
                </div>
                <p className="cv-skills">
                    Illustrator
                </p>
                <div className="cv-skills-percent-full">
                    <div className="cv-skills-percents" style={percent70}>
                        70%
                    </div>
                </div>
                <p className="cv-skills">
                    Media
                </p>
                <div className="cv-skills-percent-full">
                    <div className="cv-skills-percents" style={percent50}>
                        50%
                    </div>
                </div>
                <p className="cv-skills-heading">
                    <i className="fa fa-globe fa-fw cv-icon"></i>
                    Languages
                </p>
                <p className="cv-skills">
                    English
                </p>
                <div className="cv-skills-percent-full">
                    <div className="cv-skills-percents" style={percent100}>
                        100%
                    </div>
                </div>
                <p className="cv-skills">
                    Spanish
                </p>
                <div className="cv-skills-percent-full">
                    <div className="cv-skills-percents" style={percent50}>
                        50%
                    </div>
                </div>
                <p className="cv-skills">
                    German
                </p>
                <div className="cv-skills-percent-full">
                    <div className="cv-skills-percents" style={percent25}>
                        25%
                    </div>
                </div>
                <br/>
            </div>
        </div>
    )
}

export default Info;