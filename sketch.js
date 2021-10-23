
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
function preload()
{
	
}
var  ball
function setup() {
	createCanvas(1000, 1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var ball_options={
	isStatic:false,
	restitution:0.34,
	friction:0,
	density:1.2
}
ball=	Matter.Bodies.circle(30,50,20,ball_options)
Matter.World.add(world,ball)
	Engine.run(engine);
  groundObj=new Ground(width/2,670,width,20)
 leftSide= new Ground(500,600,20,120)
 rightSide= new Ground(700,600,20,120)
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
  groundObj.show()
  rightSide.show()
 leftSide.show()
}

function keyPressed(){
if (keyCode===UP_ARROW){
	Matter.Body.applyForce(ball, {x :0,y:0},{x:5,y:-5})
}
}

