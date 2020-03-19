import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import GivenStars from '../reviews/GivenStars'
import Fillable5Stars from "../svg/fillable_5_stars";
import DeliveryMarker from "../svg/delivery_marker";
import StorefrontMarker from "../svg/storefront_marker";
const fills = ["#FFB700", "#0E93B4", "#E07000", "#00CDBE"];
export default class CarouselItem extends Component {
    constructor(props) {
        super(props);
        
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
        const { item, idx, jdx } = this.props;
        if (this.state.shouldRender) return (
            <div className="carousel-item">
                <Link to={item.web_url.split(".com")[1]}>
                    <div className="carousel-header" >
                        <div>
                            <img src={item.avatar_image.small_url} alt={item.name}/>
                        </div>
                        {/*<img className="carousel-marker" alt={item.type} src={item.type === "delivery" ? window.deliveryMarker : window.storefrontMarker} />*/}
                        {item.type === "delivery" ?
                            <DeliveryMarker fill={jdx <= 3 && idx === 0 ? fills[jdx] : fills[3]}/>
                            :
                            <StorefrontMarker fill={jdx <= 3 && idx === 0 ? fills[jdx] : fills[3]}/>
                        }
                    </div>
                    <div className="carousel-body">
                        <div className="carousel-location">
                            {item.city}, <span>{item.state}</span>
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
                            <Fillable5Stars fillAmount={(item.rating / 5) * 100 + (item.rating > 1 ? 3 : 0)}/><span>{item.rating.toFixed(1)}</span>
                        </div>
                    </div>
                </Link>
            </div>
        );
        return null
    }
}
