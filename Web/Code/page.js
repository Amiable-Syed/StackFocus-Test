// Initialize and add the map
function initMap() {
  // The location of london eye
  const london_eye = { lat: 51.503399, lng: -0.119519 };
  // The map, centered at london eye
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: london_eye,
  });
  // The marker, positioned at london eye
  const marker = new google.maps.Marker({
    position: london_eye,
    map: map,
  });
}