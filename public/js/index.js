import {collisions} from './data/collisions.js'
import {checkForCharacterCollision as checkForCharacterCollision} from './utils.js'
// import {rectangularCollision} from './utils.js'

import * as collision from "./utils.js"
import {audio} from './data/audio.js'
import {charactersMapData } from './data/characters.js'
import {Sprite,  Boundary} from "./classes.js";




const canvas = document.querySelector("canvas");
 export const c = canvas.getContext("2d");


// canvas.width = 100vw;
// canvas.height = 1024;

// canvas.width = document.body.clientWidth; //document.width is obsolete
// canvas.height = document.body.clientHeight; //document.height is obsolete
canvas.width = 3000;
canvas.height = 2000;
const canvasW = canvas.width;
const canvasH = canvas.height;

const collisionsMap = [];
for (let i = 0; i < collisions.length; i += 120) {
  collisionsMap.push(collisions.slice(i, 120 + i));
}
const charactersMap = [];
for (let i = 0; i < charactersMapData.length; i += 120) {
  charactersMap.push(charactersMapData.slice(i, 120 + i));
}

const boundaries = [];

const offset = {
  x: -1175,
  y: 550,
};
const characters = [];
const villagerImg = new Image();
villagerImg.src = "img/villager/idle.png";
const doorImg = new Image();
doorImg.src = "img/test.png";
const oldManImg = new Image();
oldManImg.src = "img/oldMan/Idle.png";

collisionsMap.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if (symbol === 1025)
      boundaries.push(
        new Boundary({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y,
          },
        })
      );
  });
});

const characterMap = {
  1025: 1,
  1026: 2,
  1027: 3,
  1028: 3,
  1029: 4,
  1030: 5,
  1031: 6,
  1032: 8,
  1033: 9,
  1034: 10,
  1035: 11,
};

charactersMap.forEach((row, i) => {
  row.forEach((symbol, j) => {
    const uid = characterMap[symbol];
    if (uid) {
      characters.push(
        new Sprite({
          uid,
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y,
          },
          image: doorImg,
          scale: 3,
        })
      );
    }
    if (symbol !== 0) {
      boundaries.push(
        new Boundary({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y,
          },
        })
      );
    }
  });
});

const image = new Image();
image.src = "img/pellettown.png";

const foregroundImage = new Image();
foregroundImage.src = "img/foregroundObjects.png";

const playerDownImage = new Image();
playerDownImage.src = "img/playerDown.png";

const playerUpImage = new Image();
playerUpImage.src = "img/playerUp.png";

const playerLeftImage = new Image();
playerLeftImage.src = "img/playerLeft.png";

const playerRightImage = new Image();
playerRightImage.src = "img/playerRight.png";

const player = new Sprite({
  position: {
    x: canvasW / 2 - 192 / 4 / 2,
    y: canvasH / 2 - 68 / 2,
  },
  image: playerDownImage,
  frames: {
    max: 4,
    hold: 10,
  },
  sprites: {
    up: playerUpImage,
    left: playerLeftImage,
    right: playerRightImage,
    down: playerDownImage,
  },
});

const background = new Sprite({
  position: {
    x: offset.x,
    y: offset.y,
  },
  image: image,
});

const foreground = new Sprite({
  position: {
    x: offset.x,
    y: offset.y,
  },
  image: foregroundImage,
});

const movables = [background, ...boundaries, foreground, ...characters];
const renderables = [
  background,
  ...boundaries,
  ...characters,
  player,
  foreground,
];

let movementspeed = 4;
const fps = 60;
const interval = 1000 / fps;

let lastTime = 0;
const textDiv = document.getElementById("textdiv");
const startgame = document.getElementById("startgame");


const keys = {
    w: {
        pressed: false,
    },
    a: {
        pressed: false,
    },
    s: {
        pressed: false,
    },
    d: {
        pressed: false,
    },
    W: {
        pressed: false,
    },
    A: {
        pressed: false,
    },
    S: {
        pressed: false,
    },
    D: {
        pressed: false,
    },
    ArrowLeft: {
        pressed: false,
    },
    ArrowRight: {
        pressed: false,
    },
    ArrowUp: {
        pressed: false,
    },
    ArrowDown: {
        pressed: false,
    },
};

let lastKey = "";
window.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "w":
            keys.w.pressed = true;
            lastKey = "w";
            break;
        case "a":
            keys.a.pressed = true;
            lastKey = "a";
            break;

        case "s":
            keys.s.pressed = true;
            lastKey = "s";
            break;

        case "d":
            keys.d.pressed = true;
            lastKey = "d";
            break;

        case "W":
            keys.W.pressed = true;
            lastKey = "W";
            break;
        case "A":
            keys.A.pressed = true;
            lastKey = "A";
            break;
        case "S":
            keys.S.pressed = true;
            lastKey = "S";
            break;
        case "D":
            keys.D.pressed = true;
            lastKey = "D";
            break;
        case "ArrowLeft":
            keys.ArrowLeft.pressed = true;
            lastKey = "ArrowLeft";
            break;
        case "ArrowRight":
            keys.ArrowRight.pressed = true;
            lastKey = "ArrowRight";
            break;
        case "ArrowUp":
            keys.ArrowUp.pressed = true;
            lastKey = "ArrowUp";
            break;
        case "ArrowDown":
            keys.ArrowDown.pressed = true;
            lastKey = "ArrowDown";
            break;
    }
});

