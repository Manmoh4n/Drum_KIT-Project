document.querySelector(".a").addEventListener("click",a)
document.querySelector(".w").addEventListener("click", w)
document.querySelector(".s").addEventListener("click", s)
document.querySelector(".d").addEventListener("click", d)
document.querySelector(".j").addEventListener("click", j)
document.querySelector(".k").addEventListener("click",k )
document.querySelector(".l").addEventListener("click",l )

function a (){
  var audio = new Audio("sounds/tom-2.mp3");
  audio.play();
}
function w (){
  var audio = new Audio("sounds/kick-bass.mp3");
  audio.play();
}
function s (){
  var audio = new Audio("sounds/tom-3.mp3");
  audio.play();
}
function d (){
  var audio = new Audio("sounds/tom-1.mp3");
  audio.play();
}
function j (){
  var audio = new Audio("sounds/crash.mp3");
  audio.play();
}
function k (){
  var audio = new Audio("sounds/snare.mp3");
  audio.play();
}
function l (){
  var audio = new Audio("sounds/tom-4.mp3");
  audio.play();
}
