import React, {Component} from 'react'
import ProfileAvatarSvg from '../svg/profile_avatar_dark'
import MarkerIcon from '../svg/marker_icon'
import Crosshair from '../svg/crosshair'
import { Link, NavLink, withRouter } from 'react-router-dom';
import { debounce } from 'lodash'
import CityUtil from '../../util/city_recommendations/CityStateUtil';
import UserInfoModal from '../users/UserInfoModal'
import OutsideClickHandler from "../OutsideClickHandler";
import reverse from 'reverse-geocode'

class NavBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            locationSearch: false,
            productSearch: false,
            locationPlaceholder: props.city.name,
            selectedCity: "San Francisco",
            cities: [],
            productInputValue: "",
            locationInputValue: "",
            userModalOpen: false
        };
        this.CityUtil = new CityUtil();
        this.handleCitySelect = this.handleCitySelect.bind(this);
        this.handleSearchInputFocus = this.handleSearchInputFocus.bind(this);
        this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
        this.emitSearchInputChangeDebounce = debounce(this.emitSearchInputChange.bind(this), 250);
        this.handleUserClick = this.handleUserClick.bind(this)
        this.handleLocationRequest = this.handleLocationRequest.bind(this)
    }
    handleLocationRequest(){
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const coords = pos.coords
          const reverseCity = reverse.lookup(coords.latitude, coords.longitude, 'us');
          this.handleCitySelect(`${reverseCity.city}, ${reverseCity.state_abbr}`)
        }
      )
    }

    handleSearchInputFocus(fieldType){
      setTimeout(() => {
        this.setState({
            [`${fieldType}Search`]: !this.state[`${fieldType}Search`],
        })
      })
    }
    focusLocationInput(e){
        e.currentTarget.querySelector(".location-input").focus()
    }
    renderDropDown(){

    }
    handleSearchInputChange(e){
        const val = e.target.value;
        
        if (this.state.locationSearch){
          this.setState({
              locationInputValue: val,
          })
        } else {
            this.setState({
              productInputValue: val,
            })
        }
        this.emitSearchInputChangeDebounce(val);
    }
    emitSearchInputChange(value){
      if (this.state.locationSearch){
        const cities = this.CityUtil.searchByCity(value)
        this.setState({
            cities
        })
      } else {
        this.props.fetchSearchResults(value, this.props.city)
      }
    }
    handleCitySelect(cityName){
        if (this.props.location.pathname !== 'bakeries') this.props.history.push('/bakeries')
        const cityInfo = this.CityUtil.getCityInfo(cityName);
        
        this.setState({
            locationInputValue: `${cityName}`,
            selectedCity: cityName,
        })
        this.props.receiveCity(cityInfo);
    }

    handleUserClick(){
        this.setState({
            userModalOpen: !this.state.userModalOpen
        });
    }

    render(){
        const {locationSearch, productSearch} = this.state
        const { currentUser, logout } = this.props;
        return (
          <nav className="nav-bar">
            <div>
              <Link to="/" className="logo">
                <div>
                  <img
                    src={bmLogo}
                    alt="bakedMaps"
                  />
                </div>
              </Link>
              <div className="header-content">
                <div className="bakery-search">
                  <div className="bakery-search-bar">
                    {locationSearch && (
                      <ul className="bakery-drop-down">
                        <li onMouseDown={this.handleLocationRequest}>
                          <div className="position-icon">
                            <Crosshair />
                          </div>
                          <div className="position-name">Current Location</div>
                        </li>
                        {this.state.cities.map(cityName => {
                          return (
                            <li
                              key={cityName}
                              onMouseDown={e => this.handleCitySelect(cityName)}
                            >
                              <div className="position-icon">
                                <MarkerIcon />
                              </div>
                              <div className="position-name">
                                {cityName}
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                    {productSearch && (
                      <ul className="bakery-drop-down">
                        {!this.props.products && 
                          <li className="product-list-item">
                          <div className="product-icon">
                          </div>
                          <div className="product-name">No Found Products</div>
                        </li>
                        }
                        {this.props.products && this.props.products.map(product => {
                          if (product.type !== 'listing') return null
                          let webUrl = product.attributes.web_url.split('.com')[1];
                          let splitWebUrl = product.attributes.web_url.split('.com')[1].split('/');
                          if (splitWebUrl[1] === 'dispensaries') splitWebUrl[1] = 'bakeries';
                          webUrl = splitWebUrl.join('/')
                          return (
                            <li
                            key={product.id}
                            className="product-list-item"
                            onMouseDown={e => this.props.history.push(webUrl)}
                            >
                              <Link to={webUrl}>
                                <div className="product-icon">
                                  {product.attributes.avatar_image && <img src={product.attributes.avatar_image.small_url} alt={product.attributes.name}/>}
                                </div>
                                <div className="product-name-info">
                                  <div className="product-name">
                                    {product.attributes.name}
                                  </div>
                                  <div className="product-info">
                                    {product.type === 'listing' &&
                                    `${product.attributes.type} | ${product.attributes.city}, ${product.attributes.state}`
                                    }
                                    {product.type === 'product' &&
                                      `${product.attributes.parent_category.name} | ${product.attributes.brand_name}`
                                    }
                                  </div>
                                </div>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}

                    <div className="search-icon-container">
                      <i className="fa fa-search search-icon"></i>
                    </div>
                    <input
                      type="text"
                      placeholder="Search for Bakeries, or products"
                      onClick={this.focusProductInput}
                      onChange={this.handleSearchInputChange}
                      onFocus={e => this.handleSearchInputFocus("product")}
                      onBlur={e => this.handleSearchInputFocus("product")}
                    />
                    <div
                      className="location-field cursor-text"
                      onClick={this.focusLocationInput}
                    >
                      <div className="location-icon-container">
                        {!locationSearch ? (
                          <MarkerIcon />
                        ) : (
                          <i className="fa fa-times search-icon"></i>
                        )}
                      </div>
                      <input
                        className="location-input"
                        type="text"
                        value={this.state.locationInputValue}
                        placeholder={this.state.locationPlaceholder}
                        onFocus={e => this.handleSearchInputFocus("location")}
                        onBlur={e => this.handleSearchInputFocus("location")}
                        onChange={this.handleSearchInputChange}
                      />
                      {!locationSearch && (
                        <div className="location-down-arrow-container">
                          <i className="fa fa-caret-down location-down-arrow-icon"></i>
                        </div>
                      )}
                    </div>
                  </div>
                  {currentUser && (
                    <div className="nav-user-info">
                      <div
                        className="nav-user-icon-container"
                        onMouseUp={this.handleUserClick}
                      >
                        <ProfileAvatarSvg />
                      </div>
                      {this.state.userModalOpen && (
                        <OutsideClickHandler action={this.handleUserClick}>
                          <UserInfoModal
                            user={currentUser}
                            logout={logout}
                            closeModal={this.handleUserClick}
                          />
                        </OutsideClickHandler>
                      )}
                    </div>
                  )}
                  {!currentUser && (
                    <div className="auth-links">
                      <Link to="/login">LOG IN</Link>
                      <Link to="/signup">SIGN UP</Link>
                    </div>
                  )}
                </div>
                <div className="search-options">
                  <NavLink activeClassName="active-param" to="/bakeries">
                    Bakeries
                  </NavLink>
                  {/* <NavLink activeClassName="active-param" to="/products">
                    Products
                  </NavLink>
                  <NavLink activeClassName="active-param" to="/deals">
                    Deals
                  </NavLink> */}
                  <NavLink activeClassName="active-param" to="/maps">
                    Maps
                  </NavLink>
                </div>
              </div>
            </div>
          </nav>
        );
    }
}
export default withRouter(NavBar)