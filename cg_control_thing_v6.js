let panda;
let bunny;

let x = 620;
let y = 240;

let xp = 720;
let yp = 240;

function preload() {
  panda = loadImage('panda.svg');
  bunny = loadImage('bunny.svg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //background('#9CEB7D');
}

function draw() {
  background('#9CEB7D'); // putting background here, allows it to be added every time they move
  
  //circle(x, y, 80, 80);
  
  //circle(xp, yp, 80, 80);
  
  image(panda, x, y, 100, 100);
  image(bunny, xp, yp, 100, 100);
  fill('#9CEB7D');
  stroke('#083005');

  if (keyIsDown(65) === true) {
    x -= 5;
  }
  if (keyIsDown(68) === true) {
    x += 5;
  }
  if (keyIsDown(87) === true) {
    y -= 5;
  }
  if (keyIsDown(83) === true) {
    y += 5;
  }
  
  if (keyIsDown(37) === true) {
    xp -= 5;
  }
  if (keyIsDown(39) === true) {
    xp += 5;
  }
  if (keyIsDown(38) === true) {
    yp -= 5;
  }
  if (keyIsDown(40) === true) {
    yp += 5;
  }
   
}
