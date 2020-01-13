import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import DropDownArrow from './svg/drop_down_arrow';
import NextArrow from './svg/next_arrow';
import BackButton from './svg/back_button'
import OutsideClickHandler from './OutsideClickHandler'


export default class Pagination extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            openDropDown: false
        }
        this.toggleDropDown = this.toggleDropDown.bind(this)
    }
    toggleDropDown(){
        this.setState({
            openDropDown: !this.state.openDropDown
        })
    }
    
    render() {
        const { menuItemSize, itemAmount, changePage } = this.props
        const curPage = Number.parseInt(this.props.curPage)
        const { openDropDown } = this.state
        return (
            <nav className="pagination">
                <a onClick={() => changePage(curPage < 2 ? curPage : curPage - 1)} disabled={curPage === 1 ? true : false} className="back-button">
                    <BackButton />
                </a>
                <div>
                    <button onMouseUp={this.toggleDropDown}>
                        <span>
                            Page {curPage} of {Math.ceil(menuItemSize / itemAmount)}
                        </span>
                        <div>
                            <DropDownArrow />
                        </div>
                    </button>
                    {openDropDown && 
                        <OutsideClickHandler action={this.toggleDropDown} className="drop-down">
                            {[...Array(Math.ceil(menuItemSize / itemAmount)).keys()].map(i => {
                                return (
                                        <a key={i} onClick={() => {this.toggleDropDown(); changePage(i + 1)}} className={`${curPage === i + 1 ? "active" : ""}`}>
                                            Page {i + 1} of {Math.ceil(menuItemSize / itemAmount)}
                                        </a>
                                )
                            })}
                        </OutsideClickHandler>
                    }
                </div>
                <a onClick={() => changePage(Math.ceil(menuItemSize / itemAmount) === curPage ? curPage : curPage + 1)} disabled={curPage === Math.ceil(menuItemSize / itemAmount) ? true : false} className="next-button">
                    <NextArrow />
                </a>
            </nav>
        )
    }
}
