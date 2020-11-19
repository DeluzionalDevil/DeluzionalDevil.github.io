var x = 300;
var y = 200;
var speed = 3;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(250);
  stroke(0);
  strokeWeight(3);
  noFill();
  ellipse(x, y, 55, 55);



if(x> width||x<0){
    
  xspeed=xspeed*-1
  }  
  if(y>height||y<0){
    
  speed=speed*-1
  }
  
  x= x+speed;
  y= y+speed;
}