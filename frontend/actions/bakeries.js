export const RECEIVE_BAKERIES = "RECEIVE_BAKERIES"
import * as WMApiUtil from '../util/WMApiUtil'

const receiveBakeries = (payload) => ({
    type: RECEIVE_BAKERIES,
    payload
})

export const fetchBakeries = ({
        southWest: { lat: lat1, lng: long1 },
        northEast: { lat: lat2, lng: long2 }
    }) => dispatch => {
    return WMApiUtil.findBoundingBoxDispensaries({ lat1, lat2, long1, long2 }).then(res => {
        dispatch(receiveBakeries(res))
    });
};