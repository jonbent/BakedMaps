import React, {Component} from 'react';
import "../../scss/menu/MenuItemShow.scss"
import {Link} from "react-router-dom";
import BackButton from "../svg/back_button";
import HireMe from "../HireMe";
import Share from "../svg/share";
import CopiedContainer from "../bakeries/CopiedContainer";
import Footer from "../navbar/Footer";
class MenuItemShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'none',
            opacity: 0,
            translateY: 8,
        }
        this.showCopied = this.showCopied.bind(this);
    }
    componentDidMount(){
        this.props.fetchBakery();
        this.props.fetchMenuItem();
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
            setTimeout(() => {
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
            }, 2000)
          }
        });
      }, 50);
    }
    render() {
        const {object, menuItem} = this.props;
        const {display, opacity} = this.state;
        if (!object || !menuItem) return null;
        let filter;

        let pricesArray = menuItem.prices.hasOwnProperty('gram') ? menuItem.prices.gram
            : menuItem.prices.hasOwnProperty('ounce') ? menuItem.prices.ounce
                : null;

        let category = menuItem.edge_category.ancestors[0] ?
            menuItem.edge_category.ancestors[0] :
            menuItem.edge_category.slug === "flower" || menuItem.edge_category.slug === 'vape-pens' ?
                menuItem.edge_category :
                menuItem.category;
        switch (category.slug) {
            case "flower":
                filter = "cookies";
                break;
            case "edible":
                filter = "cakes";
                break;
            case "edibles":
                filter = "cakes";
                break;
            case "concentrates":
                filter = "brittle";
                break;
            case "concentrate":
                filter = "brittle";
                break;
            case "vape-pens":
                filter = "candy";
                break;
            default:
                filter = "all";
                break;
        }
        const urlType =
              object.type === "delivery"
                ? "deliveries"
                : object.type === 'store'
                ? "stores"
                : "bakeries";
        return (
            <div className="MenuItemShow">
                <div className="back-to-bakery-container">
                    <div className="back-to-bakery">
                        <Link to={`/${urlType}/${object.slug}`}>
                            <BackButton/>
                            <div className="bakery-avatar-container">
                                <img src={object.avatar_image.small_url} alt={object.name}/>
                            </div>
                            <span>{object.name}</span>
                        </Link>
                    </div>
                </div>
                <div className="content-container">
                    <div className="content">
                        <div className="menu-item-container">
                            <div className="menu-item">
                                <div className="menu-item-avatar">
                                    <img src={menuItem.avatar_image.large_url} alt={menuItem.name}/>
                                </div>
                                <div className="menu-item-info-container">
                                    <div className="menu-item-type">
                                        <Link to={`/${urlType}/${object.slug}?filter=${filter}`}>
                                            {category.name}
                                        </Link>
                                    </div>
                                    <h2 className="menu-item-name">{menuItem.name}</h2>
                                    <div className="menu-item-actions">
                                        <span className="share">
                                            <button onClick={() => {
                                                navigator.clipboard.writeText(
                                                  window.location.origin +
                                                    this.props.location.pathname +
                                                    this.props.location.search
                                                );
                                                this.showCopied()
                                                }
                                            }>
                                                <Share />
                                                <span className="action">Share</span>
                                            </button>
                                            <CopiedContainer style={{transform: `translateX(0px) translateY(${this.state.translateY}px) translateZ(0px)`, display, opacity}}/>
                                        </span>
                                    </div>
                                    <div className="menu-item-pricing">
                                        <div className="formatted-price">
                                            {!!menuItem.prices.unit && `$${(menuItem.prices.unit.price).toFixed(2)}`}
                                            {!!menuItem.prices.ounce && `$${(menuItem.prices.ounce[0].price).toFixed(2)}`}
                                        </div>
                                        {!!pricesArray && <div className="weighted-prices-container">
                                            <div className="weighted-prices">
                                                {pricesArray.map(weight => {
                                                    return (
                                                        <div key={weight.units} className="weighted-price">
                                                            <span className="weight">{weight.units}{menuItem.prices.hasOwnProperty('gram') ? "G" : ""}</span>
                                                            <span className="price">${weight.price}</span>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <HireMe/>
                <Footer/>
            </div>
        );
    }
}

export default MenuItemShow;