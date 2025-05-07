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

let session;

/**
const CREATURES = new Map();
let CREATURE_SIZE;
const SMALL_SCREEN_BREAKPOINT = 500;
let blink = 0; // for arrow blinking
let touchTarget = null; // for touchscreens
let panda; // selene
let bunny; // lucy
let jellyfish; // julie
let frog; // yen
*/

/** 𖡼.𖤣𖥧𖡼.𖤣𖥧 STEP 1: ADD CREATURE ABOVE THIS COMMENT 𖡼.𖤣𖥧𖡼.𖤣𖥧 */

/**
 * stores creature x,y positions, the active creature, and related canvas/animation info
 * @param {p5.Image[]} creatures - an array of p5.Images
 */
class CreatureSession {
  #unscaledCreatureSize;
  #blink = 0; // for blinking animations

  constructor(creatures, arrow, creatureSize = 100, screenBreakpoint = 500) {
    this.creatures = creatures;
    this.arrow = arrow;
    this.#unscaledCreatureSize = creatureSize;
    this.screenBreakpoint = screenBreakpoint;
    this.touchTarget = null; // for touchscreens
  }

  // creates a p5 canvas and stores initial creature x,y positions in localStorage
  initialize() {
    console.log("initialized");
    const size = this.creatureSize;
    createCanvas(this.width, this.height);

    // TODO change when #main-content is replaced with modals
    const mainContentTop = document
      .querySelector("#main-content")
      .getBoundingClientRect().top;

    // position creatures closer to text on shorter screens (likely landscape mobile)
    const shortScreenMultiplier =
      this.height < this.screenBreakpoint
        ? (this.#unscaledCreatureSize - size) * 0.01
        : 0;

    let x = (this.width - size * this.creatures.length) / 2;
    let y = mainContentTop - size * (1.5 - shortScreenMultiplier);

    // TODO update initial x,y in anticipation of many creatures
    this.creatures.forEach((creature) => {
      creature.x = x;
      creature.y = y;
      storeItem(creature.name + "X", x);
      storeItem(creature.name + "Y", y);
      x += size;
    });
  }

  drawCreatures() {
    console.log("drawing");
    const size = this.creatureSize;

    this.creatures.forEach((creature) => {
      image(creature, creature.x, creature.y, size, size);
    });

    // draw blinking arrow to highlight the active creature
    this.#blink++;
    if (this.#blink % 50 > 10) {
      image(
        this.arrow,
        this.#activeCreature.x + (size - this.arrowSize) / 2,
        this.#activeCreature.y - this.arrowSize * 1.5,
        this.arrowSize,
        this.arrowSize
      );
    }
  }

  get #activeCreature() {
    let i = getItem("activeCreatureIndex");
    if (i == null) {
      i = 0;
      storeItem("activeCreatureIndex", i);
    }
    return this.creatures[i];
  }

  // get activeCreatureIndex() {
  //   let i = getItem("activeCreatureIndex");
  //   if (i == null) {
  //     i = 0;
  //     storeItem("activeCreatureIndex", i);
  //   }
  //   this.activeCreature = this.creatures[i];
  //   return i;
  // }

  // set activeCreatureIndex(i) {
  //   storeItem("activeCreatureIndex", i);
  //   this.activeCreature = this.creatures[i];
  // }

  get width() {
    return document.documentElement.clientWidth;
  }

  get height() {
    return document.documentElement.clientHeight;
  }

  get currentX() {
    return this.#activeCreature.x;
  }

