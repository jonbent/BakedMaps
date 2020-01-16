export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
    this.icons = {
      car: {
        url: window.carSvg,
        anchor: new google.maps.Point(25, 50),
        scaledSize: new google.maps.Size(50, 50)
      },
      store: {
        url: window.storeSvg,
        anchor: new google.maps.Point(25, 50),
        scaledSize: new google.maps.Size(50, 50)
      }
    };
  }

  updateMarkers(bakeries) {
    let newMarkers = {};
    Object.keys(this.markers).forEach(key => this.markers[key].setMap(null))
    Object.keys(bakeries).forEach(key => {
        let icon = this.icons.store
        if (bakeries[key].type === "delivery") icon = this.icons.car
        newMarkers[key] = new google.maps.Marker({
          position: {
            lat: bakeries[key].latitude,
            lng: bakeries[key].longitude
          },
          map: this.map,
          title: bakeries[key].name,
          icon
        });
    });
    this.markers = newMarkers;
  }
  createMarkerFromBakery(bakery) {
    this.markers[bakery.id] = new google.maps.Marker({
      position: { lat: bakery.lat, lng: bakery.lng },
      map: this.map,
      title: bakery.description,
      icon: this.icons.car,
      zIndex: -20
    });
  }
}
