/*!
* Start Bootstrap - Bare v5.0.9 (https://startbootstrap.com/template/bare)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
  const ENABLE_HOVER_DELAY = 200;  
let timer;
window.addEventListener('scroll', function() {
  const bodyClassList = document.body.classList;
  // clear previous timeout function
  clearTimeout(timer);
    
  if (!bodyClassList.contains('disable-hover')) {
    // add the disable-hover class to the body element
    bodyClassList.add('disable-hover');
  }
        
  timer = setTimeout(function() {
    // remove the disable-hover class after a timeout of 500 millis
    bodyClassList.remove('disable-hover');
  }, ENABLE_HOVER_DELAY);
  
}, false);

var mySelect = document.getElementById('yearSelect');
 mySelect.onchange = (event) => { //catch select option changes.
     var inputText = event.target.value; // get selected option value.

  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (inputText == "all") inputText = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].classList.contains(inputText)) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
     element.classList.add(name);
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
   element.classList.remove(name);
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
   btns[i].addEventListener("click", function() {
   var current = document.getElementsByClassName("active");
   current[0].className = current[0].className.replace(" active", "");
   this.className += " active";
   });
}

var mySelect = document.getElementById('yearSelect2');
 mySelect.onchange = (event) => { //catch select option changes.
     var inputText = event.target.value; // get selected option value.

  var x, i;
  x = document.getElementsByClassName("filterDivAlt");
  if (inputText == "all") inputText = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].classList.contains(inputText)) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
     element.classList.add(name);
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
   element.classList.remove(name);
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer2");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
   btns[i].addEventListener("click", function() {
   var current = document.getElementsByClassName("active");
   current[0].className = current[0].className.replace(" active", "");
   this.className += " active";
   });
}