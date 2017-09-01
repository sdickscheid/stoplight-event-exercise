(function() {
  'use strict';

  // YOUR CODE HERE

let stop = document.getElementById("stopButton");
let stopB = document.getElementById("stopLight");
  stop.addEventListener("click", function(){
    if(stopB.style.background === "red"){
      stopB.style.background = "black";
    } else {
      stopB.style.background = "red";
    }
})

let slow = document.getElementById("slowButton");
let slowB = document.getElementById("slowLight");
  slow.addEventListener("click", function(){
    if(slowB.style.background === "yellow"){
      slowB.style.background = "black";
    } else {
      slowB.style.background = "yellow";
    }
})

let go = document.getElementById("goButton");
let goB = document.getElementById("goLight");
  go.addEventListener("click", function(){
    if(goB.style.background === "green"){
      goB.style.background = "black";
    } else {
      goB.style.background = "green";
    }
})
// MouseEnter & MouseLeave Code
  document.getElementById("stopButton").addEventListener("mouseenter", mouseEnter);
  document.getElementById("stopButton").addEventListener("mouseleave", mouseLeave);

  document.getElementById("slowButton").addEventListener("mouseenter", mouseEnter);
  document.getElementById("slowButton").addEventListener("mouseleave", mouseLeave);

  document.getElementById("goButton").addEventListener("mouseenter", mouseEnter);
  document.getElementById("goButton").addEventListener("mouseleave", mouseLeave);

function mouseEnter(){
  let button_type = this.getAttribute("id");
  console.log("Entered the "+button_type);
}

function mouseLeave(){
  let button_type = this.getAttribute("id");
  console.log("leaving the "+button_type);
}

})();
