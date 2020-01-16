export default ({ lat: lat1, lng: lon1}, {lat: lat2, lng: lon2}) => {
    const R = 6371e3; // metres
    const lat1Rads = lat1.toRadians();
    const lat2Rads = lat2.toRadians();
    const latDiffRads = (lat2 - lat1).toRadians();
    const lonDiffRads = (lon2 - lon1).toRadians();

    const a = Math.sin(latDiffRads / 2) * Math.sin(latDiffRads / 2) +
        Math.cos(lat1Rads) * Math.cos(lat2Rads) *
        Math.sin(lonDiffRads / 2) * Math.sin(lonDiffRads / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
}