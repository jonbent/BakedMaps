import React, {Component} from 'react'
import ProfileAvatarSvg from '../svg/profile_avatar_dark'
import MarkerIcon from '../svg/marker_icon'
import Crosshair from '../svg/crosshair'
import { Link, NavLink } from 'react-router-dom';
import { debounce } from 'lodash'
import CityUtil from '../../util/city_recommendations/CityStateUtil';
import UserInfoModal from '../users/UserInfoModal'
import OutsideClickHandler from "../OutsideClickHandler";

class NavBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            locationSearch: false,
            locationPlaceholder: "San Francisco, CA",
            selectedCity: "San Francisco",
            cities: [],
            locationInputValue: "",
            userModalOpen: false
        };
        this.CityUtil = new CityUtil();
        this.handleCitySelect = this.handleCitySelect.bind(this);
        this.handleLocationInputFocus = this.handleLocationInputFocus.bind(this);
        this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
        this.emitSearchInputChangeDebounce = debounce(this.emitSearchInputChange.bind(this), 250);
        this.handleUserClick = this.handleUserClick.bind(this)
    }

    handleLocationInputFocus(value){
        this.setState({
            locationSearch: value,
            locationPlaceholder: value ? "" : "San Francisco, CA"
        })
    }
    focusLocationInput(e){
        
        e.currentTarget.querySelector(".location-input").focus()
    }
    renderDropDown(){

    }
    handleSearchInputChange(e){
        const val = e.target.value;
        this.setState({
            locationInputValue: val,
        })
        this.emitSearchInputChangeDebounce(val);
    }
    emitSearchInputChange(value){
        const cities = this.CityUtil.searchByCity(value)
        this.setState({
            cities
        })
    }
    handleCitySelect(cityName){
        const cityInfo = this.CityUtil.getCityInfo(cityName);
        this.setState({
            locationInputValue: `${cityName}, ${cityInfo.state_id}`,
            selectedCity: cityName,
        })
    }

    handleUserClick(){
        this.setState({
            userModalOpen: !this.state.userModalOpen
        });
    }

    render(){
        const {locationSearch} = this.state
        const { currentUser, logout } = this.props;
        return (
          <nav className="nav-bar">
            <div>
              <Link to="/" className="logo">
                <div>
                  <img
                    src="https://weedmaps.com/static/images/wm-logo-mini-black-smile.svg"
                    alt="weedmaps"
                  />
                </div>
              </Link>
              <div className="header-content">
                <div className="bakery-search">
                  <div className="bakery-search-bar">
                    {locationSearch && (
                      <ul className="bakery-drop-down">
                        <li>
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
                                {cityName},{" "}
                                {this.CityUtil.getCityInfo(cityName).state_id}
                              </div>
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
                    />
                    <div
                      className="location-field cursor-text"
                      onClick={e => this.focusLocationInput(e)}
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
                        onFocus={e => this.handleLocationInputFocus(true)}
                        onBlur={e => this.handleLocationInputFocus(false)}
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
                        onClick={this.handleUserClick}
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
                  <NavLink activeClassName="active-param" to="/products">
                    Products
                  </NavLink>
                  <NavLink activeClassName="active-param" to="/deals">
                    Deals
                  </NavLink>
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
export default NavBar