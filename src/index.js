import Phaser from "phaser";
import logoImg from "./assets/logo.png";
import sky from "./assets/sky.png";
import ground from "./assets/platform.png";
import star from "./assets/star.png";
import bomb from "./assets/bomb.png";
import dude from "./assets/dude.png";
// import picopicofarm from "./assets/picopicofarm.png";
// import simplefarmpack from "./assets/SimpleFarmPackv09.png";

let config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
      default: 'arcade',
      arcade: {
          gravity: { y: 300 },
          debug: false
      }
  },
  scene: {
      preload: preload,
      create: create,
      update: update
  }
};

let player;
let stars;
let platforms;
let cursors;

let game = new Phaser.Game(config);

function preload () {
this.load.image("logo", logoImg);
  this.load.image('sky', sky);
  this.load.image('ground', ground);
  this.load.image('star', star);
  this.load.image('bomb', bomb);
  this.load.spritesheet('dude', 
      dude,
      { frameWidth: 32, frameHeight: 48 }
  );
} 

function create ()
{
  this.add.image(400, 300, 'sky');

  platforms = this.physics.add.staticGroup();

  platforms.create(400, 568, 'ground').setScale(2).refreshBody();

  platforms.create(600, 400, 'ground');
  platforms.create(50, 250, 'ground');
  platforms.create(750, 220, 'ground');

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
      frames: [ { key: 'dude', frame: 4 } ],
      frameRate: 20
  });

  this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1
  });

  cursors = this.input.keyboard.createCursorKeys();

  stars = this.physics.add.group({
      key: 'star',
      repeat: 11,
      setXY: { x: 12, y: 0, stepX: 70 }
  });

  stars.children.iterate(function (child) {

      child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

  });

  this.physics.add.collider(player, platforms);
  this.physics.add.collider(stars, platforms);

  this.physics.add.overlap(player, stars, collectStar, null, this);
}

function update ()
{
  if (cursors.left.isDown)
  {
      player.setVelocityX(-160);

      player.anims.play('left', true);
  }
  else if (cursors.right.isDown)
  {
      player.setVelocityX(160);

      player.anims.play('right', true);
  }
  else
  {
      player.setVelocityX(0);

      player.anims.play('turn');
  }

  if (cursors.up.isDown && player.body.touching.down)
  {
      player.setVelocityY(-330);
  }
}

function collectStar (player, star)
{
  star.disableBody(true, true);
}


// const config = {
//   type: Phaser.AUTO,
//   parent: "phaser-example",
//   width: 800,
//   height: 600,
//   physics: {
//     default: "arcade",
//     arcade: {
//       gravity: {y: 300},
//       debug: false
//     }
//   },
//   scene: {
//     preload: preload,
//     create: create,
//     update: update
//   }
// };

// const game = new Phaser.Game(config);

// function preload() {
//   this.load.image("logo", logoImg);
//   this.load.image('sky', sky);
//   this.load.image('ground', ground);
//   this.load.image('star', star);
//   this.load.image('bomb', bomb);
//   this.load.spritesheet('dude', 
//       dude,
//       { frameWidth: 32, frameHeight: 48 }
//   );
//   // this.load.image("ground", picopicofarm);
//   // this.load.image("farm", simplefarmpack);
// }

// let platforms;
// let player;
// let cursors;
// let stars;

// function create() {
//   this.add.image(400, 300, 'sky');
  
//   platforms = this.physics.add.staticGroup();

//   this.add.image(400, 300, 'star');
//   // const logo = this.add.image(400, 150, "logo");
//   // const ground = this.add.image(400, 400, "ground");
//   // const farm = this.add.image(600, 600, "farm");

//   platforms.create(400, 568, 'ground').setScale(2).refreshBody();
  
//   platforms.create(750, 220, 'ground');
//   platforms.create(600, 400, 'ground');
//   platforms.create(50, 250, 'ground');
//   platforms.create(750, 220, 'ground');
  
  
//   // this.tweens.add({
//   //   targets: logo,
//   //   y: 450,
//   //   duration: 2000,
//   //   ease: "Power2",
//   //   yoyo: true,
//   //   loop: -1
//   // });


//   player = this.physics.add.sprite(100, 450, 'dude');

//   player.setBounce(0.2);
//   // player.body.setGravityY(300);
//   player.setCollideWorldBounds(true);
//   this.physics.add.collider(player, platforms);
//   this.physics.add.collider(stars, platforms);
//   this.physics.add.overlap(player, stars, collectStar, null, this);
//   cursors = this.input.keyboard.createCursorKeys();



  
//   this.anims.create({
//     key: 'left',
//     frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
//     frameRate: 10,
//     repeat: -1
//   });

//   this.anims.create({
//     key: 'turn',
//     frames: [ { key: 'dude', frame: 4} ],
//     frameRate: 20
//   });

//   this.anims.create({
//       key: 'right',
//       frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
//       frameRate: 10,
//       repeat: -1
//   });
// }

//   function update() {
//     if (cursors.left.isDown)
//     {
//         player.setVelocityX(-160);
    
//     }
//     else if (cursors.right.isDown)
//     {
//         player.setVelocityX(160);
    
//         player.anims.play('right', true);
//     }
//     else
//     {
//         player.setVelocityX(0);
    
//         player.anims.play('turn');
//     }
    
//     if (cursors.up.isDown && player.body.touching.down)
//     {
//         player.setVelocityY(-580);
//     }

//     stars = this.physics.add.group({
//       key: 'star',
//       repeat: 11,
//       setXY: { x: 12, y: 0, stepX: 70 }
//     });
    
//     function collectStar (player, star){
//       star.disableBody(true,true);
//     }
    
//     stars.children.iterate(function (child) {
    
//       child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
      
    
//     });
  
  

// }






