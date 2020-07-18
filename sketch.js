
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(width/2,100,350,30);

	obj1 = new Bob(280,400);
	obj2 = new Bob(340,400);
	obj3 = new Bob(400,400);
	obj4 = new Bob(460,400);
	obj5 = new Bob(520,400);
	
	rope1 = new RopeClass(obj1.body,ground.body,-120,0);
	rope2 = new RopeClass(obj2.body,ground.body,-60,0);
	rope3 = new RopeClass(obj3.body,ground.body,0,0);
	rope4 = new RopeClass(obj4.body,ground.body,60,0);
	rope5 = new RopeClass(obj5.body,ground.body,120,0);


	Engine.run(engine);
  
	keyPressed();
}


function draw() {
  rectMode(CENTER);
  background(180);
  Engine.update(engine);
  ground.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  obj1.display();
  obj2.display();
  obj3.display();
  obj4.display();
  obj5.display();
  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(obj1.body,obj1.body.position,{x:-200,y:0});
	}
}



