var menuSvg = document.getElementById("menuSvg");
var menu = document.getElementById("menu");
var curtain = document.getElementById("curtain");

var toggle = 1;

function handleClick() {
  toggle += 1;
  console.log(toggle);
  menuSvg.classList.toggle("is-opened");
  menu.classList.toggle("is-opened");

  if (toggle % 2 == 0) {
    curtain.className = "curtainOut";
    // menu.style.width = "450px";
  } else {
    curtain.className = "curtain";
    menu.style.transition = "width 0.25s ease";
    // menu.style.width = "75px";
  }
}

function handleCurtainClicks() {
  if (toggle % 2 == 0) {
    menu.classList.toggle("is-opened");
    toggle += 1;
    console.log(toggle);
    menuSvg.classList.toggle("is-opened");
    curtain.className = "curtain";
  }
}

const widgetItems = document.getElementById("widget-items");

function update() {
  const widgetItems = document.getElementById("widget-items");
  const rect = widgetItems.getBoundingClientRect();
  const xPos = rect.x;

  if (xPos > 97.5) {
    console.log(xPos);
  }
}

var moveIndex = 0;
const arrowL = document.querySelector(".left-arrow");
const arrowR = document.querySelector(".right-arrow");

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function setUpArrows(){
  var arrowR = document.querySelector(".right-arrow");
  var widgets = [].slice.call(document.getElementsByClassName("widget-item"));

  // console.log(isInViewport(widgets[widgets.length - 1]));

  if(isInViewport(widgets[widgets.length - 1])){
    arrowR.classList.add("hidden-arrow");
  } else {
    arrowR.classList.remove("hidden-arrow");
  }
}

setInterval(setUpArrows, 100);

document.addEventListener('DOMContentLoaded', setUpArrows, false);

var moveLeft = 0;

function moveWidgetsRight() {
  // var arrowL = document.getElementsByClassName("left-arrow");
  // var arrowR = document.getElementsByClassName("right-arrow");
  var widgets = [].slice.call(document.getElementsByClassName("widget-item"));
  const widgetItems = document.getElementById("widget-items");
  const widgetsRect = widgets[0].getBoundingClientRect();
  const width = widgetsRect.width;

  moveLeft -= width;

  widgetItems.style.transform = "translateX(" + moveLeft + "px)";

  console.log(moveLeft);

  moveIndex += 1;

  if (moveIndex == 1) {
    arrowL.classList.remove("hidden-arrow");
  } else if (moveIndex == 0){
    arrowL.classList.add("hidden-arrow");
  }

  // if(isInViewport(widgets[widgets.length - 1])){
  //   arrowR.classList.add("hidden-arrow");
  //   console.log("sent");
  // }
}

function moveWidgetsLeft() {
  // var arrowL = document.getElementsByClassName("left-arrow");
  // var arrowR = document.getElementsByClassName("right-arrow");
  var widgets = [].slice.call(document.getElementsByClassName("widget-item"));
  const widgetItems = document.getElementById("widget-items");
  const widgetsRect = widgets[moveIndex].getBoundingClientRect();
  const width = widgetsRect.width;

  moveLeft += width;

  widgetItems.style.transform = "translateX(" + moveLeft + "px)";

  console.log(moveLeft);

  moveIndex -= 1;

  if (moveIndex == 1) {
    arrowL.classList.remove("hidden-arrow");
  } else if (moveIndex == 0){
    arrowL.classList.add("hidden-arrow");
  }

  // if(isInViewport(widgets[widgets.length - 1])){
  //   arrowR.classList.add("hidden-arrow");
  //   console.log("sent");
  // }
}

document.addEventListener("resize", update);
update();

const widgetitems = document.getElementById("widget-items");

const getMenuPosition = () => {
  console.log(parseFloat(menu.style.left) || 0);
  return parseFloat(menu.style.left) || 0; // First time, left property is not set so initialize to 0.
};