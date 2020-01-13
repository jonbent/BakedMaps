export const RECEIVE_BAKERIES = "RECEIVE_BAKERIES"
export const RECEIVE_BAKERY = "RECEIVE_BAKERY";
import * as WMApiUtil from '../util/WMApiUtil';

const receiveBakeries = (payload) => ({
    type: RECEIVE_BAKERIES,
    payload
})
const receiveBakery = (payload) => ({
    type: RECEIVE_BAKERY,
    payload
})

export const fetchBakeries = ({
        southWest: { lat: lat1, lng: long1 },
        northEast: { lat: lat2, lng: long2 }
    }, filter) => dispatch => {
    return WMApiUtil.findBoundingBoxDispensaries({ lat1, lat2, long1, long2, filter}).then(res => {
        dispatch(receiveBakeries(res))
    });
};
export const fetchBakery = (bakerySlug, bakeryType) => dispatch => {
         return WMApiUtil.fetchBakery(bakerySlug, bakeryType).then(res => {
           dispatch(receiveBakery(res));
         });
       };