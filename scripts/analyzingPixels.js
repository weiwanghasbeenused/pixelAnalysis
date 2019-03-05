var listU = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var listL = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var listG = ["1","2","3","4","5","6","7","8","9","0","!","@","#","$","%","^","&","*","(",")","_","-","&ndash;","&mdash;","+","=","{","}","[","]","|","&bsol;",":",";","&ldquo;","&lsquo;","<",">",",",".","?","/"];
var list = [];
var img = [];
var imgUrls = [];
var can;
var pixelCounter = [];
var begin;
var lNum;
var rootFolder = "images/Helvatica/Helvatica-";


input("listG");

for(i = 0;i<lNum;i++){
  imgUrls[i] = rootFolder+(i+1+begin)+".jpg";
  pixelCounter[i] = 0;
}

function preload(){
  for(i = 0;i<lNum;i++){
    img[i] = loadImage(imgUrls[i]);
  }
}
function setup() {
  can = createCanvas(img[0].width, img[0].height);
  for(h = 0;h<lNum;h++){
    image(img[h], 0, 0);
    img[h].loadPixels();
    for (var i = 0; i < height; i++) {
      for (var j = 0; j < width; j++) {
        var index = (i * width + j) * 4
        var r = img[h].pixels[index + 0];
        var g = img[h].pixels[index + 1];
        var b = img[h].pixels[index + 2];
        if(r+g+b < 390){
          pixelCounter[h]++;
        }
      }
    }
    console.log(list[h]+" = "+pixelCounter[h]);
  }
}
function input(l){
  if(l=="listU"){
    begin = 0;
    lNum = listU.length;
    list = listU;
  }else if(l=="listL"){
    begin = listU.length;
    console.log(begin);
    lNum = listL.length;
    list = listL;
  }else if(l=="listG"){
    console.log("ta load me?");
    begin = listU.length+listL.length;
    lNum = listG.length;
    list = listG;
  }
}



function draw() {  
}