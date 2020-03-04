import React from 'react';

const ReviewCircle = ({strokeOffset}) => {
    return (
        <svg
            role="img"
            width="140px"
            height="140px"
            viewBox="0 0 33.6 33.6"
        >
            <title>Circular loading indicator and reviews graph</title>
            <circle cx="16.9" cy="16.9" r="15.91549430918954" fill="transparent" stroke="#E6E6E6" strokeWidth="1.4">
            </circle>
            <circle
                offset="11"
                className="path"
                data-testid="review-circle-svg"
                cx="16.9"
                cy="16.9"
                r="15.91549430918954"
                fill="transparent"
                stroke="#F9AE19"
                strokeWidth="1.4"
                strokeDasharray="100"
                transform="rotate(-90, 16.9, 16.9)"
                style={{
                    strokeDashoffset: strokeOffset,
                    transition: "stroke-dashoffset 1.5s linear 0s"
                }}
            >
            </circle>
        </svg>
    );
};

export default ReviewCircle;