import React from 'react'
import CarouselItem from './CarouselItem'
const CarouselItemHolder = ({idx, items, transformX, rendered}) => {
    return (
        <div className="carousel-items" style={{transform: transformX}}>
                {items.map((item, jdx) => {
                    return <CarouselItem key={item.id} item={item} idx={idx} jdx={jdx} rendered={rendered}/>
                })}
        </div>
    )
};

export default CarouselItemHolder
