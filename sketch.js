var path,car, leftBoundary, rightBoundary;
var pathImg,carImg;
var i;
var score = 0;
function preload(){
 pathImg = loadImage("path.png");
carImg = loadImage("Car.png");
}

function setup(){

createCanvas (550,400);

//Moving background
path= createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale = 1;

//creating car running
car = createSprite(180,340,30,30);
car.scale=0.08
car.addAnimation("Car.png",carImg);

// create left Boundary
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;

//create right boundary
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw(){
  background(0);
  stroke("purple");
  fill ("white");
  textSize(20);
  text("Score: " + score, 400, 30);

 path.velocityY = 4;

//car\ moving on Xaxis with mouse
car.x = World.mouseX;

edges= createEdgeSprites();
car.collide(edges[3]);
car.collide(leftBoundary);
car.collide(rightBoundary);

//code to reset the background 
if(path.y > 400 ){
  path.y = height/2;
}

  drawSprites();
}