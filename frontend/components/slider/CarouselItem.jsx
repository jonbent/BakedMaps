import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import GivenStars from '../reviews/GivenStars'
export default class CarouselItem extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            shouldRender: this.props.rendered
        }
    }
    
    componentDidUpdate(prevProps) {
        if (prevProps.rendered && !this.props.rendered){
            setTimeout(() => {
                this.setState({ shouldRender: false })
            }, 300)
        }
        if (!prevProps.rendered && this.props.rendered){
            this.setState({ shouldRender: true })
        }
        
    }
    
    render() {
        const { item } = this.props
        if (this.state.shouldRender) return (
            <div className="carousel-item">
                <Link to={item.web_url.split(".com")[1]}>
                    <div className="carousel-header"></div>
                    <div className="carousel-body">
                        <div className="carousel-img-container">
                            <div className="carousel-img">
                                <img src={item.avatar_image.small_url} style={{height: '40px', width: '40px'}}/>
                            </div>
                        </div>
                        <div className="carousel-location">
                            {item.city}, <span>{this.props, item.state}</span>
                        </div>
                        <div className="carousel-name">
                            {item.name}
                        </div>
                        <div className="carousel-type">
                            {item.license_type === "hybrid"
                                ? "Medical & Recreational"
                                : item.license_type === "recreational"
                                    ? "Recreational" : "Medical"}
                        </div>
                        <div className="carousel-bottom">
                            <div className="carousel-rating">
                                <GivenStars numStars={item.rating}/>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        )
        return null
    }
}
