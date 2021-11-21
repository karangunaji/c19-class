var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");



}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
  ghost = createSprite(300,300,20,30);
  ghost.addImage("ghost",ghostImg)
  ghost.scale = 0.5
 
  
doorsGroup = new Group()
climbersGroup = new Group()
invisibleBlockGroup = new Group()


}

function draw() {
  background(200);
  if(gameState == "play"){


  
  
  if(tower.y > 400){
      tower.y = 300
    }
   


    if(keyDown("left_arrow"))
    {
     ghost.x =ghost.x-2
    }


    if(keyDown("right_arrow"))
    {
     ghost.x =ghost.x+2
    }

    if(keyDown("space"))
    {
     ghost.velocityY = -2
    }

    ghost.velocityY = ghost.velocityY +0.8
   if(climbersGroup.isTouching(ghost)){
     ghost.velocityY = 0
   }

   if (invisibleBlockGroup.isTouching(ghost)||ghost.y>600){
     ghost.destroy()
     gameState = "end"
   }


   spawndoor()
  
    drawSprites()

  }
  else if(gameState == "end"){
    fill("red")
    text("GAME OVER",300,300)
  }


  }


  function spawndoor(){

   if(frameCount% 200===0){
     door = createSprite(Math.round(random(200,400)),10)
     door.addImage(doorImg)
     door.velocityY = 2
    doorsGroup.add(door)
    door.liftime = 300

    invisibleBlock = createSprite(door.x,door.y+55,100,10)
    invisibleBlock.velocityY = 2
    invisibleBlock.liftime = 300
    invisibleBlockGroup.add(invisibleBlock)


    climber = createSprite(door.x ,door.y+50)
    climber.addImage(climberImg)
    climber.velocityY = 2
    climber.liftime = 300
    climbersGroup.add(climber)
    door.depth = ghost.depth 
    ghost.depth += 1


   } 





  }


