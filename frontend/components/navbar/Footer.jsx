import React from 'react'
import BakedMaps from '../svg/baked_maps'
import Octicon from '../svg/octicon'
import LinkedinLogo from '../svg/linkedin_logo'

const Footer = () => {
    return (
        <div className="app-footer">
            <div className='inner-info'>
                <BakedMaps/>
                <p>
                    A community enabling bakery consumers to embrace their sweet tooth since 2020.
                </p>
                <div className="socials">
                    <a href="https://github.com/jonbent" target="__blank"><Octicon /></a>
                    <a href="https://www.linkedin.com/in/jon-bent/" target="__blank"><LinkedinLogo /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer
