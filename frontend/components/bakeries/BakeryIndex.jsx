import React, { Component } from 'react'
import BakeryMap from "./BakeryMap";
import BakeryMapList from "./BakeryMapList";
export default class BakeryIndex extends Component {
    render() {
        return (
          <div className="bakery-map-container">
            <BakeryMap {...this.props} />
          </div>
        );
    }
}
