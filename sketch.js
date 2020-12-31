
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustbin1,dustbin2, paperObject,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	
	engine = Engine.create();
	world = engine.world;

	dustbin1=new dustbin(1200,650);
    dustbin2=new dustbin(1300,650);

	paperObject=new Paper(200,450);// width,height is fixed

	groundObject=new Ground(width/2,670,width,20);//Ground g should be capital
	  
}


function draw() {
  
  background("lightblue");//paper color is black so try with different color for background
  Engine.update(engine);
	  
  dustbin1.display();
  dustbin2.display();
  paperObject.display();
  groundObject.display();
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:180,y:-165});//try adjusting x and y values
    
  	}
}
