let posx=100;
let posy=150;
//let ancho=width
//let alto=height

function setup() {
  createCanvas(400, 400);
  let ancho=width
  let alto=height

}

function draw() {
  background(220);
  //let posx=100;
  //let posy=150;
  
  posx=posx+3
  posy=posy+0
  
  
  
  push()
    translate(width/2, height/2)
    textAlign(CENTER, CENTER)
    //translate(width/2, height/2)
    let angle=frameCount/4
    rotate(-angle/2)
    text("hola humanos", 0, 0)
  pop();
  //print(frameCount)
  
  push()
    translate(width/2, height*3/4)
    //let angle=frameCount/4
    rotate(angle)
    text("🐝", 50, -10)
  pop()
  
  if (posx>width/2){
    posx=50
  }
  
  push()
      //let posx=100;
      //let posy=150;

    translate(posx, posy)
    noFill()
    //ellipse(0, 0, 50, 50)
    ellipse(0, 0, posx, posx)
  
  pop()
  
  push()
  //translate(width/2, height/2)
  //colorMode(HSB, 360, 100, 100)
  noFill();
    let latido = sin(frameCount * 0.05) * 50;
    triangle(
      width / 2, height / 3 - latido, 
      width * 2 / 3 + latido, height * 2 / 3 + latido, 
      width * 1 / 3 - latido, height * 2 / 3 + latido)
  pop()
  
  }
