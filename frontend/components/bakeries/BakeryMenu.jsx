import React, {Component} from 'react'
import BakeryMenuItem from './BakeryMenuItem';
import { Link } from "react-router-dom";

import queryString from 'query-string'

import Pagination from '../Pagination';

export default class BakeryMenu extends Component{
    constructor(props) {
        super(props)
        this.queryStringParams = queryString.parse(this.props.location.search);
        this.state={
            paginationItemAmount: 24,
            curPage: this.queryStringParams.page || 1
        }
    }
    componentDidMount(){
    "page" in this.queryStringParams && this.setState({ curPage: this.queryStringParams.page })
      this.props.fetchMenuItems()
    };
    
    render(){
        const {selectedFilter = "All Products"} = this.props;
        return (
            <div className="bakery-menu-index-container">
                <div width="1" style={{boxSizing: 'border-box', width: "100%"}}></div>
                <div className="bakery-menu-index">
                    <div className="bakery-menu">
                        <div className="bakery-filters">
                            <div className="title"><h2>Filters</h2></div>
                            <div className="categories">
    
                            </div>
                        </div>
                        <div className="bakery-items">
                            <div className="search-and-sort">
                            </div>
                            <div className="categories-container">
                                <div className="categories">
    
                                </div>
                            </div>
                            <div className="category-name">
                                <h3>{selectedFilter}</h3>
                            </div>
                            <ol className="bakery-list">
                                {this.props.menuItems.map(menuItem => {
                                    return <BakeryMenuItem menuItem={menuItem} key={menuItem.id} bakery={this.props.bakery}/>
                                })}
                            </ol>
                            <div className="pagination-container">
                                <Pagination curPage={this.state.curPage} path={this.props.location.pathname} itemAmount={this.state.paginationItemAmount} menuItemSize={this.props.menuItemSize}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

