import React, { Component } from 'react';
import ArrowDown from "../svg/arrow_down";
import BakeryMapListItem from './BakeryMapListItem';

export default class BakeryMapList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        const {bakeries} = this.props
        return (
            <div className="bakery-map-list-container">
                <div className="bakery-map-list">
                    <div className="bakery-map-list-results">
                        <div className="bakery-map-list-results-num">
                            Showing results 1 - {Object.values(this.props.bakeries).length}
                        </div>
                        <div className="bakery-map-list-results-sort">
                            <div>
                                <button>
                                    <span>Sort By</span>
                                    <div className="arrow-down-svg"><ArrowDown/></div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="bakery-map-listings-container">
                        <div className="bakery-map-listings">
                            {Object.keys(bakeries).map(bakery => {
                                
                                return (
                                  <BakeryMapListItem
                                    key={bakeries[bakery].id}
                                    bakery={bakeries[bakery]}
                                  />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
