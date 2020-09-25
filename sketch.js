var bullet;
var wall;
var thickness;
var speed, weight; 


function setup() {
  createCanvas(1600, 400);

thickness=random(22, 83);
speed=random(223,321)
weight=random(30,52)


	bullet=createSprite(50, 200, 50,5);   

	bullet.velocityX = speed;

	bullet.shapeColor=color(255);
  wall=createSprite(1200, 200, thickness,50);   
  wall.shapeColor=color(255);
  

}


function draw() {
  background(0);
if( hasCollided(bullet, wall))
{
	bullet.velocityX=0;
	var damage = 0.5 * weight * speed * speed/(thickness* thickness* thickness)

	if(damage>10)
	{
wall.shapeColor=color(255, 0, 0);
	}
	if (damage<10)
	{
		wall.shapeColor=color(0, 25, 0);
	}
}

  
  drawSprites();
 
}

function hasCollided(bullet1, wall1)
{
bulletRightEdge=bullet1.x+bullet1.width;
wallLeftEdge=wall.x;

if(bulletRightEdge>=wallLeftEdge)
{
	return true
	
}
return  false;
}