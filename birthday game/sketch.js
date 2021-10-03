var path,girl, leftBoundary, rightBoundary;
var pathImg,girlImg;
var i;

function preload(){
 pathImg = loadImage("path.jpeg");
girlImg = loadImage("girl1","Girl2");
}

function setup(){

createCanvas (400,400);

//Moving background
path= createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale = 1.2;

//creating girl running
girl = createSprite(180,340,30,30);
girl.scale=0.08
girl.addAnimation("girlRunning",girlImg);

// create left Boundary
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;

//create right boundary
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw(){
  background(0);
 path.velocityY = 4;

//girl moving on Xaxis with mouse
girl.x = World.mouseX;

edges= createEdgeSprites();
girl.collide(edges[3]);
girl.collide(leftBoundary);
girl.collide(rightBoundary);

//code to reset the background 
if(path.y > 400 ){
  path.y = height/2;
}

  drawSprites();
}