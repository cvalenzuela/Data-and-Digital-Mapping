//===================
// Home
//===================

import map from './map'
import images from './images'

// When DOM ready
let loaded = () =>  {
  let intro = document.getElementById('intro');
  let overlay = document.getElementById('overlay');
  let start = document.getElementById('start');
  let mapa = document.getElementById('map');
  let about = document.getElementById('about');
  let description = document.getElementById('description');
  let open = true;

  start.addEventListener('click', removeIntro);
  about.addEventListener('click', showAbout);
}

function removeIntro(){
  let map = document.getElementById('map');
  intro.className = "animated fadeOutDown";
  overlay.className = "animated fadeOutDown";
  setTimeout(function(){
    map.style.zIndex = "100";
  },0)
  setTimeout(function(){
    about.className = "animated fadeIn";
    about.style.display = "inline-block";
  },1000)

  // Add the images
  images();

}

function showAbout(){

  if(open){
    console.log("open", open)
    description.className = "animated fadeIn";
    description.style.display = "inline-block";
  }
  else{
    console.log("close", open)
    description.className = "animated fadeOut";
  }

  open = !open;

}

// On window loaded
window.addEventListener('load',loaded);
