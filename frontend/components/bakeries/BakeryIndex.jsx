import React, { Component } from 'react'
import BakeryMap from "./BakeryMap";
export default class BakeryIndex extends Component {
    render() {
        return (
          <div className="bakery-map-container">
            <BakeryMap {...this.props} />
          </div>
        );
    }
}
