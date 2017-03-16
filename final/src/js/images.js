//=====================
// Image layers
//====================



import { map } from './map'
import sources from './sources';

export default function() {

  for (let i = 1; i <= Object.keys(sources).length; i++){
    let image = './src/imgs/'+ i +'.png',
        imageBound = sources['image' + i].latlng;

    let icon = './src/imgs/vectors/3.png',
        iconBound = sources['image' + i].latlng

    let imageOverlay = L.imageOverlay(image, imageBound, {
      interactive: true,
      opacity: 0
    });

    L.imageOverlay(icon, iconBound, {
      opacity: 0.8
    }).addTo(map);

    imageOverlay.on('click', imageInfo);
    imageOverlay.addTo(map);
  }
}

function imageInfo(e){
  let number = e.target._url.substring(11,12)
  L.popup().setLatLng(e.latlng)
  .setContent(sources['image'+number].title + sources['image'+number].description + sources['image'+number].img)
  .openOn(map);

  this.setOpacity(1)
}
