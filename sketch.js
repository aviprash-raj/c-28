const World = Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const Constraint = Matter.Constraint

var myEngine, myWorld, ground
var box1,box2,box3,box4,box5;
var pig1,pig2
var log1,log2,log3,log4,log5;
var bird;
var backgroundImg


function preload() {
  backgroundImg = loadImage("sprites/bg.png")
}
function setup() {
  createCanvas(1200,400);

  myEngine = Engine.create();
  myWorld = myEngine.world;
 
  ground = new Ground(600,390,1200,20);

box1 = new Box(700,320,70,70);
box2 = new Box(920,320,70,70);
pig1 = new Pig(810,350);
log1 = new Log(810,260,300,PI/2);


box3 = new Box(700,240,70,70);
box4 = new Box(920,240,70,70);
constrainedLog = new Log(230,180,80,PI/2)
pig2 = new Pig(810,220);
log2 = new Log(810,180,300,PI/2);

box5 = new Box(810,160,70,70);
log3 = new Log(760,120,150,PI/7);
log4 = new Log(870,120,150,-PI/7);

bird = new Bird(200,200)
slingShot = new SlingShot(bird.Body,{x: 200,y:100})
}

function draw() {
  background(backgroundImg);
  
  Engine.update(myEngine);
  ground.display();

  box1.display();
  box2.display();
  pig1.display();
  log1.display();

  box3.display();
  box4.display();
  pig2.display();
  log2.display();

  box5.display();
  log3.display();
  log4.display();
  bird.display();

  slingShot.display();
}

function mouseDragged() {
  Matter.Body.setPosition(bird.Body,{x:mouseX,y:mouseY })
}
function mouseReleased() {
  slingShot.fly();
}
