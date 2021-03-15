var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  divisions = [];
  particles = [];
  MC = false;
   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  textAlign(CENTER,CENTER);
  text("Score : "+score,400,400);
  text("100",360,500);
  text("100",440,500);
  text("50",280,500);
  text("50",520,500);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(MC && mouseY < 50){
     particles.push(new Particle(mouseX, mouseY, 10,10));
     //console.log(particles[0]);
     //score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
     if(particles[j].x > 320 && particles[j].x < width - 320 && particles[j].y > 550){
       score+=100;
       particles.splice(j,1);
       //console.log("hi");
     }else if(particles[j].x > 240 && particles[j].x < width - 240 && particles[j].y > 550){
      score+=50;
      particles.splice(j,1);
      //console.log("hi");
    }else if(particles[j].y > 550){
      score+=10;
      particles.splice(j,1);
      //console.log("hi");
    }
     
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   MC = false;
   mouseClicked = function(){
     MC = true;
   }
}
