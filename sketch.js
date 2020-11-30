
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Events = Matter.Events;
const Body = Matter.Body;
var wall1,wall2,wall3,wall4,ground;
var divisions=[];
var plinko=[];
var particles=[];
var divisionHeight=300;
var particle;
var score=0;
var gameState="play";
var turn=0;
function preload()
{
	
}

function setup() {
	createCanvas(800, 800);
	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  //wall1= new Ground(100,800,800,20)
  //wall2= new Ground(100,0,800,20)
  //wall3= new Ground(0,400,20,800)
  //wall4= new Ground(480,400,20,800)
  ground= new Ground(width/2,height,width,20);

 
  for(var j=40;j<=width;j=j+50){
    plinko.push(new Plinko(j,75));
  }
  for(var j=40;j<=width;j=j+50){
    plinko.push(new Plinko(j,175));
  }
  for(var j=60;j<=width;j=j+60){
    plinko.push(new Plinko(j,275));
  }
  for(var j=20;j<=width;j=j+65){
    plinko.push(new Plinko(j,375));
  }
  for(var k = 0; k <=width; k = k + 130){
    divisions.push(new Division(k,height-divisionHeight/2-10,10,divisionHeight))  
  }
  
}


function draw() {
  
  background(0);
  noStroke();
  textSize(35)
  fill("white")
  text("Score  " + score, 400, 350)

  Engine.update(engine);
  ground.display();
 // fill(127,0,0)
  //wall1.display();
  //wall2.display();
  //wall3.display();
  //wall4.display();
 // fill(255,255,255)

 if(gameState == "end"){
   textSize(15);
  text("game over",150,250);

 }

  for(var j=0;j<plinko.length;j++){
    plinko[j].display();
  }

  if (particle!== null)
  {
    console.log("inside particle")
    particle.display();
    if(particle.body.position.y>760)
    {
      if(particle.body.position.x<300){
        score=score+500;
        particle=null;
        if(turn>=5) gameState="end";
      }

      else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
      {
          score = score + 100;
          particle=null;
          if ( count>= 5) gameState ="end";

      }
      else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
      {
          score = score + 200;
          particle=null;
          if ( count>= 5)  gameState ="end";

      }  
      
    }
  }
  for(var k=0; k<divisions.length;k++){
    divisions[k].display();
  }
}

function mousePressed(){

  console.log("inside mouse pressed")
  if(gameState !== "end"){
    turn++;
    particle=new Particle(mouseX,10,10);
   
  }
}                                                                                                                                                       