  set currentX(x) {
    this.#activeCreature.x = x;
    storeItem(this.#activeCreature.name + "X", x);
  }

  get currentY() {
    return this.#activeCreature.y;
  }

  set currentY(y) {
    this.#activeCreature.y = y;
    storeItem(this.#activeCreature.name + "Y", y);
  }

  // smallAxis is the size of the axis that is smaller than screenBreakpoint
  // if multiple exist, it returns the smaller axis
  // if none exist, it returns null
  get smallAxis() {
    return this.width < this.screenBreakpoint ||
      this.height < this.screenBreakpoint
      ? Math.min(this.width, this.height)
      : null;
  }

  // if screen is small, resize creatures and position accordingly
  get creatureSize() {
    return this.smallAxis
      ? this.#unscaledCreatureSize -
          0.2 * (this.screenBreakpoint - this.smallAxis)
      : this.#unscaledCreatureSize;
  }

  get arrowSize() {
    return this.creatureSize / 4;
  }
}

/**
 * creates a p5.Image object and attaches creature metadata
 *
 * TODO collect more member info and attach here
 *
 * @returns {p5.Image}
 */
const newCreatureImage = (path, name, humanName) => {
  const img = loadImage(path);
  img.name = name;
  img.humanName = humanName;
  return img;
};

function preload() {
  const arrow = loadImage("/assets/arrow.svg");
  const panda = newCreatureImage("/assets/panda.svg", "panda", "selene");
  const bunny = newCreatureImage("/assets/bunny.svg", "bunny", "lucy");
  const jellyfish = newCreatureImage(
    "/assets/jellyfish.svg",
    "jellyfish",
    "julie"
  );
  const frog = newCreatureImage("/assets/frog.svg", "frog", "yen");
  /** 𖡼.𖤣𖥧𖡼.𖤣𖥧 STEP 2: ADD CREATURE ABOVE THIS COMMENT 𖡼.𖤣𖥧𖡼.𖤣𖥧 */

  session = new CreatureSession([panda, bunny, jellyfish, frog], arrow);
}

function setup() {
  // smallAxis is the size of the smaller axis if the screen is small, else null
  // const smallAxis =
  //   document.documentElement.clientWidth < SMALL_SCREEN_BREAKPOINT ||
  //   document.documentElement.clientHeight < SMALL_SCREEN_BREAKPOINT
  //     ? Math.min(
  //         document.documentElement.clientWidth,
  //         document.documentElement.clientHeight
  //       )
  //     : null;

  // if (smallAxis) {
  //   if (windowWidth < windowHeight) {
  //     // using displayWidth / displayHeight mostly fixes mobile weirdness...
  //     createCanvas(displayWidth, displayHeight); // portrait mode
  //   } else {
  //     createCanvas(displayHeight, displayWidth); // landscape mode
  //   }
  // } else {
  //   createCanvas(windowWidth, windowHeight);
  // }

  // CREATURES.set("panda", panda);
  // CREATURES.set("bunny", bunny);
  // CREATURES.set("jellyfish", jellyfish);
  // CREATURES.set("frog", frog);
  /** 𖡼.𖤣𖥧𖡼.𖤣𖥧 STEP 3: ADD CREATURE ABOVE THIS COMMENT 𖡼.𖤣𖥧𖡼.𖤣𖥧 */

  let previouslyLoaded = localStorage.getItem("previouslyLoaded");
  if (!previouslyLoaded) {
    // first time loaded! initialize creature coordinates.
    // otherwise, get coordinates from localStorage
    localStorage.setItem("previouslyLoaded", "1");
    session.initialize();

    // if screen is small, resize creatures and position accordingly
    // CREATURE_SIZE = smallAxis
    //   ? 100 - 0.2 * (SMALL_SCREEN_BREAKPOINT - smallAxis)
    //   : 100;

    // TODO: HANDLE POSITIONING IN ANTICIPATION OF 10+ CREATURES
    // let x =
    //   (document.documentElement.clientWidth - CREATURE_SIZE * CREATURES.size) /
    //   2;

    // position creatures closer to text on shorter screens (likely landscape mobile)
    // const shortScreenMultiplier =
    //   document.documentElement.clientHeight < SMALL_SCREEN_BREAKPOINT
    //     ? (100 - CREATURE_SIZE) * 0.01
    //     : 0;

    // const mainContentTop = document
    //   .querySelector("#main-content")
    //   .getBoundingClientRect().top;

    // let y = mainContentTop - CREATURE_SIZE * (1.5 - shortScreenMultiplier);

    // store creature starting coordinates in localStorage
    // CREATURES.forEach((_, creatureName) => {
    //   storeItem(creatureName + "X", x);
    //   storeItem(creatureName + "Y", y);
    //   x += CREATURE_SIZE;
    // });

    // the intial active creature is at index 0
    // storeItem("activeCreatureIndex", 0);
  }
}

// returns the p5 image for the current active creature by inspecting localStorage
// also returns the name of the current active creature
// should not be called prior to storing activeCreatureIndex in setup()
// function getActiveCreature() {
//   let activeCreatureIndex = getItem("activeCreatureIndex");
//   if (!activeCreatureIndex) {
//     storeItem("activeCreatureIndex", 0);
//     activeCreatureIndex = 0;
//   }
//   const activeCreatureName = [...CREATURES.keys()][activeCreatureIndex];
//   activeCreature = CREATURES.get(activeCreatureName);
//   return activeCreature, activeCreatureName;
// }

// function setActiveCreature(activeCreatureIndex) {
//   if (activeCreatureIndex == null) {
//     throw new Error("Please specify an activeCreatureIndex!!!");
//   }
//   storeItem("activeCreatureIndex", activeCreatureIndex);
//   const activeCreatureName = [...CREATURES.keys()][activeCreatureIndex];
//   activeCreature = CREATURES.get(activeCreatureName);
//   return activeCreature;
// }

function draw() {
  background("#9CEB7D");
  fill("#9CEB7D");
  stroke("#083005");

  // draw creatures
  session.drawCreatures();

  // CREATURES.forEach((creature, creatureName) => {
  //   if (getItem(creatureName + "X") == null) {
  //     setup();
  //   }

  //   image(
  //     creature,
  //     getItem(creatureName + "X"),
  //     getItem(creatureName + "Y"),
  //     CREATURE_SIZE,
  //     CREATURE_SIZE
  //   );
  // });

  // activeCreature, (activeCreatureName = getActiveCreature());
  // activeCreature.x = getItem(activeCreatureName + "X");
  // activeCreature.y = getItem(activeCreatureName + "Y");

  // draw blinking arrow to highlight the active creature
  // blink++;
  // const ARROW_SIZE = CREATURE_SIZE / 4;
  // if (blink % 50 > 10) {
  //   image(
  //     arrow,
  //     activeCreature.x + (CREATURE_SIZE - ARROW_SIZE) / 2,
  //     activeCreature.y - ARROW_SIZE * 1.5,
  //     ARROW_SIZE,
  //     ARROW_SIZE
  //   );
  // }

  // move the active creature with WASD
  // use spacebar for 2x speed
  const speed = keyIsDown(16) ? 10 : 5;
  if (keyIsDown(65) === true) {
    // A key; go left
    // activeCreature.x -= speed;
    // storeItem(activeCreatureName + "X", activeCreature.x);
    session.currentX -= speed;
  }
  if (keyIsDown(68) === true) {
    // D key; go right
    // activeCreature.x += speed;
    // storeItem(activeCreatureName + "X", activeCreature.x);
    session.currentX += speed;
  }
  if (keyIsDown(87) === true) {
    // W key; go up
    // activeCreature.y -= speed;
    // storeItem(activeCreatureName + "Y", activeCreature.y);
    session.currentY -= speed;
  }
  if (keyIsDown(83) === true) {
    // S key; go down
    // activeCreature.y += speed;
    // storeItem(activeCreatureName + "Y", activeCreature.y);
    session.currentY += speed;
  }

  // move the active creature by tapping a touchscreen
  if (session.touchTarget) {
    if (session.currentX > session.touchTarget.x) {
      session.currentX -= 5;
    }
    if (session.currentX < session.touchTarget.x) {
      session.currentX += 5;
    }
    if (session.currentY > session.touchTarget.y) {
      session.currentY -= 5;
    }
    if (session.currentY < session.touchTarget.y) {
      session.currentX += 5;
    }
  }
  // if (touchTarget) {
  //   if (activeCreature.x > touchTarget.x) {
  //     activeCreature.x -= 5;
  //     storeItem(activeCreatureName + "X", activeCreature.x);
  //   }
  //   if (activeCreature.x < touchTarget.x) {
  //     activeCreature.x += 5;
  //     storeItem(activeCreatureName + "X", activeCreature.x);
  //   }
  //   if (activeCreature.y > touchTarget.y) {
  //     activeCreature.y -= 5;
  //     storeItem(activeCreatureName + "Y", activeCreature.y);
  //   }
  //   if (activeCreature.y < touchTarget.y) {
  //     activeCreature.y += 5;
  //     storeItem(activeCreatureName + "Y", activeCreature.y);
  //   }
  // }

  // keep creatures within the bounds of the screen
  if (session.currentX < 0 - session.creatureSize) {
    session.currentX = session.width + session.creatureSize;
  }
  if (session.currentX > session.width + session.creatureSize) {
    session.currentX = 0 - session.creatureSize;
  }
  if (session.currentY < 0 - session.creatureSize) {
    session.currentY = session.width + session.creatureSize;
  }
  if (session.currentY > session.width + session.creatureSize) {
    session.currentY = 0 - session.creatureSize;
  }

  // if (activeCreature.x < 0 - CREATURE_SIZE) {
  //   activeCreature.x = document.documentElement.clientWidth + CREATURE_SIZE;
  //   storeItem(activeCreatureName + "X", activeCreature.x);
  // }
  // if (activeCreature.x > document.documentElement.clientWidth + CREATURE_SIZE) {
  //   activeCreature.x = 0 - CREATURE_SIZE;
  //   storeItem(activeCreatureName + "X", activeCreature.x);
  // }
  // if (activeCreature.y < 0 - CREATURE_SIZE) {
  //   activeCreature.y = document.documentElement.clientHeight + CREATURE_SIZE;
  //   storeItem(activeCreatureName + "Y", activeCreature.y);
  // }
  // if (
  //   activeCreature.y >
  //   document.documentElement.clientHeight + CREATURE_SIZE
  // ) {
  //   activeCreature.y = 0 - CREATURE_SIZE;
  //   storeItem(activeCreatureName + "Y", activeCreature.y);
  // }
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

// reset creature position when window size changes
let timeout = false;
function windowResized() {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    console.log(
      "resize! window",
      document.documentElement.clientWidth,
      document.documentElement.clientHeight
    );
    localStorage.clear();
    setup();
    // resizeCanvas(
    //   document.documentElement.clientWidth,
    //   document.documentElement.clientHeight
    // );
  }, 250);
  // console.log("window", windowWidth, windowHeight);
  // console.log("display", displayWidth, displayHeight);
  // resizeCanvas(windowWidth, windowHeight);
  // noLoop();
  // localStorage.clear();
  // setup();
  // loop();
  // resizeCanvas(windowWidth, windowHeight);
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
