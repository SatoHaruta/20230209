let blink1 = false;
let blink2 = false;
function setup(){
  createCanvas(windowWidth,windowHeight);
}

function drawface(eye1Size, eye2Size,lipSize,lipWidth){
  background(200);
  fill(0);
  rectMode(CENTER);
  if(eye1Size > 0.01){
    blink1 = true;
  }
  if(eye1Size <= 0.01){
    blink1 = false
  }
  if(eye2Size > 0.01){
    blink2 = true;
  }
  if(eye2Size <= 0.01){
    blink2 = false
  }
  ellipse(width/3,height/3,100,eye1Size*3000);
  ellipse(width/3*2,height/3,100,eye2Size*3000);
  rect(width/2,height/3*2,lipWidth*4000,1500*lipSize);
  console.log(blink1+"_"+blink2);
}

