import React from 'react';
import Clock from '../svg/clock';
import '../../scss/bakeries/BakeryHours.scss';
const BakeryHours = ({bakery}) => {
    if (!bakery.business_hours) return null;
    return (
        <div className="hours">
            <dl>
                <Clock fill="#999999" size={22} />
                <dt className={bakery.open_now ? "" : "closed-day"}>{bakery.open_now ? "Open Now" : "Closed"}</dt>
                <dd>{bakery.todays_hours_str}</dd>
            </dl>
            {Object.keys(bakery.business_hours).map(day => {
                return bakery.business_hours[day].is_closed ? (
                    <dl key={day}>
                        <dt>{day}</dt>
                        <dd className="closed-day">CLOSED</dd>
                    </dl>
                ) : (
                    <dl key={day}>
                        <dt>{day}</dt>
                        <dd>{bakery.business_hours[day].open} - {bakery.business_hours[day].close}</dd>
                    </dl>
                )
            })}
        </div>
    )
}

export default BakeryHours
