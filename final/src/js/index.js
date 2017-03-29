//===================
// Home
//===================

import map from './map'
import images from './images'
import moveMap from './move'

// When DOM ready
let loaded = () =>  {
  let intro = document.getElementById('intro');
  let overlay = document.getElementById('overlay');
  let start = document.getElementById('start');
  let mapa = document.getElementById('map');
  let about = document.getElementById('about');
  let description = document.getElementById('description');
  let instructions = document.getElementById('instructions');
  let zoomout = document.getElementById('zoomout');
  let move = document.getElementById('move');
  let title = document.getElementById('title');
  let open = true;

  start.addEventListener('click', removeIntro);
  about.addEventListener('click', showAbout);
  move.addEventListener('click', moveMap);
}

function removeIntro(){
  let map = document.getElementById('map');
  intro.className = "animated fadeOutDown";
  overlay.className = "animated fadeOutDown";

  setTimeout(function(){
    map.style.zIndex = "100";
  },0)

  setTimeout(function(){
    about.className = "animated fadeInRight";
    about.style.display = "inline-block";
    instructions.className = "animated fadeInLeft";
    instructions.style.display = "inline-block";
  },1000)

  setTimeout(function(){
    title.className = "animated fadeIn";
    title.style.display = "inline-block";
  },1500)

  // Add the images
  images();

  // Once all points are clicked, show the zoom out
  // zoomout.className = "animated fadeInLeft";
  // zoomout.style.display = "inline-block";

}

function showAbout(){

  if(open){
    description.className = "animated fadeIn";
    description.style.display = "inline-block";
  }
  else{
    description.className = "animated fadeOut";
    setTimeout(function(){
      description.style.display = "none";
    },500)

  }

  open = !open;

}

// On window loaded
window.addEventListener('load',loaded);
