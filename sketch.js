const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var box1;
var ground1;
var stone;
var chain;
var score = 0;
var backgroundImg;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  ground1 = new Ground(300,300,200,20);
  ground2 = new Ground(600,250,150,20);
 
  //5th layer
  box1 = new Box(310,279,20,30);
  box2 = new Box(290,279,20,30);
  box3 = new Box(270,279,20,30);
  box4 = new Box(250,279,20,30);
  box5 = new Box(230,279,20,30);
  box6 = new Box(330,279,20,30);
  box7 = new Box(350,279,20,30);
  box8 = new Box(370,279,20,30);

  //4th layer
  box9 = new Box(250,249,20,30);
  box10 = new Box(270,249,20,30);
  box11 = new Box(290,249,20,30);
  box12 = new Box(310,249,20,30);
  box13 = new Box(330,249,20,30);
  box14 = new Box(350,249,20,30);
 
  //3rd layer
  box15 = new Box(330,219,20,30);
  box16 = new Box(310,219,20,30);
  box17 = new Box(290,219,20,30);
  box18 = new Box(270,219,20,30);

  //2nd layer
  box19 = new Box(310,189,20,30);
  box20 = new Box(290,189,20,30);

  //1st layer
  box21 = new Box(300,159,20,30);

  box22 = new Box(600,230,20,30);
  box23 = new Box(580,230,20,30);
  box24 = new Box(620,230,20,30);

  box25 = new Box(590,200,20,30);
  box26 = new Box(610,200,20,30);

  box27 = new Box(600,170,20,30);
 
  stone = new Stone(100,200,30,30);
   
  chain = new Chain({x: 100, y:200}, stone.body);
}

function draw() {
  background(backgroundImg);  

  Engine.update(engine);

  
  ground1.display();
  ground2.display();

  box1.display();
  box1.score();

  box2.display();
  box2.score();

  box3.display();
  box3.score();

  box4.display();
  box4.score();

  box5.display();
  box5.score();

  box6.display();
  box6.score();

  box7.display();
  box7.score();

  box8.display();
  box8.score();

  box9.display();
  box9.score();

  box10.display();
  box10.score();

  box11.display();
  box11.score();

  box12.display();
  box12.score();

  box13.display();
  box13.score();

  box14.display();
  box14.score();

  box15.display();
  box15.score();

  box16.display();
  box16.score();

  box17.display();
  box17.score();

  box18.display();
  box18.score();

  box19.display();
  box19.score();

  box20.display();
  box20.score();

  box21.display();
  box21.score();

  box22.display();
  box22.score();

  box23.display();
  box23.score();

  box24.display();
  box24.score();

  box25.display();
  box25.score();

  box26.display();
  box26.score();

  box27.display();
  box27.score();

  chain.display();
  stone.display();

  fill("white");
  text("score: " + score, 100,100)

}

function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  chain.fly();
}

function keyPressed(){
  if(keyCode === 32){
  chain.attach(stone.body);
 }
}
