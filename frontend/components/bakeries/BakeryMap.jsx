import React, { Component } from 'react';
import MarkerManager from '../../util/MarkerManager';
import {Link, NavLink} from 'react-router-dom';
import NavigationArrow from '../svg/navigation_arrow';
import queryString from "query-string";
import Filters from "../svg/filters"
import BakeryMapList from './BakeryMapList'
import BakeryMapResetBounds from "./BakeryMapResetBounds";


export default class BakeryMap extends Component {
    
    constructor(props) {
        super(props)
        
        const queryStringParams = queryString.parse(props.location.search);
        
        this.state = {
          mapBounds: {
            southWest: {
              lat: 0,
              lng: 0
            },
            northEast: {
              lat: 0,
              lng: 0
            },
            changedBounds: false
          },
          openNow: 'openNow' in queryStringParams,
          storefronts: 'storefronts' in queryStringParams,
          delivery: 'delivery' in queryStringParams
        };
        this.firstMount = true;
        this.filters = {
            openNow: "filter%5Bis_open%5D=true",
            storefronts: "filter%5Bany_retailer_services%5D%5B%5D=storefront",
            delivery: "filter%5Bany_retailer_services%5D%5B%5D=delivery"
        }
        this.handleSelection = this.handleSelection.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }
    componentDidMount() {
        const {city} = this.props
        // switch(queryStringParams.mode){}
        const mapOptions = {
          center: { lat: city.lat, lng: city.lng }, // this is SF
          zoom: 13,
          disableDefaultUI: true
        };
        // wrap this.mapNode in a Google Map
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
        google.maps.event.addListenerOnce(this.map, "idle", () => {
            let bounds = this.map.getBounds();
            this.setState(
                {
                    mapBounds: {
                        southWest: bounds.getSouthWest().toJSON(),
                        northEast: bounds.getNorthEast().toJSON()
                    }
                },
                () => {
                    const updatePromise = new Promise((resolve, reject) => {
                        resolve(this.props.updateBounds(this.state.mapBounds));
                    })
                    updatePromise
                    .then(()=> {
                        let wmFilter = "";
                        Object.keys(this.filters).forEach(key => {
                            if (this.state[key]) {
                                wmFilter += "&" + this.filters[key];
                            }
                        })
                        this.props
                          .fetchBakeries(
                            this.state.mapBounds,
                            wmFilter
                          )
                          .then(e =>this.MarkerManager.updateMarkers(this.props.bakeries));
                        
                    });
                }
            );
        });
        this.map.addListener('idle', () => {
            let bounds = this.map.getBounds();
            if (!this.firstMount){
                this.setState(
                    {
                        mapBounds: {
                            southWest: bounds.getSouthWest().toJSON(),
                            northEast: bounds.getNorthEast().toJSON()
                        },
                        changedBounds: true
                    },
                    () => {
                        this.props.updateBounds(this.state.mapBounds);
                    }
                )
            }else{
                this.firstMount = false
            }
        })
    }
    // componentDidUpdate(){
    //     
    // }
    
    handleSelection(field){
        this.setState({
          [field]: !this.state[field]
        }, this.handleSearch);
    }

    handleSearch(){
        let filter = "";
        let i = 0;
        let wmFilter = "";
        Object.keys(this.filters).forEach(key => {
          if (this.state[key]) {
            if (i === 0) {
              filter += "?" + key;
            } else {
              filter += "&" + key;
            }
            wmFilter += "&" + this.filters[key];
            i++;
          }
        });
        this.props.fetchBakeries(this.state.mapBounds, wmFilter).then(e => {
          this.MarkerManager.updateMarkers(this.props.bakeries);
        });
        this.setState({
          changedBounds: false
        });
        this.props.history.push(this.props.location.pathname + filter);
    }
    render() {
        const {city} = this.props

        return (
          <div>
            <div id="map-header">
              <div className="navigation-container">
                <div className="navigation">
                  <Link to="/">home</Link>
                  <div className="arrow">
                    <NavigationArrow />
                  </div>
                  <a>United States</a>
                  <div className="arrow">
                    <NavigationArrow />
                  </div>
                  <a>{city.state_name}</a>
                  <div className="arrow">
                    <NavigationArrow />
                  </div>
                  <span className="selected-navigation">
                    <span>{city.name} Listings</span>
                  </span>
                </div>
              </div>
              <h1 className="listing-description">
                <span className="listing-type">Bakery Listings</span>
                <span>
                  {" "}
                  in {city.name}, {city.state_id}
                </span>
              </h1>
              <div className="listing-buttons">
                <button
                  className={this.state.openNow ? "active" : ""}
                  onClick={e => this.handleSelection("openNow")}
                >
                  Open Now
                </button>
                <button
                  className={this.state.storefronts ? "active" : ""}
                  onClick={e => this.handleSelection("storefronts")}
                >
                  Storefronts
                </button>
                <button
                  className={this.state.delivery ? "active" : ""}
                  onClick={e => this.handleSelection("delivery")}
                >
                  Delivery
                </button>
                <div className="filter-separator"></div>
                <button className="filter-button">
                  <Filters />
                  Filters
                </button>
              </div>
            </div>
            <div id="bakery-map-container">
              <div id="bakery-map" ref={map => (this.mapNode = map)}></div>
              <BakeryMapList {...this.props} />
              {this.state.changedBounds && <BakeryMapResetBounds handleSearch={this.handleSearch}/>}
            </div>
          </div>
        );
    }
}
