import React, { Component} from 'react'
import {Link } from 'react-router-dom'
import OptionCarousel from './OptionCarousel'
import Arrow from '../svg/arrow_down'
export default class OptionCarouselHolder extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentIndex: 0
        };
        this.changeIndex = this.changeIndex.bind(this)
    }

    changeIndex(num, numDivs){
        if (num < 0 || num === numDivs) return null;
        this.setState({
            currentIndex: num
        })
    }
    render(){
        const { header, link, items } = this.props;
        const {currentIndex} = this.state;
        const numDivs = items.length % 5 === 0 ? items.length / 5 : items.length % 5;
        if (items.length === 0) return null;
        return (
            <div className="carousel-container">
                <div className="carousel-headers">
                    <h2>{header}</h2>
                    <div className="header-buttons">
                        <Link to={link}><span>View All</span></Link>
                        <div onClick={() => this.changeIndex(currentIndex - 1, numDivs)} className={`prev-button carousel-nav ${currentIndex === 0 ? "disabled" : ""}`}>
                            <Arrow fill={currentIndex === 0 ? "#DDDDDD" : "#666666"}/>
                        </div>
                        <div onClick={() => this.changeIndex(currentIndex + 1, numDivs)} className={`next-button carousel-nav ${currentIndex === numDivs - 1 ? "disabled" : ""}`}>
                            <Arrow fill={currentIndex === numDivs - 1 ? "#DDDDDD" : "#666666"}/>
                        </div>
                    </div>
                </div>
                <OptionCarousel items={items} currentIndex={currentIndex} numDivs={numDivs}/>
            </div>
        )

    }
}

