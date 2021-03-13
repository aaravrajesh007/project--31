const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground;
var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;

function setup() {
  createCanvas(480,800);
  engine=Engine.create();
  world=engine.world;

  for(var k=0;k<=width;k=k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }

  for(var j=40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,75,5));
  }

  for(var j=15;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,175,5));
  }

  for(var j=40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,275,5));
  }

  for(var j=15;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,375,5));
  }

  
  ground=new Ground(200, 790, 800, 10);

}

function draw() {
  background(0);
  Engine.update(engine); 
  drawSprites();
  ground.display();
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10))
  }

  for(var j=0;j<particles.length;j++){
    particles[j].display();
  }
  
  for(var k=0;k<divisions.length;k++){
    divisions[k].display();
  }

  for(var l=0;l<plinkos.length;l++){
    plinkos[l].display();
  }
}