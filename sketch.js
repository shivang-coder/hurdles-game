var Engine = Matter.Engine,
 World = Matter.World,
Bodies = Matter.Bodies;

//var engine;
//var world;
var player;
var hurdles;
var ground;
var hurdlesGroup=createGroup();
var hurdlesImage = "sprites/hurdles.png";
var jumpingknightburnedImage = "sprites/jumping-knight_burned.png";
function preload() {
    gethurdlesImg();
   getjumpingknightburnedImage();
}
function setup() {
    var canvas = createCanvas(1200, 1200);
    engine = Engine.create();
    world = engine.world;

    player = createPlayer(100,1100,50, 50);
    
   // player.input = map(engine.world.gravity, player.min, player.max, 0, 1);
    ground = new Ground(600,1200,height,20);
}
textSize(18);
textFont("Georgia");
textStyle(BOLD);

var count = 0;
    function draw() {
        Engine.update(engine);
        background(255,0,93);
    
        spawnhurdles();
    
  
if (player.jumpoverhurdlesGroup){
count = count + 1;
}
if (player.jump){
    player.setAnimation("jumping-knight_burned.png"); 
}

        if(keyDown("space")){ //&& player.y >= 1200 
            player.velocityY = -13 ;
        }
console.log(player.velocityY)
if(keyDown("RIGHT_ARROW")) {
    player.velocityX = 4;
     player.velocityY = 0;
   }
   if(keyDown("LEFT_ARROW")) {
    player.velocityX = -4;
     player.velocityY = 0;
   }
   if(keyDown("DOWN_ARROW")) {
    player.velocityX = 0;
     player.velocityY = 0;
   }
   
    player.display;
    ground.display;
   } 
   function spawnhurdles() {
    if (World.frameCount %100 === 0) {
     var hurdles=createSprite(600,1100,50,50);
     hurdles.setAnimation("hurdles.png"); 
     hurdles.x = randomNumber(25,375);
     hurdles.scale=0.5;
     hurdles.velocityX= -5;
     hurdles.lifetime=90;
     hurdlesGroup.add(hurdles);    
    }
    } 