document.getElementById("carousel").src="assets/image1.jpeg";

var imageSrc = 1
function changeImg() {
    console.log(`assets/image${imageSrc}.jpeg`);
    if (imageSrc == 8) {
        imageSrc = 1
    } else {
        imageSrc = imageSrc + 1
    }
  }
var interval = setInterval(changeImg, 50);