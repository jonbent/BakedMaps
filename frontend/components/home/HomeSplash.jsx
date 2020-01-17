import React, { Component } from 'react';
import ImageSlideIndex from '../slider/ImageSlideIndex';
import OptionCarousel from '../slider/OptionCarousel';
import OptionCarouselHolder from '../slider/OptionCarouselHolder';
export default class HomeSplash extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    componentDidMount(){
        const {city} = this.props
        this.props.fetchBakeriesSplash(city.lat, city.lng)
    }
    
    
    render() {
        let content;
        let deliveries = [];
        let bakeries = [];
        let stores = [];
        const bakeryKeys = Object.keys(this.props.bakeries)
        if (bakeryKeys.length === 0) {
            content = (
                <div>
                    No Content Available
                </div>
            )
        } else {
            bakeryKeys.forEach(key => {
                if (this.props.bakeries[key].type === 'store') stores.push(this.props.bakeries[key])
                if (this.props.bakeries[key].type === 'delivery') deliveries.push(this.props.bakeries[key])
                if (this.props.bakeries[key].type === 'dispensary') bakeries.push(this.props.bakeries[key])
            })
            content = (
                <div className="home-container">
                    <OptionCarouselHolder items={deliveries} header="Delivery Services" link='/deliveries'/>
                    <OptionCarouselHolder items={bakeries} header="Bakery Storefronts" link='/bakeries'/>
                    <OptionCarouselHolder items={stores} header="Special Stores" link='/stores'/>
                    {/* <div className="carousel-container">
                        <div className="carousel-headers">
                            <h2>Bakery Storefronts</h2>
                            <div className="header-buttons">
                                <div className="header-buttons">
                                    <Link to="/stores"><span>View All</span></Link>
                                </div>
                            </div>
                        </div>
                        <OptionCarousel items={bakeries}/>
                    </div>
                    <div className="carousel-container">
                        <div className="carousel-headers">
                            <h2>Special Stores</h2>
                            <div className="header-buttons">
                                <Link to="/stores"><span>View All</span></Link>
                            </div>
                        </div>
                        <OptionCarousel items={stores}/>
                    </div> */}
                </div>
            )
        }

        return (
            <div>
                <ImageSlideIndex />
                {content}
            </div>
        )
    }
}
