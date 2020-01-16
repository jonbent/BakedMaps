import React from 'react'
import {NavLink} from 'react-router-dom'

const NavigationBar = ({ linkOptions = [], path, location}) => {
    const getNavLinkClass = (path) => {
        return location.pathname === path || location.pathname === path.slice(0, -1) ? 'active' : '';
    }
    return (
        <div className="nav-container">
            <div className="nav">
                {linkOptions.map((link, idx) => {
                    return (
                        <div key={idx} className={`nav-link-container ${getNavLinkClass(path + link[0])}`}>
                            <div className="nav-link">
                                <NavLink exact to={path + link[0]} onClick={(e) => link[2] ? e.preventDefault() : null}>
                                    {link[1]}
                                </NavLink>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default NavigationBar
