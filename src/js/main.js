"use strict";

console.log(`Hello world!`);

// function playPause() {
//     if (document.getElementById(`changeToPause`).src == "./zdjęcia/play.png")
//     {
//         document.getElementById(`changeToPause`).src = "./zdjęcia/play.png"
//     }else
//     {
//         document.getElementById(`changeToPause`).src = "./zdjęcia/pause.png"
//     }

// }

let playing = true;
function playPause() {
  if (playing) {
    const song = document.querySelector('#song')
    pPause.src = "../assets/zdjęcia/play.png"; 

    song.play(); 
    playing = false;
  } else {
    pPause.src = "./assets/icons/play.png"

    
 
    song.pause();
    playing = true;
  }
}