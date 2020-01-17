import React, { Component } from 'react'
import CarouselItem from './CarouselItem'
export default class CarouselItemHolder extends Component {
    render() {
        return (
            <div className="carousel-items" style={{transform: this.props.transformX}}>
                    {this.props.items.map(item => {
                        return <CarouselItem key={item.id} item={item} rendered={this.props.rendered}/>
                    })}
            </div>
        )
    }
}
