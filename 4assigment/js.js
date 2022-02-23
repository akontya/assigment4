var i = 0 ;
var images = [];
var time = 1000;

images[0] = "https://www.wptunnel.com/wp-content/uploads/2021/08/wptunnel-lamborghini-wallpaper-4.jpg";
images[1] = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKUfym5iicCcxhzazAVsABx2ygPa4yjGdekA&usqp=CAU";
images[2] = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXB8hAUuZxP3c8WViohpQ_18_iIToyHy4Wsg&usqp=CAU";

function slideShow(){
  document.slideshow.src = images[i];
  if ( i < images.lenght - 1){
    i++;
  }
  else{
    i =  0 ;
  }


  setTimeout("slideShow()", time);


}
window.onload = slideShow;




var x = document.getElementById("myAudio");

function playAudio() {
  x.play();
}


document.getElementById("groupname").innerHTML = "OUR GROUP";



let start = Date.now(); // remember start time

let timer = setInterval(function() {
  // how much time passed from the start?
  let timePassed = Date.now() - start;

  if (timePassed >= 2000) {
    clearInterval(timer); // finish the animation after 2 seconds
    return;
  }

  // draw the animation at the moment timePassed
  draw(timePassed);

}, 20);

// as timePassed goes from 0 to 2000
// left gets values from 0px to 400px
function draw(timePassed) {
  littlecar.style.left = timePassed / 5 + 'px';
}