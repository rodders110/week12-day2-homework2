const MapWrapper = function(container,coords, zoom){
const osmLayer = new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");

  this.map = L.map(container).setView(coords, zoom).addLayer(osmLayer);
  var popup = L.popup()
    .setLatLng([57.812692,-8.586676])
    .setContent("St Kilda (Scottish Gaelic: Hiort) is an isolated archipelago situated 64 kilometres (40 mi) west-northwest of North Uist, in the North Atlantic Ocean.")
    .openOn(this.map);
  this.map.on('click', function(event){
    let newCoords = [event.latlng.lat, event.latlng.lng];
    this.addMarker(newCoords);
  }.bind(this));
}

MapWrapper.prototype.addMarker = function (coords) {
  // debugger;
  L.marker(coords).addTo(this.map);
};
