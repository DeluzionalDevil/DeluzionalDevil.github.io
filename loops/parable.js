// parable opgave

function setup() {
    createCanvas(600, 600);
  }
  
  function draw() {
    background(500);
    
    circle(500,300,5) 
    circle(100,300,5)
    circle(mouseX,mouseY,5)
    
    let n=map(mouseX,0,windowWidth,1,25,true);
    n=round(n);
    
    for(let i= 0;i<=n;i++){
      
      x1=map(i,0,n,100,mouseX,100,true);
      y1=map(i,0,n,300,mouseY,true);
      x2=map(i,0,n,mouseX,500,true);
      y2=map(i,0,n,mouseY,300,true);
      
      line(x1,y1,x2,y2);
      
    }
  }