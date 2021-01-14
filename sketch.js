const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var polygon, slingshot;


var canvas;
function preload(){
    polygonimage = loadImage("polygon.png");
}
function setup(){
    engine = Engine.create(); 
    world = engine.world;
    Engine.run(engine);


    var canvas = createCanvas(1200,400);
    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

    slingshot = new SlingShot(this.polygon,{x:100,y:200 });
    ground = new Ground(615,365,260,10);
    ground1 = new Ground(970,260,200,10);
block8 = new Block(525,340,30,40);
block9 = new Block(555,340,30,40);
block10= new Block(585,340,30,40);
block11 = new Block(615,340,30,40);
block12 = new Block(645,340,30,40);
block13 = new Block(675,340,30,40);
block14 = new Block(705,340,30,40);

block15 = new Block(555,300,30,40);
block16 = new Block(585,300,30,40);
block17 = new Block(615,300,30,40);
block18 = new Block(645,300,30,40);
block19 = new Block(675,300,30,40);

block20 = new Block(585,260,30,40);
block21 = new Block(615,260,30,40);
block22 = new Block(645,260,30,40);

block23 = new Block(615,220,30,40);


block24 = new Block(910,235,30,40);
block25 = new Block(940,235,30,40);
block26 = new Block(970,235,30,40);
block27 = new Block(1000,235,30,40);
block28 = new Block(1030,235,30,40);

block29 = new Block(940,195,30,40);
block30 = new Block(970,195,30,40);
block31 = new Block(1000,195,30,40);

block32 = new Block(970,155,30,40);


}
function draw(){
    //Engine.run(engine);
    background(56,44,44);
slingshot.display();
fill("red");
ground.display();
ground1.display();
fill("lightblue");
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();

block24.display();
block25.display();
block26.display();
block27.display();
block28.display();
fill("pink");
block15.display();
block16.display();
block17.display();
block18.display();
block19.display();

block29.display();
block30.display();
block31.display();
fill("turquoise");
block20.display();
block21.display();
block22.display();

block32.display();
fill("gray")
block23.display();


image(polygonimage,polygon.position.x,polygon.position.y,40,40);
}
function mouseDragged(){
        Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}