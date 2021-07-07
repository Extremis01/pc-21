
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground =new Ground(400,680,780,20);
	right = new Ground(390,620,20,100);
	left = new Ground(580,607,20,125);
	top_wall = new Ground(200,10,400,20);
   ball_options={
	   restitution:0.3,
friction:0,
density:1.2}

  ball=Bodies.circle(200,100,20,ball_options);
  
  World.add(world,ball)
   
  

	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill(255)
  ellipse(ball.position.x,ball.position.y,35);
 
  ground.show();
 
  left.show();
  right.show();
  Engine.update(engine);
 


 
}
function keyPressed(){
	if(keyCode==UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:50,y:-50});

	}
}



