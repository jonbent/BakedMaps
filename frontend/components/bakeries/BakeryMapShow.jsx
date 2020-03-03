import React, {Component} from 'react';
import BackButton from "../svg/back_button";
import '../../scss/BakeryMapShow.scss';
import {Link} from "react-router-dom";
import GivenStar from "../reviews/GivenStar";
import Phone from "../svg/phone";
import Directions from "../svg/directions";
import Star from "../svg/star";
import Share from "../svg/share";
import EmailIcon from '../svg/email'
import CopiedContainer from "./CopiedContainer";
import BakeryHours from "./BakeryHours";
import ReviewCircle from "../svg/review_circle";
import Fillable5Stars from "../svg/fillable_5_stars";
class BakeryMapShow extends Component{
    constructor(props) {
        super(props);
        this.state = {
            display: "none",
            opacity: 0,
            translateY: 8,
        };
        this.showCopied = this.showCopied.bind(this);
        this.requireLoggedIn = this.requireLoggedIn.bind(this);
    }
    componentDidMount(){
        const {bakery} = this.props;
        const urlType =
              bakery.type === "delivery"
                ? "deliveries"
                : bakery.type === 'store'
                ? "stores"
                : "bakeries";
        this.props.fetchReviewableDistribution(bakery.slug, bakery.type);
        this.props.fetchBakery(bakery.slug, urlType);
    }
    componentDidUpdate(prevProps){
        if (prevProps.bakery.id !== this.props.bakery.id){
            const {bakery} = this.props;
            const urlType =
                  bakery.type === "delivery"
                    ? "deliveries"
                    : bakery.type === 'store'
                    ? "stores"
                    : "bakeries";
            this.props.fetchReviewableDistribution(bakery.slug, bakery.type);
            this.props.fetchBakery(bakery.slug, urlType);
        }

    }
    requireLoggedIn(func, ...args){
      if (this.props.currentUser) {
        func(...args);
      } else {
        this.props.history.push('/login');
      }
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
    render(){
        const {bakery, handleBakerySelect, reviewDistribution} = this.props;
        const bakeryType =
              bakery.license_type === "hybrid"
                ? "Medical & Recreational"
                : bakery.license_type === "recreational"
                ? "Recreational"
                : "Medical";
        const urlType =
              bakery.type === "delivery"
                ? "deliveries"
                : bakery.type === 'store'
                ? "stores"
                : "bakeries";
        return (
            <div className="BakeryMapShow">
                <div className="back-to-results">
                    <button onClick={handleBakerySelect}><BackButton/> Back to Results</button>
                </div>
                <div className="content-container">
                    <div className="content">
                        <div className="bakery-actions">
                            <div className="bakery-header-container">
                                <Link to={`/${urlType}/${bakery.slug}`}>
                                    <div className="bakery-header">
                                        <div className="bakery-avatar-container">
                                            <div className="bakery-avatar">
                                                <img
                                                  src={bakery.avatar_image.small_url}
                                                  alt={bakery.name}
                                                />
                                            </div>
                                        </div>
                                        <div className="bakery-info-container">
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
                                                    <div className="open-now">
                                                        <span>{bakery.open_now ? "Open Now" : "Closed"}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="actions-container">
                                <div className="actions">
                                    <a href={`tel:${bakery.phone_number}`}>
                                        <div className="action-container">
                                            <div className="svg-container">
                                                 <Phone />
                                            </div>
                                            <span className="action">Call</span>
                                        </div>
                                    </a>
                                    {bakery.type !== "delivery" && <a
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
                                    </a>}
                                    {bakery.type === "delivery" && <a href={`mailto:${bakery.email}`}>
                                        <div className="action-container">
                                            <div className="svg-container email">
                                                <EmailIcon />
                                            </div>
                                            <span className="action">Email</span>
                                        </div>
                                    </a>}
                                    <button onClick={() => this.requireLoggedIn(() => this.props.openReviewModal({ reviewAmount: 0, reviewableType: urlType, reviewableId: bakery.id }))}>
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
                                        <CopiedContainer style={{transform: `translateX(0px) translateY(${this.state.translateY}px) translateZ(0px)`, display: this.state.display, opacity: this.state.opacity}}/>
                                    </button>
                                </div>
                                <div className="view-menu">
                                    <Link to={`/${urlType}/${bakery.slug}`}>
                                        View Menu
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="hours-of-operation">
                            <div className="header">
                                <h3>Hours of Operation</h3>
                            </div>
                            <BakeryHours bakery={bakery}/>
                        </div>
                        <div className="review-summary-container">
                            <div className='review-summary-header'>
                                <Star/>
                                <h3>Review Summary</h3>
                                <button>Write A Review</button>
                            </div>

                            <div className="review-summary">
                                <div className="review-circle-container">
                                    <ReviewCircle strokeOffset={Math.abs(5 - bakery.rating) * 20}/>
                                    <div className="review-circle-stats">
                                        <span>{bakery.rating !== 0 ? (Math.round(bakery.rating * 10) / 10).toFixed(1) : "n/a"}</span>
                                        <div className="stars-container"><Fillable5Stars fillAmount={(bakery.rating / 5) * 100}/></div>
                                    </div>
                                </div>
                                <div className="total-review-stats-container">
                                    {bakery.reviews_count === 0 && <h4 className="no-reviews">No Reviews</h4>}
                                    {bakery.reviews_count !== 0 && <div className="total-review-stats">
                                        <ol>
                                            <li>5 Stars</li>
                                            <li>4 Stars</li>
                                            <li>3 Stars</li>
                                            <li>2 Stars</li>
                                            <li>1 Star</li>
                                        </ol>
                                        <div className="review-stats">
                                            <div className="star-visualizer 5-star-visualizer"><div className="fillAmount" style={{width: `${(reviewDistribution[5] / bakery.reviews_count) * 100}%`, backgroundColor: "rgb(123, 200, 162)"}}></div></div>
                                            <div className="star-visualizer 4-star-visualizer"><div className="fillAmount" style={{width: `${(reviewDistribution[4] / bakery.reviews_count) * 100}%`, backgroundColor: "rgb(175, 215, 136)"}}></div></div>
                                            <div className="star-visualizer 3-star-visualizer"><div className="fillAmount" style={{width: `${(reviewDistribution[3] / bakery.reviews_count) * 100}%`, backgroundColor: "rgb(255, 217, 85)"}}></div></div>
                                            <div className="star-visualizer 2-star-visualizer"><div className="fillAmount" style={{width: `${(reviewDistribution[2] / bakery.reviews_count) * 100}%`, backgroundColor: "rgb(255, 179, 80)"}}></div></div>
                                            <div className="star-visualizer 1-star-visualizer"><div className="fillAmount" style={{width: `${(reviewDistribution[1] / bakery.reviews_count) * 100}%`, backgroundColor: "rgb(255, 141, 95)"}}></div></div>
                                        </div>
                                        <ol>
                                            <li>{reviewDistribution[5]}</li>
                                            <li>{reviewDistribution[4]}</li>
                                            <li>{reviewDistribution[3]}</li>
                                            <li>{reviewDistribution[2]}</li>
                                            <li>{reviewDistribution[1]}</li>
                                        </ol>
                                    </div>}

                                </div>
                            </div>
                            {bakery.reviews_count !== 0 && <div className="all-reviews">
                                <Link to={`/${urlType}/${bakery.slug}/reviews`}>
                                    See All Reviews
                                </Link>
                            </div>}
                        </div>
                        <div className="view-full-container">
                            <Link to={`/${urlType}/${bakery.slug}`} className="view-full">
                                View The Full Listing
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

};

export default BakeryMapShow;