var hover = document.getElementById("hover");
var click = document.getElementById("click");
var btn = document.querySelector("button");
btn.addEventListener('mouseover', function() {
    hover.play();
}, false);

btn.addEventListener('click', function() {
    click.play();
}, false);