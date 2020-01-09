export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(bakeries) {
    let newMarkers = {};
    debugger
    Object.keys(bakeries).forEach(key => {
      if (!this.markers[key]) {
        newMarkers[key] = new google.maps.Marker({
          position: { lat: bakeries[key].latitude, lng: bakeries[key].longitude },
          map: this.map,
          title: bakeries[key].name
        });
      }
    });
    this.markers = newMarkers;
  }
  createMarkerFromBakery(bakery) {
    this.markers[bakery.id] = new google.maps.Marker({
      position: { lat: bakery.lat, lng: bakery.lng },
      map: this.map,
      title: bakery.description
    });
  }
}
