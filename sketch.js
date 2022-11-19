var bgImg;
var boy,boyAni;
var invisibleGround;
var ground;

function preload() {
  bgImg = loadImage("./Images/Background.png");
  boyAni = loadAnimation("./Images/Boy1.png","./Images/Boy2.png","./Images/Boy3.png","./Images/Boy4.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  ground = createSprite(500 ,height/2,width,height);
  //ground.addImage(bgImg);
  //ground.scale = 1.5

  boy = createSprite(width/4 - 300,height - 250);
  boy.addAnimation("Boy",boyAni);
  boy.scale = 1.7;

  invisibleGround = createSprite(width/2,height - 100,width,50);
  invisibleGround.visible = false;

  
}

function draw() {
  background(0);  

  image(bgImg,0,0,width,height)

  ground.velocityX = -10;

  drawSprites();
}
