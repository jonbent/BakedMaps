import React from 'react'
import EmptyStar from '../svg/empty_star'
import FullStar from '../svg/full_star'

const GivenStar = ({num, numStars}) => {
    return (
        <div className="star-container">
            <div className="star">
                <div className="empty-star"><EmptyStar /></div>
                <div className="filled-star" style={numStars > num ? { width: '100%' } : numStars + 1 > num ? { width: `${parseInt(100 -((num - numStars) * 100))}%` } : { width: '0%' }}>
                    <div>
                        <FullStar />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GivenStar

// numStars | num | val
// 4.5      | 4   | 1
// 3.5      | 4   | 0.5
// 4.5      | 5   | 0.5
// 5        | 3   | 1

// numStars > num