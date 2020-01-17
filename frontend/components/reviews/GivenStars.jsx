import React from 'react'

import GivenStar from './GivenStar'

const GivenStars = ({numStars = 0, onHover=null}) => {
    return (
        <div className="given-stars">
            {[...Array(5).keys()].map(el => {
                return <GivenStar key={el} num={el + 1} numStars={numStars} onHover={onHover}/>
            })}
        </div>
    )
}

export default GivenStars
