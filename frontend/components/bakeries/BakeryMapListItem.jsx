import React from 'react'

import {Link} from 'react-router-dom'

const BakeryMapListItem = ({bakery}) => {
    const urlType = 
      bakery.type === "delivery"
        ? "deliveries" 
        : bakery.type === 'store' 
        ? "stores"
        : "bakeries"

    const bakeryType =
      bakery.license_type === "hybrid"
        ? "Medical & Recreational"
        : bakery.license_type === "recreational" 
        ? "Recreational" : "Medical"
    return (
      <div className="bakery-map-listing-item">
        <div className="bakery-map-listing-item-card">
          <Link to={`/${urlType}/${bakery.slug}`}>
            <div>
              <div className="item-card-picture-container">
                <img
                  src={bakery.avatar_image.small_url}
                  alt={bakery.name}
                  className="item-card-picture"
                />
              </div>
              <div className="item-card-info-container">
                <div className="item-card-info-name">{bakery.name}</div>
                <div className="item-card-info-rating">
                  Reviews: {bakery.reviews_count}
                </div>
                <div className="item-card-info-info">
                  <span>
                    {bakery.type[0].toUpperCase() + bakery.type.slice(1)}
                  </span>
                  <span className="styled-dot">·</span>
                  <span>{bakeryType}</span>
                </div>
                <div className="item-card-info-closing"></div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
}

export default BakeryMapListItem
