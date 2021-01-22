
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var roofObject,bob1,bob2,bob3,bob4,bob5,rope1,rope2,rope3,rope4,rope5;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    roofObject=new roof(350,100,300,30);
    World.add(world, roofObject);
    bob1= new bob(250,300);
    bob2= new bob(300,300);
    bob3= new bob(350,300);
    bob4= new bob(400,300);
    bob5= new bob(450,300);
    rope1= new Rope(bob1.body,roofObject.body,-100,0);
    World.add(world, rope1);
    rope2= new Rope(bob2.body,roofObject.body,-50,0);
    World.add(world, rope2);
    rope3= new Rope(bob3.body,roofObject.body,0,0);
    World.add(world, rope3);
    rope4= new Rope(bob4.body,roofObject.body,50,0);
    World.add(world, rope4);
    rope5= new Rope(bob5.body,roofObject.body,100,0);
    World.add(world, rope5);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  
  roofObject.display();
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();

  keyPressed();
 
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-500,y:0});
  }
}



