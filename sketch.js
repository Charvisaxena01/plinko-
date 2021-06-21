const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
var engine,world;
var plinkos = [];
var divisions = []
var particle;
var divisionHeight=300;
var score =0;
var ground;
var count = 0;
var gameState = "play"


function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
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
    Engine.run(engine)  
}





 


function draw() {

  background("black");
  textSize(20)

  fill("lightblue")
  
 text("Press r to reset the game",20,20)
 fill("lightgreen")
 text("Score : "+score,20,40);

  text("500",20,531)
  text("500",103,531)
  text("500",185,531)
  text("500",264,531)
  text("100",343,531)
  text("100",420,531)
  text("100",500,531)
  text("200",580,531)
  text("200",665,531)
  text("200",745,531)

Engine.update(engine);
ground.display()
if(gameState== "end"){
  background("black")
  fill("red")
  textSize(100)
  text("Game Over",184,218)
}


if(particle!=null)
{
 particle.display()

if(particle.body.position.y>490)
{
  if(particle.body.position.x<328 && particle.body.position.x>9)
  {
    score = score+500
    particle = null
    if ( count>= 5 ) gameState ="end";
  }

  else if(particle.body.position.x<567 && particle.body.position.x>329)
  {
 score = score+100
 particle = null
 if ( count>= 5 ) gameState ="end";
  }
  else if(particle.body.position.x<807 && particle.body.position.x>598)
  {
    score = score+200
    particle = null
    if ( count>= 5 ) gameState ="end";
  }
}
}

 for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

}
function mousePressed(){
   if(gameState!="end"){
     count++
  particle = new Particle(mouseX,10, 10,10);
 

   } 
  }
  function keyPressed(){
    if(keyCode === 82){
      gameState = "play"
      count = 0
      score = 0
    }
  }

