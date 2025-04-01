let CREATURES;
const CREATURE_SIZE = 100;
let panda; // selene
let bunny; // lucy
let jellyfish; // julie

let i;
let active_creature;

function preload() {
  panda = loadImage("assets/panda.svg");
  bunny = loadImage("assets/bunny.svg");
  jellyfish = loadImage("assets/jellyfish.svg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  CREATURES = [panda, bunny, jellyfish];

  // get the initial x-value for the leftmost creature
  // use bitwise ~~ to truncate any decimals
  x = ~~((windowWidth - CREATURE_SIZE * CREATURES.length) / 2);
  y = ~~(windowHeight / 2);

  // initialize creature coordinates
  CREATURES.forEach((creature) => {
    creature.type = creature.x = x;
    creature.y = y;
    x += CREATURE_SIZE;
  });

  // set active creature
  i = 0;
  active_creature = CREATURES[i];
}

function draw() {
  background("#9CEB7D"); // putting background here, allows it to be added every time they move

  image(panda, panda.x, panda.y, CREATURE_SIZE, CREATURE_SIZE);
  image(bunny, bunny.x, bunny.y, CREATURE_SIZE, CREATURE_SIZE);
  image(jellyfish, jellyfish.x, jellyfish.y, CREATURE_SIZE, CREATURE_SIZE);
  fill("#9CEB7D");
  stroke("#083005");

  // move active creature with WASD
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

  // switch between creatures using arrow keys
  if (keyIsDown(RIGHT_ARROW) === true || keyIsDown(UP_ARROW) === true) {
    prev_creature = active_creature;
    i = (i + 1) % CREATURES.length;
    active_creature = CREATURES[i];
  }
  if (keyIsDown(LEFT_ARROW) === true || keyIsDown(DOWN_ARROW) === true) {
    // TODO
  }
}