window.addEventListener("keyup", (e) => {
    switch (e.key) {
        case "w":
            keys.w.pressed = false;
            break;
        case "a":
            keys.a.pressed = false;
            break;
        case "s":
            keys.s.pressed = false;
            break;
        case "d":
            keys.d.pressed = false;
            break;
        case "W":
            keys.W.pressed = false;
            break;
        case "A":
            keys.A.pressed = false;
            break;
        case "S":
            keys.S.pressed = false;
            break;
        case "D":
            keys.D.pressed = false;
            break;
        case "ArrowLeft":
            keys.ArrowLeft.pressed = false;
            break;
        case "ArrowRight":
            keys.ArrowRight.pressed = false;
            break;
        case "ArrowUp":
            keys.ArrowUp.pressed = false;
            break;
        case "ArrowDown":
            keys.ArrowDown.pressed = false;
            break;
    }
});




function animate() {
  //
  const currentTime = Date.now();
  const deltaTime = currentTime - lastTime;

  if (deltaTime > interval) {
    lastTime = currentTime - (deltaTime % interval);

    window.requestAnimationFrame(animate);
    renderables.forEach((renderable) => {
      renderable.draw();
    });
    // console.log(1000 / deltaTime);
    let moving = true;
    player.animate = false;

    if (textDiv.classList.contains("hidden") == false) {
      return;
    }
    if (startgame.classList.contains("zichtbaar")) {
      return;
    }

    if (
      (keys.w.pressed || keys.W.pressed || keys.ArrowUp.pressed) &&
      (lastKey === "w" || lastKey === "W" || lastKey === "ArrowUp")
    ) {
      player.animate = true;
      player.image = player.sprites.up;

        collision.checkForCharacterCollision({
        characters,
        player,
        characterOffset: { x: 0, y: 4 },
      });

      for (let i = 0; i < boundaries.length; i++) {
        const boundary = boundaries[i];
        if (
            collision.rectangularCollision({
            rectangle1: player,
            rectangle2: {
              ...boundary,
              position: {
                x: boundary.position.x,
                y: boundary.position.y + 4,
              },
            },
          })
        ) {
          moving = false;
          break;
        }
      }

      if (moving)
        movables.forEach((movable) => {
          movable.position.y += movementspeed;
        });
    } else if (
      (keys.a.pressed || keys.A.pressed || keys.ArrowLeft.pressed) &&
      (lastKey === "a" || lastKey === "A" || lastKey === "ArrowLeft")
    ) {
      player.animate = true;
      player.image = player.sprites.left;

        collision.checkForCharacterCollision({
        characters,
        player,
        characterOffset: { x: 4, y: 0 },
      });

      for (let i = 0; i < boundaries.length; i++) {
        const boundary = boundaries[i];
        if (
            collision.rectangularCollision({
            rectangle1: player,
            rectangle2: {
              ...boundary,
              position: {
                x: boundary.position.x + 4,
                y: boundary.position.y,
              },
            },
          })
        ) {
          moving = false;
          break;
        }
      }

      if (moving)
        movables.forEach((movable) => {
          movable.position.x += movementspeed;
        });
    } else if (
      (keys.s.pressed || keys.S.pressed || keys.ArrowDown.pressed) &&
      (lastKey === "s" || lastKey === "S" || lastKey === "ArrowDown")
    ) {
      player.animate = true;
      player.image = player.sprites.down;

        collision.checkForCharacterCollision({
        characters,
        player,
        characterOffset: { x: 0, y: -4 },
      });

      for (let i = 0; i < boundaries.length; i++) {
        const boundary = boundaries[i];
        if (
            collision.rectangularCollision({
            rectangle1: player,
            rectangle2: {
              ...boundary,
              position: {
                x: boundary.position.x,
                y: boundary.position.y - 4,
              },
            },
          })
        ) {
          moving = false;
          break;
        }
      }

      if (moving)
        movables.forEach((movable) => {
          movable.position.y -= movementspeed;
        });
    } else if (
      (keys.d.pressed || keys.D.pressed || keys.ArrowRight.pressed) &&
      (lastKey === "d" || lastKey === "D" || lastKey === "ArrowRight")
    ) {
      player.animate = true;
      player.image = player.sprites.right;

        collision.checkForCharacterCollision({
        characters,
        player,
        characterOffset: { x: -4, y: 0 },
      });
      for (let i = 0; i < boundaries.length; i++) {
        const boundary = boundaries[i];
        if (
            collision.rectangularCollision({
            rectangle1: player,
            rectangle2: {
              ...boundary,
              position: {
                x: boundary.position.x - 4,
                y: boundary.position.y,
              },
            },
          })
        ) {
          moving = false;
          break;
        }
      }

      if (moving)
        movables.forEach((movable) => {
          movable.position.x -= movementspeed;
        });
    }
  }

  window.requestAnimationFrame(animate);
}

let clicked = false;
addEventListener("click", () => {
  if (!clicked) {
    audio.Map.play();
    clicked = true;
    audio.loop = true;
  }
});

animate();










