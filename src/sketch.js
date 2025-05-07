/**
 * 𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧
 * 𖡼.𖤣𖥧𖡼.𖤣𖥧 ᕱᕱ ྀི HELLO !!! ₍^. .^₎⟆ ₊˚⊹♡ 𖡼.𖤣𖥧𖡼.𖤣𖥧
 * 𖡼.𖤣𖥧𖡼 PLEASE FOLLOW THE FLOWERS 𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.
 * 𖡼.𖤣𖥧𖡼.𖤣𖥧 TO ADD YOUR CREATURE TO THE SITE 𖡼.𖤣
 * 𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼
 *
 *    let's say you want to add a worm.
 *    there are only two steps:
 *
 * 1. create your worm in function preload()
 *    please make sure worm.svg exists in the assets folder.
 *
 *    eg:
 *        const worm = newCreature("/assets/worm.svg", "worm", "your_name");
 *
 * 2. add your worm to the CreatureSession, also in function preload()
 *    basically edit the line starting with "session = new CreatureSession"
 *    to include your worm at the end of the list of creatures
 *
 *    eg:
 *        session = new CreatureSession([panda, bunny, jellyfish, frog, worm], arrow);
 *
 * 𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧
 * 𖡼.𖤣𖥧𖡼 AND THAT'S ALL 𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.
 * 𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧 LOVE, 𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧
 * 𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼 JELLYFISH 𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.
 * 𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧
 */

/**
 * stores creature and canvas data for a given user session
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

  nextActiveCreature() {
    let i = getItem("activeCreatureIndex");
    i = (i + 1) % this.creatures.length;
    storeItem("activeCreatureIndex", i);
  }

  lastActiveCreature() {
    let i = getItem("activeCreatureIndex");
    if (i === 0) {
      i = this.creatures.length - 1;
    } else {
      i = (i - 1) % this.creatures.length;
    }
    storeItem("activeCreatureIndex", i);
  }

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
const newCreature = (path, name, humanName) => {
  const img = loadImage(path);
  img.name = name;
  img.humanName = humanName;
  return img;
};

let session;
function preload() {
  const arrow = loadImage("/assets/arrow.svg");
  const panda = newCreature("/assets/panda.svg", "panda", "selene");
  const bunny = newCreature("/assets/bunny.svg", "bunny", "lucy");
  const jellyfish = newCreature("/assets/jellyfish.svg", "jellyfish", "julie");
  const frog = newCreature("/assets/frog.svg", "frog", "yen");
  /** 𖡼.𖤣𖥧𖡼.𖤣𖥧 STEP 1: ADD CREATURE ABOVE THIS COMMENT 𖡼.𖤣𖥧𖡼.𖤣𖥧 */

  session = new CreatureSession([panda, bunny, jellyfish, frog], arrow);
  /** 𖡼.𖤣𖥧𖡼.𖤣𖥧 STEP 2: ADD CREATURE ABOVE THIS COMMENT 𖡼.𖤣𖥧𖡼.𖤣𖥧 */
}

function setup() {
  let previouslyLoaded = localStorage.getItem("previouslyLoaded");
  if (!previouslyLoaded) {
    // first time loaded! initialize creature coordinates.
    // otherwise, get coordinates from localStorage
    localStorage.setItem("previouslyLoaded", "1");
    session.initialize();
  }
}

function draw() {
  background("#9CEB7D");
  fill("#9CEB7D");
  stroke("#083005");

  // draw creatures
  session.drawCreatures();

  // move the active creature with WASD
  // use spacebar for 2x speed
  const speed = keyIsDown(16) ? 10 : 5;
  if (keyIsDown(65) === true) {
    // A key; go left
    session.currentX -= speed;
  }
  if (keyIsDown(68) === true) {
    // D key; go right
    session.currentX += speed;
  }
  if (keyIsDown(87) === true) {
    // W key; go up
    session.currentY -= speed;
  }
  if (keyIsDown(83) === true) {
    // S key; go down
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
      session.currentY += 5;
    }
  }

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
}

// switch between creatures using arrow keys
function keyReleased() {
  if (key === "ArrowRight" || key === "ArrowUp") {
    session.nextActiveCreature();
  }
  if (key === "ArrowLeft" || key === "ArrowDown") {
    session.lastActiveCreature();
  }
}

// reset creature position when window size changes
let timeout = false;
function windowResized() {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    console.log("resize!", session.width, session.height);
    localStorage.clear();
    setup();
  }, 250);
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
      session.touchTarget = {
        x: touch.x - session.creatureSize / 2,
        y: touch.y - session.creatureSize / 2,
      };
    }
  }
}

function touchMoved() {
  for (let touch of touches) {
    session.touchTarget = {
      x: touch.x - session.creatureSize / 2,
      y: touch.y - session.creatureSize / 2,
    };
  }
}

function touchEnded() {
  session.touchTarget = null;
}
