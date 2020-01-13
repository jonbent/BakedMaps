import React from 'react'

const Clock = ({ fill = '#00CDBE', size = 16}) => {
    return (
        <svg
          className="wm-icon-clock"
          height={`${size}px`}
          width={`${size}px`}
          viewBox="0 0 24 24"
        >
          <path
            fill={fill}
            d="M11.805 14.019H7.94a1.21 1.21 0 1 1 0-2.418h2.657V7.25a1.21 1.21 0 0 1 2.419 0v5.559a1.21 1.21 0 0 1-1.21 1.209M12 4.04C7.611 4.04 4.04 7.61 4.04 12c0 4.389 3.571 7.96 7.96 7.96 4.389 0 7.96-3.571 7.96-7.96 0-4.389-3.571-7.96-7.96-7.96M12 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"
          ></path>
        </svg>
    );
}

export default Clock
