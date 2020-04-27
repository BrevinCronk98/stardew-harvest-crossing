import Phaser from "phaser";
import logoImg from "./assets/logo.png";
import sky from "./assets/sky.png";
import ground from "./assets/platform.png";
import star from "./assets/star.png";
import bomb from "./assets/bomb.png";
import dude from "./assets/dude.png";
// import picopicofarm from "./assets/picopicofarm.png";
// import simplefarmpack from "./assets/SimpleFarmPackv09.png";

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: {y: 300},
      debug: false
    }
  },
  scene: {
    preload: preload,
    create: create
    // update: update
  }
};

const game = new Phaser.Game(config);

function preload() {
  this.load.image("logo", logoImg);
  this.load.image('sky', sky);
  this.load.image('ground', ground);
  this.load.image('star', star);
  this.load.image('bomb', bomb);
  this.load.spritesheet('dude', 
      dude,
      { frameWidth: 32, frameHeight: 48 }
  );
  // this.load.image("ground", picopicofarm);
  // this.load.image("farm", simplefarmpack);
}

let platforms;
let player;

function create() {
  this.add.image(400, 300, 'sky');
  this.add.image(400, 300, 'star');
  // const logo = this.add.image(400, 150, "logo");
  // const ground = this.add.image(400, 400, "ground");
  // const farm = this.add.image(600, 600, "farm");

  platforms = this.physics.add.staticGroup();
  platforms.create(400, 568, 'ground').setScale(2).refreshBody();
  
  platforms.create(750, 220, 'ground');
  platforms.create(600, 400, 'ground');
  platforms.create(50, 250, 'ground');
  platforms.create(750, 220, 'ground');
  
  
  // this.tweens.add({
  //   targets: logo,
  //   y: 450,
  //   duration: 2000,
  //   ease: "Power2",
  //   yoyo: true,
  //   loop: -1
  // });


  player = this.physics.add.sprite(100, 450, 'dude');

  player.setBounce(0.2);
  player.setCollideWorldBounds(true);

  this.anims.create({
    key: 'left',
    frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
    frameRate: 10,
    repeat: -1
  });

  this.anims.create({
    key: 'turn',
    frames: [ { key: 'dude', frame: 4} ],
    frameRate: 20
  });

  this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1
  });

}