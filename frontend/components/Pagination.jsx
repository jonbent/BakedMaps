import React from 'react';
import {Link} from 'react-router-dom';
import DropDownArrow from './svg/drop_down_arrow';
import NextArrow from './svg/next_arrow';
import BackButton from './svg/back_button'
const Pagination = ({path, curPage, itemAmount, menuItemSize}) => {
    return (
        <nav className="pagination">
            <Link to={curPage < 2 ? path : `${path}?page=${curPage - 1}`} disabled={curPage === 1 ? true : false} className="back-button">
                <BackButton />
            </Link>
            <div>
                <button>
                    <span>
                        Page {curPage} of {Math.ceil(menuItemSize / itemAmount)}
                    </span>
                    <div>
                        <DropDownArrow />
                    </div>
                </button>
            </div>
            <Link to={Math.ceil(menuItemSize / itemAmount) === curPage ? `${path}?page=${curPage}` : `${path}?page=${Number.parseInt(curPage) + 1}`} disabled={curPage === Math.ceil(menuItemSize / itemAmount) ? true : false} className="next-button">
                <NextArrow />
            </Link>
        </nav>
    )
}

export default Pagination
