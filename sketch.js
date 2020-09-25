var car,wall ; 
var car1, wall1 ;
var speed,weight ; 

function setup() {
 var canvas =  createCanvas(1600,400);
 //canvas.shapeColor = color(80,80,80);


  speed=random(55,90);
  weight=random(400,1500);

 car =  createSprite(50,200,50,50);
 car1 = createSprite(100,300,50,50);
 car.shapeColor='white'
 car1.shapeColor='white'
 
 wall = createSprite(600,100,60,120);
 wall1 = createSprite(600,300,60,120);
 wall.shapeColor ='red'
 wall1.shapeColor ='red'
}


function draw() {
  background(80,80,80); 

  car.velocityX = speed ; 
  car1.velocityX = speed;

  if(wall.x - car.x < wall.width/2 + car.width/2) {
      car.velocityX = 0 ;
      var deformation = 0.5*weight*speed*speed /22500 ; 
      if(deformation > 180 )
      {
        car.shapeColor = 'green';
      }
      if(deformation < 180 && deformation  > 100 ) 
      {
        car.shapeColor = 'green'
      }
      if(deformation < 100 ) 
      {
        car.shapeColor = 'green'
      }
    } 
    if(wall1.x - car1.x < wall1.width/2 + car1.width/2) {
      car1.velocityX = 0 ;
      var deformation = 0.5*weight*speed*speed /22500 ; 
      if(deformation > 180 )
      {
        car1.shapeColor = 'yellow'
      }
      if(deformation < 180 && deformation  > 100 ) 
      {
        car1.shapeColor = 'yellow'
      }
      if(deformation < 100 ) 
      {
        car1.shapeColor ='yellow'
      }
    } 
  drawSprites();
}
