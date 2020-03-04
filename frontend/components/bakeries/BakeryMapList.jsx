import React, { Component } from 'react';
import ArrowDown from "../svg/arrow_down";
import BakeryMapListItem from './BakeryMapListItem';
import SortByModal from './SortByModal'
import OutsideClickHandler from '../OutsideClickHandler'

export default class BakeryMapList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             sortByOpen: false
        }
        this.openCloseSortBy = this.openCloseSortBy.bind(this)
    }
    openCloseSortBy(){
        this.setState({
          sortByOpen: !this.state.sortByOpen
        });
    }
    
    render() {
        const {bakeries, handleBakerySelect} = this.props;
        const bakeryKeys = Object.values(this.props.bakeries);
        return (
            <div className="bakery-map-list-container">
                <div className="bakery-map-list">
                    <div className="bakery-map-list-results">
                        <div className="bakery-map-list-results-num">
                            {bakeryKeys.length ? (
                                <span>Showing results 1 - {bakeryKeys.length}</span>

                            ) : (
                                <span>No Results Found</span>
                            )
                            }
                        </div>
                        
                        <div className="bakery-map-list-results-sort">
                            <div onMouseUp={this.openCloseSortBy}>
                                <button>
                                    <span>Sort By</span>
                                    <div className="arrow-down-svg"><ArrowDown/></div>
                                </button>
                            </div>
                            {
                                this.state.sortByOpen && 
                                    <OutsideClickHandler action={this.openCloseSortBy}>
                                        <SortByModal handleSortBy={this.props.handleSortBy}/>
                                    </OutsideClickHandler>
                            }
                        </div>
                        
                    </div>
                    <div className="bakery-map-listings-container">
                        <div className="bakery-map-listings">
                            {Object.keys(bakeries).map((bakery, idx) => {
                                return (
                                  <BakeryMapListItem
                                    key={idx}
                                    bakery={bakeries[bakery]}
                                    handleBakerySelect={handleBakerySelect}
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
