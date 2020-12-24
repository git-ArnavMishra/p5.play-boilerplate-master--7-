var hr, mn, sc;
var hrAngle, mnAngle, scAngle; 

function setup(){
    createCanvas(400,400); 
    angleMode(DEGREES);   
    noStroke();
  //;

 

  fill(255);
  arc(479, 300, 50, 50, 0, TWO_PI);
}

function draw(){
    background(0,0,0);

    
    translate(200,200)

    
    hr = hour();
    mn = minute();
    sc = second();

    scAngle = map(sc, 0, 60, 0, 360);
    mnAngle = map(mn, 0, 60, 0, 360);
    hrAngle = map(hr % 12,0,12,0,360);
    push();
    fill(0,0,0);
    stroke(255,0,0);
    strokeWeight(7);

    arc(0, 0, 280, 280, 20,scAngle);
    pop();
    
    push();
    fill(0,0,0);
    stroke(0,255,0);
    strokeWeight(7);

    arc(0, 0, 260, 260, 20,mnAngle);
    pop();
    push();
    fill(0,0,0);
    stroke(0,0,255);
    strokeWeight(7);

    arc(0, 0, 240, 240, 20,hrAngle);
    pop();
    push();
    rotate(scAngle); 
    stroke(255,0,0);
    strokeWeight(7);
    line(0,0,100,0);
    pop();

    
    push();
    rotate(mnAngle);
    stroke(0,255,0);
    strokeWeight(7);
    line(0,0,75,0);
    pop();

    
    push();
    rotate(hrAngle);
    stroke(0,0,255);
    strokeWeight(7);
    line(0,0,50,0);
    pop();



    strokeWeight(10);
    
   
}