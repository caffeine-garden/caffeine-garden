/**
 * 𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧
 * 𖡼.𖤣𖥧𖡼.𖤣𖥧 ᕱᕱ ྀི HELLO !!! ₍^. .^₎⟆ ₊˚⊹♡ 𖡼.𖤣𖥧𖡼.𖤣𖥧
 * 𖡼.𖤣𖥧𖡼 PLEASE FOLLOW THE FLOWERS 𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.
 * 𖡼.𖤣𖥧𖡼.𖤣𖥧 TO ADD YOUR CREATURE TO THE SITE 𖡼.𖤣
 * 𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼
 *
 *    let's say you want to add a worm.
 *    there are three steps:
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
 * 3. add your worm to CREATURES in the setup() function
 *
 *    eg:
 *        CREATURES.set("worm", worm);
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
let frog; // yen
/** 𖡼.𖤣𖥧𖡼.𖤣𖥧 STEP 1: ADD CREATURE ABOVE THIS COMMENT 𖡼.𖤣𖥧𖡼.𖤣𖥧 */
let activeCreature;
const CREATURES = new Map();
let CREATURE_SIZE = 100;
let ARROW_SIZE;
const SMALL_SCREEN_BREAKPOINT = 650;
let blink = 0; // for arrow blinking
let touchTarget = null; // for touchscreens

function preload() {
  panda = loadImage("/assets/panda.svg");
  bunny = loadImage("/assets/bunny.svg");
  jellyfish = loadImage("/assets/jellyfish.svg");
  frog = loadImage("/assets/frog.svg");
  /** 𖡼.𖤣𖥧𖡼.𖤣𖥧 STEP 2: ADD CREATURE ABOVE THIS COMMENT 𖡼.𖤣𖥧𖡼.𖤣𖥧 */
  arrow = loadImage("/assets/arrow.svg");
}

function setup() {
  localStorage.clear();
  pixelDensity(2);

  // smallAxis is the size of the smaller axis if the screen is small, else null
  const smallAxis =
    windowWidth < SMALL_SCREEN_BREAKPOINT ||
    windowHeight < SMALL_SCREEN_BREAKPOINT
      ? Math.min(windowWidth, windowHeight)
      : null;

  if (smallAxis) {
    if (windowWidth < windowHeight) {
      // using displayWidth and displayHeight mostly fixes mobile weirdness...
      createCanvas(displayWidth, displayHeight); // portrait mode
    } else {
      createCanvas(displayHeight, displayWidth); // landscape mode
    }
  } else {
    createCanvas(windowWidth, windowHeight);
  }

  CREATURES.set("panda", panda);
  CREATURES.set("bunny", bunny);
  CREATURES.set("jellyfish", jellyfish);
  CREATURES.set("frog", frog);
  /** 𖡼.𖤣𖥧𖡼.𖤣𖥧 STEP 3: ADD CREATURE ABOVE THIS COMMENT 𖡼.𖤣𖥧𖡼.𖤣𖥧 */

  // if screen is small, resize creatures and position accordingly
  CREATURE_SIZE = smallAxis
    ? CREATURE_SIZE - 0.1 * (SMALL_SCREEN_BREAKPOINT - smallAxis)
    : CREATURE_SIZE;
  ARROW_SIZE = CREATURE_SIZE / 4;

  // TODO: HANDLE POSITIONING IN ANTICIPATION OF 10+ CREATURES
  let x = (windowWidth - CREATURE_SIZE * CREATURES.size) / 2;
  // position creatures closer to text on shorter screens (likely landscape mobile)
  const mainContentTop = document
    .querySelector("#main-content")
    .getBoundingClientRect().top;
  const shortScreenMultiplier =
    windowHeight < SMALL_SCREEN_BREAKPOINT ? (100 - CREATURE_SIZE) * 0.01 : 0;
  let y = mainContentTop - CREATURE_SIZE * (1.5 - shortScreenMultiplier);

  // store creature starting coordinates in localStorage
  CREATURES.forEach((_, creatureName) => {
    storeItem(creatureName + "X", x);
    storeItem(creatureName + "Y", y);
    x += CREATURE_SIZE;
  });

  // the intial active creature is at index 0
  storeItem("activeCreatureIndex", 0);
}

// returns the p5 image for the current active creature by inspecting localStorage
// also returns the name of the current active creature
// should not be called prior to storing activeCreatureIndex in setup()
function getActiveCreature() {
  let activeCreatureIndex = getItem("activeCreatureIndex");
  if (!activeCreatureIndex) {
    storeItem("activeCreatureIndex", 0);
    activeCreatureIndex = 0;
  }
  const activeCreatureName = [...CREATURES.keys()][activeCreatureIndex];
  activeCreature = CREATURES.get(activeCreatureName);
  return activeCreature, activeCreatureName;
}

function setActiveCreature(activeCreatureIndex) {
  if (activeCreatureIndex == null) {
    throw new Error("Please specify an activeCreatureIndex!!!");
  }
  storeItem("activeCreatureIndex", activeCreatureIndex);
  const activeCreatureName = [...CREATURES.keys()][activeCreatureIndex];
  activeCreature = CREATURES.get(activeCreatureName);
  return activeCreature;
}

function draw() {
  background("#9CEB7D");
  fill("#9CEB7D");
  stroke("#083005");

  // draw creatures
  CREATURES.forEach((creature, creatureName) => {
    if (getItem(creatureName + "X") == null) {
      setup();
    }

    image(
      creature,
      getItem(creatureName + "X"),
      getItem(creatureName + "Y"),
      CREATURE_SIZE,
      CREATURE_SIZE
    );
  });

  activeCreature, (activeCreatureName = getActiveCreature());
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

  const speed = keyIsDown(16) ? 10 : 5;
  // move the active creature with WASD
  if (keyIsDown(65) === true) {
    // A key; go left
    activeCreature.x -= speed;
    storeItem(activeCreatureName + "X", activeCreature.x);
  }
  if (keyIsDown(68) === true) {
    // D key; go right
    activeCreature.x += speed;
    storeItem(activeCreatureName + "X", activeCreature.x);
  }
  if (keyIsDown(87) === true) {
    // W key; go up
    activeCreature.y -= speed;
    storeItem(activeCreatureName + "Y", activeCreature.y);
  }
  if (keyIsDown(83) === true) {
    // S key; go down
    activeCreature.y += speed;
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
    setActiveCreature(i);
  }

  // toggle backwards
  if (key === "ArrowLeft" || key === "ArrowDown") {
    if (i === 0) {
      i = CREATURES.size - 1;
    } else {
      i = (i - 1) % CREATURES.size;
    }
    setActiveCreature(i);
  }
}

// refresh page when window size changes
let throttled = false;
function windowResized() {
  if (!throttled) {
    location.reload();
    throttled = true;
    setTimeout(() => (throttled = false), 500);
  }
}

/**
 * THE CODE BELOW TRACKS TOUCHSCREEN INTERACTIONS
 */

function touchStarted(event) {
  if (event.type === "touchstart") {
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
