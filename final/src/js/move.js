//=====================
// Move to a location
//====================

import { map } from './map'

let location = 0;
let amount = document.getElementById('amount');
let zoomout = document.getElementById('zoomout');
let zoomFinal = [[40.793278730537196, -73.86451721191408], [40.702244436175114, -74.08836364746095]]

zoomout.addEventListener('click', zoomOut);

export default function() {

  let locations = [
    [[40.709003135551285,-73.99242639541627], [40.70333433299923,-74.00061249732973]],
    [[40.73898201597662, -73.98872494697572], [40.734388894945276, -73.99797320365907]],
    [[40.74092485137503,-73.99977564811708], [40.7366733009731,-74.00642752647401]],
    [[40.74898823106307,-73.97880077362062], [40.74424948825697,-73.98751258850099]],
    [[40.76794795111506,-73.98058176040651], [40.758472830416466,-73.99798393249513]],
    [[40.774838099549356,-73.9492964744568], [40.76832172749444,-73.96515369415285]],
    [[40.800848467258646,-73.94938230514528], [40.789526030330876,-73.96575450897218]]
  ];

  if (location < 7){
    amount.innerHTML = '(' + parseInt(location+1)+ '/7)';
    map.flyToBounds(locations[location], {duration: 6.25, zoom: 17});
    location++;
  }
  if (location > 6) {
    zoomout.className = "animated fadeInLeft";
    zoomout.style.display = "inline-block";
  }
}


function zoomOut(){
  map.flyToBounds(zoomFinal, {duration: 8.25, zoom: 17});
}
