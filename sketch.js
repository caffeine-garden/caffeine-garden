let CREATURES;
const CREATURE_SIZE = 100;
let activeCreature;
let panda; // selene
let bunny; // lucy
let jellyfish; // julie
const ARROW_SIZE = CREATURE_SIZE / 4;
let blink = 0;

function preload() {
  panda = loadImage("assets/panda.svg");
  bunny = loadImage("assets/bunny.svg");
  jellyfish = loadImage("assets/jellyfish.svg");
  arrow = loadImage("assets/arrow.svg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  CREATURES = new Map([
    ["panda", panda],
    ["bunny", bunny],
    ["jellyfish", jellyfish],
  ]);

  let firstTime = localStorage.getItem("firstTime");
  if (!firstTime) {
    // first time loaded! initialize creature coordinates.
    // otherwise, get coordinates from local storage
    localStorage.setItem("firstTime", "1");

    // use bitwise ~~ to truncate any decimals
    let x = ~~((windowWidth - CREATURE_SIZE * CREATURES.size) / 2);
    let y = ~~(windowHeight / 2 - CREATURE_SIZE * 2);

    // starting creature coordinates
    CREATURES.forEach((_, creatureName) => {
      storeItem(creatureName + "X", x);
      storeItem(creatureName + "Y", y);
      x += CREATURE_SIZE;
    });

    // this index is used to determine the active creature
    storeItem("i", 0);
  }
}

function draw() {
  background("#9CEB7D");
  fill("#9CEB7D");
  stroke("#083005");

  // draw creatures
  image(
    panda,
    getItem("pandaX"),
    getItem("pandaY"),
    CREATURE_SIZE,
    CREATURE_SIZE
  );
  image(
    bunny,
    getItem("bunnyX"),
    getItem("bunnyY"),
    CREATURE_SIZE,
    CREATURE_SIZE
  );
  image(
    jellyfish,
    getItem("jellyfishX"),
    getItem("jellyfishY"),
    CREATURE_SIZE,
    CREATURE_SIZE
  );

  // load active creature from local storage
  let i = getItem("i");
  const activeCreatureName = [...CREATURES.keys()][i];
  activeCreature = CREATURES.get(activeCreatureName);
  activeCreature.x = getItem(activeCreatureName + "X");
  activeCreature.y = getItem(activeCreatureName + "Y");

  // draw blinking arrow to highlight the active creature
  blink++;
  if (blink % 50 > 10) {
    image(
      arrow,
      activeCreature.x + (CREATURE_SIZE - ARROW_SIZE) / 2,
      activeCreature.y - ARROW_SIZE * 1.5,
      ARROW_SIZE,
      ARROW_SIZE
    );
  }

  // move the active creature with WASD
  if (keyIsDown(65) === true) {
    // A key; go left
    activeCreature.x -= 5;
    storeItem(activeCreatureName + "X", activeCreature.x);
  }
  if (keyIsDown(68) === true) {
    // D key; go right
    activeCreature.x += 5;
    storeItem(activeCreatureName + "X", activeCreature.x);
  }
  if (keyIsDown(87) === true) {
    // W key; go up
    activeCreature.y -= 5;
    storeItem(activeCreatureName + "Y", activeCreature.y);
  }
  if (keyIsDown(83) === true) {
    // S key; go down
    activeCreature.y += 5;
    storeItem(activeCreatureName + "Y", activeCreature.y);
  }

  // keep creatures within the bounds of the screen
  if (activeCreature.x < 0 - CREATURE_SIZE) {
    activeCreature.x = windowWidth + CREATURE_SIZE;
    storeItem(activeCreatureName + "X", activeCreature.x);
  }
  if (activeCreature.x > windowWidth + CREATURE_SIZE) {
    activeCreature.x = 0 - CREATURE_SIZE;
    storeItem(activeCreatureName + "X", activeCreature.x);
  }
  if (activeCreature.y < 0 - CREATURE_SIZE) {
    activeCreature.y = windowHeight + CREATURE_SIZE;
    storeItem(activeCreatureName + "Y", activeCreature.y);
  }
  if (activeCreature.y > windowHeight + CREATURE_SIZE) {
    activeCreature.y = 0 - CREATURE_SIZE;
    storeItem(activeCreatureName + "Y", activeCreature.y);
  }
}

// switch between creatures using arrow keys
function keyReleased() {
  let i = getItem("i");

  // toggle forwards
  if (key === "ArrowRight" || key === "ArrowUp") {
    i = (i + 1) % CREATURES.size;
    storeItem("i", i);
    const activeCreatureName = [...CREATURES.keys()][i];
    activeCreature = CREATURES.get(activeCreatureName);
  }

  // toggle backwards
  if (key === "ArrowLeft" || key === "ArrowDown") {
    if (i === 0) {
      i = CREATURES.size - 1;
    } else {
      i = (i - 1) % CREATURES.size;
    }
    storeItem("i", i);
    const activeCreatureName = [...CREATURES.keys()][i];
    activeCreature = CREATURES.get(activeCreatureName);
  }

  return false;
}
