import React from 'react';

const Fillable5Stars = ({fillAmount = 0}) => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 132 20" xmlns="http://www.w3.org/2000/svg">
            <rect height="100%" x={`${fillAmount}%`} width={`${100 - fillAmount}%`} clipPath="url(#ui-solid-stars-clip-path)" fill="#E6E6E6"></rect>
            <rect height="100%" width={`${fillAmount}%`} clipPath="url(#ui-solid-stars-clip-path)" fill="#F9AE19"></rect>
        </svg>
    );
};

export default Fillable5Stars;