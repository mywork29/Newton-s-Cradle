
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{

  //var rope,ground;
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/3,height/3,width/3,20);

  bobDiameter = 40;

  startBobPositionX = width/2;
  startBobPositionY = height/4+200;

  bobObject1 = new Ball(startBobPositionX-bobDiameter*2, startBobPositionY,bobDiameter);
  bobObject2 = new Ball(startBobPositionX-bobDiameter, startBobPositionY,bobDiameter);
  bobObject3 = new Ball(startBobPositionX, startBobPositionY,bobDiameter);
  bobObject4 = new Ball(startBobPositionX+bobDiameter, startBobPositionY,bobDiameter);
  bobObject5 = new Ball(startBobPositionX+bobDiameter*2, startBobPositionY,bobDiameter);

  chain1 = new Chain(bobObject1.body,ground.body,-bobDiameter*2,0);
  chain2 = new Chain(bobObject2.body,ground.body,-bobDiameter*1,0);
  chain3 = new Chain(bobObject3.body, ground.body,0,0);
  chain4 = new Chain(bobObject4.body,ground.body,bobDiameter*1,0);
 chain5 = new Chain(bobObject5.body,ground.body,bobDiameter*2,1);








  
  //ball1= new Ball (130,350,2/1);
  //ellipse(200,200,200,100);
  
  //ball2 = new Ball (250,350,2/1);

  //ball3 = new Ball (300,350,2/1);

  //ball4 = new Ball (350,350,2/1);

  //ball5 = new Ball (400,350,2/1);

  //ball6 = new Ball (450,350,2/1);

  
  
 //chain1 = new Chain(ball1.body, ground.body);

 // chain2 = new Chain(ball2.body, ground.body);

  //chain3 = new Chain(ball3.body, ground.body);

 // chain4 = new Chain(ball4.body, ground.body);

 

  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(160);
  //Engine.update(engine);

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  //ball6.display();
  ground.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  
  
  drawSprites();

 
}

function keyPressed () {

  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-34,y:-15});

  }
}



