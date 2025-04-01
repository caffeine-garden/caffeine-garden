let CREATURES;
const CREATURE_SIZE = 100;
let panda; // selene
let bunny; // lucy
let jellyfish; // julie

let i;
let active_creature;
let blink = 0;

function preload() {
  panda = loadImage("assets/panda.svg");
  bunny = loadImage("assets/bunny.svg");
  jellyfish = loadImage("assets/jellyfish.svg");
  arrow = loadImage("assets/arrow.svg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  CREATURES = [panda, bunny, jellyfish];

  // get the initial x-value for the leftmost creature
  // use bitwise ~~ to truncate any decimals
  x = ~~((windowWidth - CREATURE_SIZE * CREATURES.length) / 2);
  y = ~~(windowHeight / 2 - CREATURE_SIZE * 2);

  // initialize creature coordinates
  CREATURES.forEach((creature) => {
    creature.x = x;
    creature.y = y;
    x += CREATURE_SIZE;
  });

  // set active creature
  i = 0;
  active_creature = CREATURES[i];
}

function draw() {
  background("#9CEB7D"); // putting background here, allows it to be added every time they move
  fill("#9CEB7D");
  stroke("#083005");

  image(panda, panda.x, panda.y, CREATURE_SIZE, CREATURE_SIZE);
  image(bunny, bunny.x, bunny.y, CREATURE_SIZE, CREATURE_SIZE);
  image(jellyfish, jellyfish.x, jellyfish.y, CREATURE_SIZE, CREATURE_SIZE);

  const ARROW_SIZE = CREATURE_SIZE / 4;
  blink++;
  if (blink % 50 > 10) {
    image(
      arrow,
      active_creature.x + (CREATURE_SIZE - ARROW_SIZE) / 2,
      active_creature.y - ARROW_SIZE * 1.5,
      ARROW_SIZE,
      ARROW_SIZE
    );
  }

  // move the active creature with WASD
  if (keyIsDown(65) === true) {
    // A key; go left
    active_creature.x -= 5;
  }
  if (keyIsDown(68) === true) {
    // D key; go right
    active_creature.x += 5;
  }
  if (keyIsDown(87) === true) {
    // W key; go up
    active_creature.y -= 5;
  }
  if (keyIsDown(83) === true) {
    // S key; go down
    active_creature.y += 5;
  }

  // keep creatures within the bounds of the screen
  if (active_creature.x < 0 - CREATURE_SIZE) {
    active_creature.x = windowWidth + CREATURE_SIZE;
  }
  if (active_creature.x > windowWidth + CREATURE_SIZE) {
    active_creature.x = 0 - CREATURE_SIZE;
  }
  if (active_creature.y < 0 - CREATURE_SIZE) {
    active_creature.y = windowHeight + CREATURE_SIZE;
  }
  if (active_creature.y > windowHeight + CREATURE_SIZE) {
    active_creature.y = 0 - CREATURE_SIZE;
  }
}

// switch between creatures using arrow keys
function keyReleased() {
  if (key === "ArrowRight" || key === "ArrowUp") {
    i = (i + 1) % CREATURES.length;
    active_creature = CREATURES[i];
    console.log(i);
  }
  if (key === "ArrowLeft" || key === "ArrowDown") {
    if (i === 0) {
      i = CREATURES.length - 1;
    } else {
      i = (i - 1) % CREATURES.length;
    }
    active_creature = CREATURES[i];
    console.log(i);
  }

  return false;
}
