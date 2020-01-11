import React, { Component } from 'react'
import Clock from '../svg/clock'
import Phone from '../svg/phone'
import Star from '../svg/star'
import Share from '../svg/share'
import Follow from '../svg/follow'
import Directions from "../svg/directions";
import { NavLink } from 'react-router-dom'

export default class BakeryShow extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount(){
        this.props.fetchBakery();
    }
    getNavLinkClass(path){
        return this.props.location.pathname === path ? 'active' : '';
    }
    render() {
        const {bakery} = this.props
        let bakeryType = "";
        if (bakery){
            bakeryType =
              bakery.license_type === "hybrid"
                ? "Medical & Recreational"
                : bakery.license_type === "recreational"
                ? "Recreational"
                : "Medical";
        }
        return bakery && bakery.phone_number ? (
          <div className="bakery-show-container">
            <div className="bakery-header-container">
              <div className="bakery-header">
                <div className="bakery-avatar-container">
                  <div className="bakery-avatar">
                    <img
                      src={bakery.avatar_image.small_url}
                      alt={bakery.name}
                    />
                  </div>
                </div>
                <div className="bakery-name-and-info-container">
                  <div className="bakery-name-and-info">
                    <h1>{bakery.name}</h1>
                    <div className="reviews">
                      <span className="rating-and-count">
                        Rating: {Math.round(bakery.rating * 10) / 10}
                        <span className="reviews-count">
                          ({bakery.reviews_count})
                        </span>
                      </span>
                    </div>
                    <div className="bakery-info">
                      <span className="bakery-type">
                        {bakery.type} • {bakery.city}, {bakery.state}
                      </span>
                      <span className="license-type">{bakeryType}</span>
                      <div className="license-value">
                        {bakery.licenses[0].type}: {bakery.licenses[0].number}
                      </div>
                      <div className="phone-number">{bakery.phone_number}</div>
                      <div className="hours">
                        <span className="clock-svg">
                          <Clock
                            fill={bakery.open_now ? "#00cdbf" : "#c0124c"}
                          />
                        </span>
                        <span
                          className={`open-status ${
                            bakery.open_now ? "open" : "closed"
                          }`}
                        >
                          {bakery.open_now ? "Open Now" : "Closed"}
                        </span>
                        {bakery.todays_hours_str}
                      </div>
                    </div>
                  </div>

                  <div className="bakery-actions">
                    <a href={`tel:${bakery.phone_number}`}>
                      <div className="action-container">
                        <div className="svg-container">
                          <Phone />
                        </div>
                        <span className="action">Call</span>
                      </div>
                    </a>
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${`${bakery.address
                        .split(" ")
                        .join("%20")}%20${bakery.city
                        .split(" ")
                        .join("%20")}%20${bakery.state}%20${bakery.zip_code}`}`}
                    >
                      <div className="action-container">
                        <div className="svg-container">
                          <Directions />
                        </div>
                        <span className="action">Directions</span>
                      </div>
                    </a>
                    <button>
                      <div className="action-container">
                        <div className="svg-container">
                          <Star />
                        </div>
                        <span className="action">Review</span>
                      </div>
                    </button>
                    <button>
                      <div className="action-container">
                        <div className="svg-container">
                          <Share />
                        </div>
                        <span className="action">Share</span>
                      </div>
                    </button>
                    <button>
                      <div className="action-container">
                        <div className="svg-container">
                          <Follow />
                        </div>
                        <span className="action">Follow</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bakery-nav-container">
              <div className="bakery-nav">
                <div className={`nav-link-container ${this.getNavLinkClass(`/bakeries/${bakery.slug}`)}`}>
                  <div className="nav-link">
                    <NavLink exact to={`/bakeries/${bakery.slug}`}>Menu</NavLink>
                  </div>
                </div>
                <div className={`nav-link-container ${this.getNavLinkClass(`/bakeries/${bakery.slug}/about`)}`}>
                  <div className="nav-link">
                    <NavLink exact to={`/bakeries/${bakery.slug}/about`}>Details</NavLink>
                  </div>
                </div>
                <div className={`nav-link-container ${this.getNavLinkClass(`/bakeries/${bakery.slug}/deals`)}`}>
                  <div className="nav-link">
                    <NavLink exact to={`/bakeries/${bakery.slug}/deals`}>Deals</NavLink>
                  </div>
                </div>
                <div className={`nav-link-container ${this.getNavLinkClass(`/bakeries/${bakery.slug}/reviews`)}`}>
                  <div className="nav-link">
                    <NavLink exact to={`/bakeries/${bakery.slug}/reviews`}>Reviews</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null;
    }
}
