import React, { Component } from 'react';
import Clock from '../svg/clock';
import Phone from '../svg/phone';
import Star from '../svg/star';
import Share from '../svg/share';
import Follow from '../svg/follow';
import Directions from "../svg/directions";
import { NavLink, Route, Switch } from 'react-router-dom';
import BakeryMenuContainer from './BakeryMenuContainer';
import BakeryReviewsContainer from '../reviews/BakeryReviewsContainer';
import BakeryDetailsContainer from './BakeryDetailsContainer';
import CopiedContainer from "./CopiedContainer";
import NavigationBar from '../navigation/NavigationBar'
import GivenStar from '../reviews/GivenStar'
import CheckMark from '../svg/check_mark';


export default class BakeryShow extends Component {
    constructor(props) {
        super(props)
        this.state = {
          display: "none",
          opacity: 0,
          translateY: 8,
        };
      this.requireLoggedIn = this.requireLoggedIn.bind(this);
    }
    componentDidMount(){
      this.props.fetchBakery();
    }
    componentDidUpdate(prevProps){
      if (this.props.location.pathname !== prevProps.location.pathname) this.props.fetchBakery();
    }

    showCopied(){
      const copiedInt = setInterval(() => {
        this.setState({
          opacity: this.state.opacity + 0.075,
          translateY: this.state.translateY - 0.66,
          display: 'block'
        }, () => {
          if (this.state.opacity >= 2 || this.state.translateY <= -2){
            clearInterval(copiedInt);
            const clearCopiedInt = setInterval(() => {
                this.setState({
                  opacity: this.state.opacity - 0.075,
                  translateY: this.state.translateY + 0.66
                }, () => {
                    if (this.state.opacity <= 0 || this.state.translateY >= 8){
                        clearInterval(clearCopiedInt);
                        this.setState({
                          display: "none",
                          translateY: 8,
                          opacity: 0
                        });
                    }
                });
            }, 50);
          }
        });
      }, 50);
    }

    requireLoggedIn(func, ...args){
      if (this.props.currentUser) {
        func(...args)
      } else {
        this.props.history.push('/login')
      }
    }

    render() {
      const {bakery} = this.props
      let bakeryType = "";
      let urlType = "";
      let navBarOptions;
      let path = "";
      let followButton;
      if (bakery){
        
        urlType =
          bakery.type === "delivery"
            ? "deliveries"
            : bakery.type === 'store'
            ? "stores"
            : "bakeries";
        bakeryType =
          bakery.license_type === "hybrid"
            ? "Medical & Recreational"
            : bakery.license_type === "recreational"
            ? "Recreational"
            : "Medical";
        path = `/${urlType}/${bakery.slug}`;
        navBarOptions = [
          [`/`, "Menu"],
          [`/about`, 'Details'],
          [`/reviews`, "Reviews"],
          [`/deals`, "Deals", true]
        ]
        let findFollow;
        if (this.props.currentUser){
          findFollow = this.props.follows.find(follow => follow.userId === this.props.currentUser.id)

        }
        followButton = findFollow ? (
          <button onClick={() => this.props.deleteFollow(findFollow.id)}>
            <div className="action-container">
              <div className="svg-container">
                <CheckMark fill="#01A8A3"/>
              </div>
              <span className="action">Follow</span>
            </div>
          </button>
        ) : (
            <button onClick={() => this.requireLoggedIn(this.props.postFollow, this.props.currentUser)}>
              <div className="action-container">
                <div className="svg-container">
                  <Follow />
                </div>
                <span className="action">Follow</span>
              </div>
            </button>
          )
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
                      <div className="given-stars">
                        {[...Array(5).keys()].map(el => {
                          return <GivenStar key={el} num={el + 1} numStars={Math.round(bakery.rating * 10) / 10} />
                        })}
                      </div>
                      <span className="rating-and-count">
                        {Math.round(bakery.rating * 10) / 10}
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
                        {bakery.licenses.length ? `${bakery.licenses[0].type}: ${bakery.licenses[0].number}` : ""}
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
                        target="_blank"
                    >
                      <div className="action-container">
                        <div className="svg-container">
                          <Directions />
                        </div>
                        <span className="action">Directions</span>
                      </div>
                    </a>
                    <button onClick={() => this.props.openReviewModal(bakery.id)}>
                      <div className="action-container">
                        <div className="svg-container">
                          <Star />
                        </div>
                        <span className="action">Review</span>
                      </div>
                    </button>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(
                          window.location.origin +
                            this.props.location.pathname +
                            this.props.location.search
                        );
                        this.showCopied()
                        }
                      }
                    >
                      <div className="action-container">
                        <div className="svg-container">
                          <Share />
                        </div>
                        <span className="action">Share</span>
                      </div>
                    </button>
                    <CopiedContainer style={{transform: `translateX(0px) translateY(${this.state.translateY}px) translateZ(0px)`, display: this.state.display, opacity: this.state.opacity}}/>
                    {followButton}
                  </div>
                </div>
              </div>
            </div>
            <NavigationBar location={this.props.location} linkOptions={navBarOptions} path={path}/>
            <Route exact path="/:storeType/:storeSlug/" component={BakeryMenuContainer}/>
            <Route exact path="/:storeType/:storeSlug/about" component={BakeryDetailsContainer}/>
            <Route exact path="/:storeType/:storeSlug/reviews" component={BakeryReviewsContainer}/>
          </div>
        ) : null;
    }
}
