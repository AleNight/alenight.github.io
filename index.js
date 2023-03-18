let prevScrollpos = window.pageYOffset;
let navbar = document.querySelector(".navbar");
let logo = document.querySelector(".logo");
let row = document.querySelector(".row");

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (currentScrollPos == 0) {
    navbar.classList.remove("scroll-up");
    navbar.classList.remove("scroll-down");
    logo.classList.remove("scroll-up");
    logo.classList.remove("scroll-down");
    row.classList.remove("scroll-up");
    row.classList.remove("scroll-down");
  } else if (prevScrollpos < currentScrollPos && currentScrollPos > 1250) {
    navbar.classList.add("scroll-up");
    navbar.classList.add("scroll-down");
    logo.classList.add("scroll-up");
    logo.classList.add("scroll-down");
    row.classList.add("scroll-up");
    row.classList.add("scroll-down");
  } else if (currentScrollPos > 125) {
    navbar.classList.add("scroll-up");
    navbar.classList.remove("scroll-down");
    logo.classList.add("scroll-up");
    logo.classList.remove("scroll-down");
    row.classList.add("scroll-up");
    row.classList.remove("scroll-down");
  }
  prevScrollpos = currentScrollPos;
};

var hover = document.getElementById("hover");
var click = document.getElementById("click");

document.querySelectorAll('.row-link').forEach( button => {
  button.onclick = function () {
    click.play();
  }
  button.onmouseover = function () {
    hover.play();
  }
  button.onmouseleave = function () {
    hover.currentTime = 0;
  }
});