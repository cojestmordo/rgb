function setup() {
  createCanvas(screen.width,screen.height);
  frameRate(20);
}function draw() {
  drawFlower(random(width), random(height), random(1, 100));
}function drawFlower(flowerX, flowerY, size) {
  strokeWeight(0);
  circle(flowerX, flowerY, size);
  if (mouseIsPressed) {
    fill(random(140,255),random(10,150),random(0,130))
  } else if (keyIsPressed){
    fill(random(0,130),random(10,150),random(140,255));
  }
  else{
    fill(random(0,130),random(140,255),random(0,130));
  }
}
