
var monkey, monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score,ground

function preload(){
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}
function setup() {
  createCanvas(800,300)
  monkey=createSprite(60,200,10,10)
  monkey.addAnimation("monkey",monkey_running)
  monkey.scale=0.14
  ground=createSprite(400,259,1600,10)
  ground.x=ground.width/2 
  FoodGroup= new Group() 
  obstacleGroup= new Group()
  score=0
}


function draw() {
background(255)
  ground.velocityX=-2
  if(ground.x<0){
     ground.x=ground.width/2
     }
  if(keyDown("space")){
     monkey.velocityY=-10
     }
  monkey.velocityY= monkey.velocityY+0.5
  monkey.collide(ground)
  createObjects ()
   if(monkey.isTouching(FoodGroup)){
      score=score+1
      FoodGroup.destroyEach()
       }
  drawSprites()
  textSize(20)
  text("Survival Time "+score,350,30)
}
function createObjects (){
   if(World.frameCount%100===0){
     banana=createSprite(800,Math.round(random(50,100)))
     banana.velocityX=-4
     banana.addImage(bananaImage)
     banana.scale=0.1
     FoodGroup.add(banana)
   }
  if(World.frameCount%250===0){
    obstacle=createSprite(800,220)
     obstacle.velocityX=-4
     obstacle.addImage(obstacleImage)
     obstacle.scale=0.2 
     obstacleGroup.add(obstacle)
  }
  
}






