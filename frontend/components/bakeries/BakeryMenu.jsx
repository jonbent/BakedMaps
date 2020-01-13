import React, {Component} from 'react'
import BakeryMenuItem from './BakeryMenuItem';
import { Link } from "react-router-dom";

import queryString from 'query-string'

import Pagination from '../Pagination';
import ArrowUp from '../svg/arrow_up';

export default class BakeryMenu extends Component{
    constructor(props) {
        super(props)
        this.queryStringParams = queryString.parse(this.props.location.search);
        this.state={
            paginationItemAmount: 24,
            curPage: this.queryStringParams.page || 1,
            filter: this.queryStringParams.filter || "all",
            categoriesOpen: true
        }
        this.filters = {
            all: "",
            cookies: "filter%5Bany_categories%5D%5B%5D=flower",
            cakes: "filter%5Bany_categories%5D%5B%5D=edibles",
            brittle: "filter%5Bany_categories%5D%5B%5D=concentrates",
            candy: "filter%5Bany_categories%5D%5B%5D=vape-pens",
        }
        this.changePage = this.changePage.bind(this)
        this.changeFilter = this.changeFilter.bind(this)
        this.toggleCategories = this.toggleCategories.bind(this)
    }
    componentDidMount(){
        this.props.fetchMenuItems(`${this.filters[this.state.filter]}&page=${this.state.curPage}`)
    };
    changeFilter(filter){
        if (filter !== this.state.filter || this.state.curPage !== 1){
            this.setState({
                filter,
                curPage: 1
            }, () => {
                this.props.fetchMenuItems(this.filters[this.state.filter])
            })
            if (filter === "all"){
                this.props.history.push(this.props.location.pathname );
            } else {
                this.props.history.push(this.props.location.pathname + `?filter=${filter}`);
            }
        }
    }
    changePage(num){
        this.setState({
            curPage: num
        }, () => {
            this.props.fetchMenuItems(`${this.filters[this.state.filter]}&page=${this.state.curPage}`)
            this.props.history.push(`${this.props.location.pathname}?${this.state.filter !== "all" ? `&filter=${this.state.filter}` : ""}${this.state.curPage !== 1 ? `&curPage=${this.state.curPage}` : ""}`)
        })
    }
    toggleCategories(){
        this.setState({
            categoriesOpen: !this.state.categoriesOpen
        })
    }
    
    render(){
        const readableFilters = {
            all: "All Products",
            cookies: "Cookies",
            cakes: "Cakes",
            brittle: "Brittle",
            candy: "Candy"

        }
        return (
            <div className="bakery-menu-index-container">
                <div width="1" style={{boxSizing: 'border-box', width: "100%"}}></div>
                <div className="bakery-menu-index">
                    <div className="bakery-menu">
                        <div className="bakery-filters">
                            <div className="title"><h2>Filters</h2></div>
                            <div className="categories-container">
                                <button onClick={this.toggleCategories}>
                                    Categories
                                    {this.state.categoriesOpen ? 
                                        <ArrowUp rotate="180"/>
                                        : 
                                        <ArrowUp/>
                                    }
                                    </button>
                                {this.state.categoriesOpen && <div className="categories">
                                    <a onClick={e => this.changeFilter("all")} className={this.state.filter === "all" ? "active" : ""}>
                                        All Products
                                    </a>
                                    <a onClick={e => this.changeFilter('cookies')} className={this.state.filter === "cookies" ? "active" : ""}>
                                        Cookies
                                    </a>
                                    <a onClick={e => this.changeFilter('cakes')} className={this.state.filter === "cakes" ? "active" : ""}>
                                        Cakes
                                    </a>
                                    <a onClick={e => this.changeFilter('brittle')} className={this.state.filter === "brittle" ? "active" : ""}>
                                        Brittle
                                    </a>
                                    <a onClick={e => this.changeFilter('candy')} className={this.state.filter === "candy" ? "active" : ""}>
                                        Candy
                                    </a>
                                </div>
                                }
                            </div>
                        </div>
                        <div className="bakery-items">
                            <div className="search-and-sort">
                            </div>
                            <div className="categories-container">
                                <div className="categories">
                                    <button onClick={e => this.changeFilter("all")} className={this.state.filter === "all" ? "active" : ""}>
                                        All Products
                                    </button>
                                    <button onClick={e => this.changeFilter('cookies')} className={this.state.filter === "cookies" ? "active" : ""}>
                                        Cookies
                                    </button>
                                    <button onClick={e => this.changeFilter('cakes')} className={this.state.filter === "cakes" ? "active" : ""}>
                                        Cakes
                                    </button>
                                    <button onClick={e => this.changeFilter('brittle')} className={this.state.filter === "brittle" ? "active" : ""}>
                                        Brittle
                                    </button>
                                    <button onClick={e => this.changeFilter('candy')} className={this.state.filter === "candy" ? "active" : ""}>
                                        Candy
                                    </button>
                                </div>
                            </div>
                            <div className="category-name">
                                <h3>{readableFilters[this.state.filter]}</h3>
                            </div>
                            <ol className="bakery-list">
                                {this.props.menuItems.map(menuItem => {
                                    return <BakeryMenuItem menuItem={menuItem} key={menuItem.id} bakery={this.props.bakery}/>
                                })}
                            </ol>
                            <div className="pagination-container">
                                <Pagination curPage={this.state.curPage} path={this.props.location.pathname} itemAmount={this.state.paginationItemAmount} menuItemSize={this.props.menuItemSize} changePage={this.changePage}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

