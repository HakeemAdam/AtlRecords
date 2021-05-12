var title;
let txt = "The Colonizing Islands Records on the Atlantic World, 1700-1900";
let newTxt = "Not Available";
let size;

function preload() {
  ft = loadFont("assets/OldEnglishFive.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(75);
  textFont(ft);
  textAlign(LEFT, TOP);
  background(1, 33, 105);
  fill(200, 16, 46);
  text(txt, 0, 12, width);
  size = 0;
}

function draw() {
  if (mouseIsPressed) {
    rectMode(CENTER);
    noStroke();
    fill(255);
    rect(width / 2, height / 2, size * 1.77, size);
    text(newTxt, width / 2, height, 2);
    size++;
  }
}
