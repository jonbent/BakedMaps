import React, {Component} from 'react'
import MarkerIcon from '../svg/marker_icon'
import Phone from '../svg/phone'
import Url from '../svg/url'
import Email from '../svg/email'
import BakeryHours from './BakeryHours'
export default class BakeryDetails extends Component {
    constructor(props) {
        super(props)
        this.state= {
            introTruncated: true,
            aboutTruncated: true
        }
        this.icons = {
            car: {
                url: window.carSvg,
                anchor: new google.maps.Point(25, 50),
                scaledSize: new google.maps.Size(50, 50)
            },
            store: {
                url: window.storeSvg,
                anchor: new google.maps.Point(25, 50),
                scaledSize: new google.maps.Size(50, 50)
            }
        };
        this.toggleTruncation = this.toggleTruncation.bind(this)
    }

    toggleTruncation(containerType){
        this.setState({
            [`${containerType}Truncated`]: !this.state[`${containerType}Truncated`]
        })
    }
    componentDidMount(){
        const {bakery} = this.props
        let icon = this.icons.store
        if (bakery.type === "delivery") icon = this.icons.car
        const mapOptions = {
            center: { lat: bakery.latitude, lng: bakery.longitude }, // this is SF
            zoom: 17,
            disableDefaultUI: true
        };
        // wrap this.mapNode in a Google Map
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        new google.maps.Marker({
            position: {
                lat: bakery.latitude,
                lng: bakery.longitude
            },
            map: this.map,
            title: bakery.name,
            icon
        });
    };
    
    
    render(){
        const {bakery} = this.props
        return (
            <div className="bakery-details-container">
                <main>
                    <div className="details-container">
                        <h3>Introduction</h3>
                        <div className={`details ${this.state.introTruncated ? 'details-chopped' : ""}`} dangerouslySetInnerHTML={{
                            __html:
                                bakery.intro_body
                        }}>
                        </div>
                        {this.state.introTruncated &&
                            <div className="read-more-container">
                                <div className="read-more">
                                    <button onClick={() => this.toggleTruncation('intro')}>
                                        Read More
                                    </button>
                                </div>
                            </div>
                        }
                    </div>
                    <div className="details-container">
                        <h3>About Us</h3>
                        <div className={`details ${this.state.aboutTruncated ? 'details-chopped' : "details-full"}`} dangerouslySetInnerHTML={{
                            __html:
                                bakery.description
                        }}>
                        </div>
                        {this.state.aboutTruncated &&
                            <div className="read-more-container">
                                <div className="read-more">
                                    <button onClick={() => this.toggleTruncation('about')}>
                                        Read More
                                    </button>
                                </div>
                            </div>
                        }
                    </div>
                </main>
                <aside>
                    <div id="details-map" ref={map => (this.mapNode = map)}></div>
                    <div className="details-socials">
                        <div className="address-container">
                            <MarkerIcon fill="#999999" size={24}/>
                            <div className="address">
                                <p>{bakery.address}</p>
                                <p>{bakery.city}, {bakery.state} {bakery.country} {bakery.zip_code}</p>
                                <p><a
                                    href={`https://www.google.com/maps/dir/?api=1&destination=${`${bakery.address
                                        .split(" ")
                                        .join("%20")}%20${bakery.city
                                            .split(" ")
                                            .join("%20")}%20${bakery.state}%20${bakery.zip_code}`}`}
                                    target="_blank"
                                >GET DIRECTIONS</a></p>
                            </div>
                        </div>
                        <div className="phone">
                            <a href={`tel:${bakery.phone_number}`}>
                                <Phone fill="#999999" size={20}/>
                                {bakery.phone_number}
                            </a>
                        </div>
                        <BakeryHours bakery={bakery}/>
                        <div className="email">
                            <a href={`mailto:${bakery.email}`}>
                                <Email fill="#999999" translate={[0,3]}/>
                                {bakery.email}
                            </a>
                        </div>
                        <div className="website">
                            <a target="__blank" href={bakery.website}>
                                <Url/>
                                {bakery.website}
                            </a>
                        </div>
                        <div className="social-media">

                        </div>
                    </div>
                </aside>
            </div>
        )
    }
}
