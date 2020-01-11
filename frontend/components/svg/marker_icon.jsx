import React from 'react'

const MarkerIcon = ({ size = "18px", fill = "#4A4A4A", viewBox = "0 0 18 18" }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <path
        fill={fill}
        d="M38.5 0C17.325 0 0 17.325 0 38.5c0 8.02 2.567 15.4 6.737 21.817l31.763 42.35 31.763-42.35C74.433 54.22 77 46.52 77 38.5 77 17.325 59.675 0 38.5 0zm.183 55.367C29.508 55.367 22 47.86 22 38.683 22 29.508 29.508 22 38.683 22c9.176 0 16.684 7.508 16.684 16.683 0 9.176-7.508 16.684-16.684 16.684z"
      ></path>
    </svg>
  );
};

export default MarkerIcon
