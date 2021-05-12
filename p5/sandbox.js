let img;
let images = [];
const PATH = "assets/",
  FILE = "image",
  EXT = ".jpg";
let change = false;
var title;
var randImgLoc;
let txt = "The Colonizing Islands Records on the Atlantic World, 1700-1900";
let newTxt ="Not Available";
let size;

function preload() {
  // Load the image
  ft = loadFont("assets/OldEnglishFive.ttf");
  // img = loadImage("assets/image1.png");
  // img1 = loadImage("assets/image3.png");
  for (var i = 0; i < 1; i++) {
    images[i] = loadImage(PATH + FILE + ++i + EXT);
  }
  var imagesLenght = round(random(images.length - 1));
  var imChoice = images[imagesLenght];
  img = imChoice;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(80);
  textFont(ft);
  textAlign(LEFT, TOP);
  pixelDensity(1);
  size=0;

  // Important! We need to resize to the same size as the canvas here
  //img.resize(width-300, height-300);
  // img1.resize(width-300,height-300);

  imageMode(CENTER);
  background(1, 33, 105);
  fill(200, 16, 46);
  text(txt, 0, 12, width);
}

function draw() {
  if (mouseIsPressed){
    rectMode(CENTER);
    noStroke();
    fill(255, 255, 255);
    rect(width/2, height/2, size, size);
    text(newTxt, width/2, height,2);
    size ++;
  }
}

function mousePressed() {


}

function imageMan() {

  // Tell p5 we're working with pixels

  img.loadPixels();

  const newPixels = [];

  //Loop through the pixels
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      // Get the index for our current pixel
      const index = (y * width + x) * 4;

      // And the index for one pixel to the right
      let nextIndex = (y * width + x) * 4 + 4 * int(random(-20, 20));
      nextIndex = nextIndex % (width * height * 4);

      const r = img.pixels[nextIndex + 0];
      const g = img.pixels[nextIndex + 1];
      const b = img.pixels[nextIndex + 2];

      newPixels.push(r, g, b, 255);
    }
  }
  for (let i = 0; i < width * height; i++) {
    let index = i * 4 + 4;
    let r = img.pixels[index];
    let g = img.pixels[index + 1];
    let b = img.pixels[index + 2];

    newPixels.push(r, g, b, 255);
  }

  for (let i = 0; i < newPixels.length; i++) {
    img.pixels[i] = newPixels[i];
  }

  // We're finished working with pixels
  img.updatePixels();

  // Draw the images
  image(img, width / 2, height / 2);
}
