const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

function preload(){
}
function setup(){
    var canvas = createCanvas(1200,660);
    engine = Engine.create();
    world = engine.world;
    Ball =new Bob(400,500)
    rope = new Rope(Ball.body,{x:400,y:50})
    ground = new Ground(600,640,1200,20)
    box1 = new Box(500,560,60,60)
    box2 = new Box(570,560,60,60)
    box3 = new Box(640,560,60,60)
    box4 = new Box(710,560,60,60)
    box11 = new Box(500,500,60,60)
    box22 = new Box(570,500,60,60)
    box33 = new Box(640,500,60,60)
    box44 = new Box(710,500,60,60)
    box111 = new Box(500,400,60,60)
    box222 = new Box(570,400,60,60)
    box333 = new Box(640,400,60,60)
    box444 = new Box(710,400,60,60)
    box1111 = new Box(500,300,60,60)
    box2222 = new Box(570,300,60,60)
    box3333 = new Box(640,300,60,60)
    box4444 = new Box(710,300,60,60)
    box11111 = new Box(500,200,60,60)
    box22222 = new Box(570,200,60,60)
    box33333 = new Box(640,200,60,60)
    box44444 = new Box(710,200,60,60)
}

function draw(){
    background("pink");
    Engine.update(engine);
    Ball.display()
    rope.display()
    ground.display()
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box11.display()
    box44.display()
    box22.display()
    box33.display()
    box111.display()
    box222.display()
    box333.display()
    box444.display()
box1111.display()
box2222.display() 
box3333.display() 
box4444.display()
box11111.display()
box22222.display()
box33333.display()
box44444.display()
textSize(30)
text("Drag the ball to demolish this building",400,50)
}
function mouseDragged(){
    Matter.Body.setPosition(Ball.body,{x:mouseX,y:mouseY})
}
