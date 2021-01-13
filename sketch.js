var player1,player2;
var robot1,robot2,robot3,robot4,robot5,robot6;
var gun1,gun2,gun3;
var player1img,player2img;
var robot1img,robot2img,robot3img,robot4img;
var bg;
var score;
function preload(){
player1img=loadImage("sprites/png/idle.png");
bg=loadImage("sprites/background/png/BG.png");

}
function setup() {

  createCanvas(800,800);
  player1=createSprite(20, 20, 50, 50);
  player2=createSprite(20,775,50,50);
  robot1=createSprite(770,20,50,50);
  robot2=createSprite(770,150,50,50);
  robot3=createSprite(770,280,50,50);
  robot4=createSprite(770,410,50,50);
  robot1.velocityX=random(-5,-10);
  robot1.velocityY=random(5,10);
  robot2.velocityX=random(-5,-10);
  robot2.velocityY=random(5,10);
  robot3.velocityX=random(-5,-10);
  robot3.velocityY=random(5,10);
  robot4.velocityX=random(-5,-10);
  robot4.velocityY=random(5,10);
 edges=createEdgeSprites();
 gun1=createSprite(100,100,10,10);
 gun2=createSprite(200,600,10,10);
 gun3=createSprite(600,400,10,10);
 player1.addImage(player1img);
 player1.scale=0.1;

}

function draw() {
  background(255,255,255);
  if(keyDown("up")){
    player1.y=player1.y-5;
  } 
  if(keyDown("down")){
    player1.y=player1.y+5;
  } 
  if(keyDown("left")){
    player1.x=player1.x-5;
  }
  if(keyDown("right")){
    player1.x=player1.x+5;
  }
  if(keyDown("w")){
    player2.y=player2.y-5;
  } 
  if(keyDown("s")){
    player2.y=player2.y+5;
  } 
  if(keyDown("a")){
    player2.x=player2.x-5;
  }
  if(keyDown("d")){
    player2.x=player2.x+5;
  }
  robot1.bounceOff(edges);
  robot2.bounceOff(edges);
  robot3.bounceOff(edges);
  robot4.bounceOff(edges);
  player1.bounceOff(edges);
  player2.bounceOff(edges);
  if(player1.isTouching(gun1)){
    gun1.collide(player1);
    gun1.x=player1.x;
    gun1.y=player1.y;
  }
  if(player1.isTouching(gun2)){
    gun2.collide(player1);
    gun2.x=player1.x;
    gun2.y=player1.y;
  }
  if(player1.isTouching(gun3)){
    gun3.collide(player1);
    gun3.x=player1.x;
    gun3.y=player1.y;
  }
  if(player2.isTouching(gun1)){
    gun1.collide(player2);
    gun1.x=player2.x;
    gun1.y=player2.y;
  }
  if(player2.isTouching(gun2)){
    gun2.collide(player2);
    gun2.x=player2.x;
    gun2.y=player2.y;
  }
  if(player2.isTouching(gun3)){
    gun3.collide(player2);
    gun3.x=player2.x;
    gun3.y=player2.y;
  }
  
  
  
  
    drawSprites();
}

 