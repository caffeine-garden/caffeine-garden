/**
 * 𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧
 * 𖡼.𖤣𖥧𖡼.𖤣𖥧 ᕱᕱ ྀི HELLO !!! ₍^. .^₎⟆ ₊˚⊹♡ 𖡼.𖤣𖥧𖡼.𖤣𖥧
 * 𖡼.𖤣𖥧𖡼 PLEASE FOLLOW THE FLOWERS 𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.
 * 𖡼.𖤣𖥧𖡼.𖤣𖥧 TO ADD YOUR CREATURE TO THE SITE 𖡼.𖤣
 * 𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼
 *
 *    let's say you want to add a worm.
 *    there are two steps:
 *
 * 1. define your worm above "let activeCreature;"
 *
 *    eg:
 *        let worm; // your_name
 *
 * 2. load your worm image above "arrow = loadImage("/assets/arrow.svg");"
 *    please make sure worm.svg exists in the assets folder.
 *
 *    eg:
 *        worm = loadImage("/assets/worm.svg");
 *
 * 𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧
 * 𖡼.𖤣𖥧𖡼 AND THAT'S ALL 𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.
 * 𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧 LOVE, 𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧
 * 𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼 JELLYFISH 𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.
 * 𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧
 */

let panda; // selene
let bunny; // lucy
let jellyfish; // julie
/** 𖡼.𖤣𖥧𖡼.𖤣𖥧 STEP 1: ADD CREATURE ABOVE THIS COMMENT 𖡼.𖤣𖥧𖡼.𖤣𖥧 */
let activeCreature;
const CREATURES = new Map();
const CREATURE_SIZE = 100;
const ARROW_SIZE = CREATURE_SIZE / 4;
let blink = 0;
let touchTarget = null; // for touchscreens

function preload() {
  panda = loadImage("/assets/panda.svg");
  bunny = loadImage("/assets/bunny.svg");
  jellyfish = loadImage("/assets/jellyfish.svg");
  /** 𖡼.𖤣𖥧𖡼.𖤣𖥧 STEP 2: ADD CREATURE ABOVE THIS COMMENT 𖡼.𖤣𖥧𖡼.𖤣𖥧 */
  arrow = loadImage("/assets/arrow.svg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  CREATURES.set("panda", panda);
  CREATURES.set("bunny", bunny);
  CREATURES.set("jellyfish", jellyfish);

  let x;
  let y;

  let firstTime = localStorage.getItem("firstTime");
  if (!firstTime) {
    // first time loaded! initialize creature coordinates.
    // otherwise, get coordinates from localStorage
    localStorage.setItem("firstTime", "1");

    const mainContentTop = document
      .querySelector("#main-content")
      .getBoundingClientRect().top;
    // position creatures closer to text on shorter screens (landscape mobile)
    const shortScreenMultiplier = windowHeight < 500 ? 0.4 : 0;
    x = (windowWidth - CREATURE_SIZE * CREATURES.size) / 2;
    y = mainContentTop - CREATURE_SIZE * (1.5 - shortScreenMultiplier);

    // store starting creature coordinates in localStorage
    CREATURES.forEach((_, creatureName) => {
      storeItem(creatureName + "X", x);
      storeItem(creatureName + "Y", y);
      x += CREATURE_SIZE;
    });

    // the intial active creature is at index 0
    storeItem("activeCreatureIndex", 0);
  }
}

function draw() {
  background("#9CEB7D");
  fill("#9CEB7D");
  stroke("#083005");

  // draw creatures
  CREATURES.forEach((creature, creatureName) => {
    image(
      creature,
      getItem(creatureName + "X"),
      getItem(creatureName + "Y"),
      CREATURE_SIZE,
      CREATURE_SIZE
    );
  });

  // load active creature from localStorage
  let i = getItem("activeCreatureIndex");
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

  // move the active creature by tapping a touchscreen
  if (touchTarget) {
    if (activeCreature.x > touchTarget.x) {
      activeCreature.x -= 5;
      storeItem(activeCreatureName + "X", activeCreature.x);
    }
    if (activeCreature.x < touchTarget.x) {
      activeCreature.x += 5;
      storeItem(activeCreatureName + "X", activeCreature.x);
    }
    if (activeCreature.y > touchTarget.y) {
      activeCreature.y -= 5;
      storeItem(activeCreatureName + "Y", activeCreature.y);
    }
    if (activeCreature.y < touchTarget.y) {
      activeCreature.y += 5;
      storeItem(activeCreatureName + "Y", activeCreature.y);
    }
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
  let i = getItem("activeCreatureIndex");

  // toggle forwards
  if (key === "ArrowRight" || key === "ArrowUp") {
    i = (i + 1) % CREATURES.size;
    storeItem("activeCreatureIndex", i);
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
    storeItem("activeCreatureIndex", i);
    const activeCreatureName = [...CREATURES.keys()][i];
    activeCreature = CREATURES.get(activeCreatureName);
  }
}

// reset creature position when window size changes
function windowResized() {
  localStorage.clear();
  setup();
  resizeCanvas(windowWidth, windowHeight);
}

/**
 * THE CODE BELOW TRACKS TOUCHSCREEN INTERACTIONS
 */

function touchStarted(event) {
  if (event.type === "touchstart") {
    if (document.querySelector(".desktop-only")) {
      document.querySelector(".desktop-only").remove();
    }
    document.querySelector(".mobile-only").style.display = "block";
    for (let touch of touches) {
      touchTarget = {
        x: touch.x - CREATURE_SIZE / 2,
        y: touch.y - CREATURE_SIZE / 2,
      };
    }
  }
}

function touchMoved() {
  for (let touch of touches) {
    touchTarget = {
      x: touch.x - CREATURE_SIZE / 2,
      y: touch.y - CREATURE_SIZE / 2,
    };
  }
}

function touchEnded() {
  touchTarget = null;
}

// switch between creatures by shaking device
function deviceShaken() {
  let i = getItem("activeCreatureIndex");
  i = (i + 1) % CREATURES.size;
  storeItem("activeCreatureIndex", i);
  const activeCreatureName = [...CREATURES.keys()][i];
  activeCreature = CREATURES.get(activeCreatureName);
}
