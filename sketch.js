var bullet,wall;

var speed,weight;
var thickness;



function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
weight=random(400,1500);
thickness=random(22,83);
  bullet=createSprite(50, 200, 50, 50);
  bullet.velocityX=speed;

  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80)
  
}

function draw() {
  background(0); 
  if(Has_collided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
    if(damage>10)
    {
      wall.shapeColor=color("red")
    }
    else{
      wall.shapeColor=color("green")
    }
    console.log(damage)
  }
 

  drawSprites();
}
function Has_collided(l_bullet,l_wall){
  bulletRightEdge=l_bullet.x+l_bullet.width;
  wallLeftEdge=l_wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}