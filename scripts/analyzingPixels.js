var img;
var imgUrls = [];
var can;
var pixelCounter = 0;
imgUrls[0] = "images/Helvatica/Helvatica_A.jpg";
imgUrls[1] = "images/Helvatica/Helvatica_test_bar.jpg"
imgUrls[2] = "images/Helvatica/Helvatica_test_circle.jpg"
function preload(){
  img = loadImage(imgUrls[1]);
}
function setup() {
  can = createCanvas(img.width, img.height);
  image(img, 0, 0);
  img.loadPixels();
  for (var i = 0; i < height; i++) {
    for (var j = 0; j < width; j++) {
      var index = (i * width + j) * 4
      var r = img.pixels[index + 0];
      var g = img.pixels[index + 1];
      var b = img.pixels[index + 2];
      if(r+g+b < 390){
      	pixelCounter++;
      }
    }
  }
  console.log(pixelCounter);
  console.log(height*width);
}

function draw() {
  // background(220);

  
}