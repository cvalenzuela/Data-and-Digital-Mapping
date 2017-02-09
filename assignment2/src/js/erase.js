//=====================
// Erase All
//====================

import {map} from './map'
import {path} from './animation'
import {animatedMarker} from './marker'
import {data} from './showall'

export default function () {
  if(path != null){
    map.removeLayer(path);
  }
  if(animatedMarker != null){
    map.removeLayer(animatedMarker);
  }
  if(data != null){
    map.removeLayer(data);
  }
}
