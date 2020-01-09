import React, { Component } from 'react'
import MarkerManager from '../../util/MarkerManager'

export default class BakeryMap extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            mapBounds: {
                southWest: {
                    lat: 0,
                    lng: 0
                },
                northEast: {
                    lat: 0,
                    lng: 0
                }
            }
        };
    }
    componentDidMount() {
        
        const mapOptions = {
          center: { lat: 37.7758, lng: -122.435 }, // this is SF
          zoom: 13
        };
        // wrap this.mapNode in a Google Map
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
        this.map.addListener("idle", () => {
          let bounds = this.map.getBounds();
          this.setState(
            {
              mapBounds: {
                southWest: bounds.getSouthWest().toJSON(),
                northEast: bounds.getNorthEast().toJSON()
              }
            },
            () => {
              this.props.updateBounds(this.state.mapBounds);
              this.props
                .fetchBakeries(this.state.mapBounds)
                .then(e =>
                  this.MarkerManager.updateMarkers(this.props.bakeries)
                );
            }
          );
        });
    }
    
    
    render() {
        return (
            <div id="bakery-map" ref={ map => this.mapNode = map }></div>
        )
    }
}
