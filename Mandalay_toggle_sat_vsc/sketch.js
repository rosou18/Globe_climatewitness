let imgBefore, imgAfter;
let pop1992 = 683000;
let pop2022 = 1500000;
let font;

function preload() {
  imgBefore = loadImage("myanmar_sat_1992.jpg");
  imgAfter = loadImage("myanmar_sat_2022.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CORNER);
  textFont("Arial", 16);
  noCursor();
}

function draw() {
  background(0);
  
  let sliderX = constrain(mouseX, 0, width);
  
  // Draw 1992 base image
  image(imgBefore, 0, 0, width, height);
  
  // Overlay 2022 image partially
  copy(
    imgAfter,
    0, 0,
    imgAfter.width * (sliderX / width), imgAfter.height,
    0, 0,
    sliderX, height
  );
  
  // Invisible divider - no visible line
  
  // Dynamic population text that moves with toggle
  noStroke();
  fill(255);
  textSize(28);
  textStyle(BOLD);
  
  // 1992 data on left side
  if (sliderX > 150) {
    textAlign(LEFT, TOP);
    text("1992", 30, 30);
    textSize(22);
    textStyle(NORMAL);
    text(formatPopulation(pop1992) + " people", 30, 65);
  }
  
  // 2022 data on right side  
  if (sliderX < width - 150) {
    textAlign(RIGHT, TOP);
    textSize(28);
    textStyle(BOLD);
    text("2022", width - 30, 30);
    textSize(22);
    textStyle(NORMAL);
    text(formatPopulation(pop2022) + " people", width - 30, 65);
  }
  
  // Bottom label
  textAlign(CENTER, BOTTOM);
  textSize(18);
  textStyle(BOLD);
  text("Mandalay: Urban Growth & Population Shift", width / 2, height - 20);
}



function formatPopulation(n) {
  if (n >= 1e6) return (n / 1e6).toFixed(2) + "M";
  if (n >= 1e3) return (n / 1e3).toFixed(0) + "K";
  return n.toString();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}