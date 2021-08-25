

for (var i = 0; i < document.querySelectorAll("button").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {

    var btnText = this.innerHTML;
      checkSwitch(btnText);
      buttonAnim(btnText);
  });
}


document.addEventListener("keydown",function(event){
  checkSwitch(event.key);
  buttonAnim(event.key);
})

function buttonAnim(keypressed){
  var anime = document.querySelector("."+keypressed);
  anime.classList.add("clicked");

  setTimeout(function(){
    anime.classList.remove("clicked");
  },100);

}


function checkSwitch(text){
  switch (text) {
    case "W":
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case "A":
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case "S":
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    case "D":
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;
    case "J":
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;
    case "K":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
    case "L":
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;
    default:
    console.log(btnText);
  }
}
