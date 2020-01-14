import React from 'react';
import EmptyStar from '../svg/empty_star';
import FullStar from '../svg/full_star';

const StarButton = ({onHover = null, hovered = false, resetStars = null, onClick = null}) => {
    return (
        <button className="star-button" onClick={onClick}>
            <div className="empty-star">
                <EmptyStar />
            </div>
            <span className={`full-star ${hovered ? 'hovered' : ""}`} onMouseOver={onHover} onMouseOut={resetStars}>
                <div>
                    <FullStar />
                </div>
            </span>
        </button>
    )
}

export default StarButton