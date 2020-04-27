import Phaser from 'phaser';


// let config = {
//   type: Phaser.AUTO,
//   width: 800,
//   height: 800,
//   scene: {
//     preload: preload,
//     create: create,
//     update: update
//   }
// };

// let game = new Phaser.Game(config);

// function preload() {
//   this.load.image('ground', '/../src/assets/images/picopicofarm.png');
//   this.load.image('farm', './../src/assets/images/SimpleFarmPackv09.png');
// }

// function create() {
  
//   this.add.image(800,800, 'ground');
//   this.add.image(800,800, 'farm');

// }

// function update() {
  
// }

// var directions = {
//   west: { offset: 0, x: -2, y: 0, opposite: 'east'},
//   northWest: { offset: 32, x: -2, y: -1, opposite: 'southEast'},
//   notrh: { offset: 64, x: 0, y: -2, oppposite: 'south'},
//   northEast: { offset: 96, x: 2, y: -1, opposite: 'southWest'},
//   east: { offset: 128, x: 2, y: 0, opposite: 'west' },
//   southEast: { offset: 160, x: 2, y: 1, opposite: 'northWest'},
//   south: { offset: 192, x: 0, y: 2, opposite: 'north'},
//   southWest: { offset: 224, x: -2, y: 1, opposite: 'northEast'},
// };



import logoImg from "./assets/picopicofarm.png";

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create
  }
};

const game = new Phaser.Game(config);

function preload() {
  this.load.image("logo", logoImg);
}

function create() {
  const logo = this.add.image(400, 150, "logo");


}
// import logoImg from "./assets/picopicofarm.png";

// const config = {
//   type: Phaser.AUTO,
//   parent: "phaser-example",
//   width: 800,
//   height: 600,
//   scene: {
//     preload: preload,
//     create: create
//   }
// };

// const game = new Phaser.Game(config);

// function preload() {
//   this.load.image("logo", logoImg);
// }

// function create() {
//   const logo = this.add.image(400, 150, "logo");


// }

// const config = {
//   type: Phaser.AUTO,
//   parent: "phaser-example",
//   width: 800,
//   height: 600,
//   scene: {
//     preload: preload,
//     create: create
//   }
// };

// const game = new Phaser.Game(config);

// function preload() {
//   this.load.image("logo", logoImg);
// }

// function create() {
//   const logo = this.add.image(400, 150, "logo");


// }
