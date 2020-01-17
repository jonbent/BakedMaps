import React from 'react'
import Octicon from './svg/octicon'
import LinkedinLogo from './svg/linkedin_logo'
const HireMe = () => {
    return (
        <div className="bottom-banner-container">
            <div className="bottom-banner">
                <div className="bottom-banner-links">
                    <h5>Hire Me</h5>
                    <div className="links">
                        <a href="https://github.com/jonbent"><Octicon />GitHub</a>
                        <a href="https://www.linkedin.com/in/jon-bent/"><LinkedinLogo />LinkedIn</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HireMe
