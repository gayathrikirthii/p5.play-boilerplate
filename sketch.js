const Engine= Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var object,ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world=engine.world;

  var opt={
    isStatic:true
  }
  var ballopt={
    restitution:3.0
  }

  object= Bodies.rectangle(200,390,200,20,opt)
  World.add(world,object);
  console.log(object)
  
  ball=Bodies.circle(200,100,20,ballopt);
  World.add(world,ball);
}

function draw() {
  background(255,200,200);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x,object.position.y,400,20)
  //rect(200, 200, 50, 50);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20)
}
