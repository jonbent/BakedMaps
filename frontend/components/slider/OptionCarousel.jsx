import React from 'react'
import CarouselItemHolder from './CarouselItemHolder'
const OptionCarousel = ({ items, currentIndex, numDivs }) => {
    
    return (
        <div className="option-carousel">
                {[...Array(numDivs).keys()].map(num => {
                    return <CarouselItemHolder key={num} items={items.slice(num*5, num*5 + 5)} rendered={currentIndex === num} transformX={`translateX(calc(${currentIndex * -100}%))`}/>
                })}
        </div>
    )
}

export default OptionCarousel;
