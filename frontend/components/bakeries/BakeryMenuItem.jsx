import React from 'react'
import {Link} from 'react-router-dom'
const BakeryMenuItem = ({menuItem, bakery}) => {
    return (
        <li>
            <div>
                <Link to={`/bakeries/${bakery.slug}/menu/${menuItem.slug}`}>
                    <div className="menu-item-info-container">
                        <div className="menu-item-info">
                            <div className="menu-item-avatar-container">
                                <div className="menu-item-avatar">
                                    <img src={menuItem.avatar_image.original_url} alt={menuItem.name}/>
                                </div>
                            </div>
                            <div className="prices-and-name">
                                <div className="name-and-type-container">
                                    <div className="name-and-type">
                                        <span>{menuItem.edge_category.name} | {menuItem.genetics_tag.name}</span>
                                        <div className="name-container">
                                            <div className="name">
                                                {menuItem.name}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="whitespace"></div>
                                </div>
                                <div className="prices-container">
                                    <div className="prices">
                                        {menuItem.prices.ounce.map(price => {
                                            return (
                                                <div key={price.price} className="price-and-unit">
                                                    <div className="unit">
                                                        <span>{price.units}</span>
                                                    </div>
                                                    <span className="price">${price.price}</span>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </li>
    )
}

export default BakeryMenuItem
