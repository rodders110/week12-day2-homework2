const app = function(){

  let coords = [57.812692,-8.586676]
  let otherCoords = [57.868554,-8.490168]
  let zoom = 12;
  let containerID = 'main-map'
  let button = document.getElementById('button');
  console.log(button);


  const mainMap = new MapWrapper(containerID, coords, zoom);
  mainMap.addMarker(coords);
  mainMap.addMarker(otherCoords);


  button.addEventListener('click', function(){
    mainMap.map.setView([55.864237,-4.251806], 12);
    console.log(mainMap);
  });
}



window.addEventListener('DOMContentLoaded', app);
