const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustbinObj ,groundObject;
var world;
var paper1;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	groundObject= new Ground(width/2,670,width,20);
	dustbinObj= new Dustbin(1200,650);
	paper = new Paper(300,400,90,100,100);

	Engine.run(engine);
}
function draw() {

  //rectMode(CENTER);
  background(230);
	
  Engine.update(engine);

  groundObject.display();
  paper.display();
  dustbinObj.display();

  if(keyWentDown("UP_ARROW")) {
	  Matter.Body.applyForce(paper.body, paper.body.position, {x:300, y:-234});
  }
}
