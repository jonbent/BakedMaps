import React from 'react'
import CheckMark from "../svg/check_mark";
const SignupSplash = () => {
    return (
      <div>
        <h2>
          Connecting you to the best bakeries, deliveries, and deals in America
        </h2>
        <ul className="check-list">
          <li>
            <div className="check-list-checkmark">
              <CheckMark />
            </div>
            <div className="check-list-info">
              Find the best cookie storefronts
            </div>
          </li>
          <li>
            <div className="check-list-checkmark">
              <CheckMark />
            </div>
            <div className="check-list-info">
              See who delivers in your neighborhood
            </div>
          </li>
          <li>
            <div className="check-list-checkmark">
              <CheckMark />
            </div>
            <div className="check-list-info">Discover awesome deals </div>
          </li>
          <li>
            <div className="check-list-checkmark">
              <CheckMark />
            </div>
            <div className="check-list-info">
              Track your favorite places and products
            </div>
          </li>
          <li>
            <div className="check-list-checkmark">
              <CheckMark />
            </div>
            <div className="check-list-info">
              Enjoy peace of mind that you're getting the best of the best.
            </div>
          </li>
        </ul>
      </div>
    );
}

export default SignupSplash
