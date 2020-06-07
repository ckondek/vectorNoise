let scale=30, vGrid_x,vGrid_y,vg;
let vDraw, pDraw;  //functions with drawing instructions
let timeOffset=0, particle,gravity;
let pArray=[]



function setup() {
  let cnv=createCanvas(800,600);

  let v1 = new createVector(10,10);
  let v2= new createVector(10,10);

  console.log(v1.sub(v2))


  console.log(vGrid_x=floor(width/scale));
  console.log(vGrid_y=floor(height/scale));
  noiseSeed(8,0.9)

  vg=new VectorGrid(vGrid_x+1,vGrid_y+1);



  vDraw=function(vector){
    strokeWeight(3)
    stroke(255,35)
    line(0,0,vector.x,vector.y)
    strokeWeight(1)
    stroke(255,0,0,35)
    line(0,0,-vector.x*2,-vector.y*2)

  }


}
function draw() {


  background(0,5);
  timeOffset+=0.005
  vg.headingsFromNoise(0.05,30,timeOffset);
  vg.display(vDraw,scale)


}
function findVector(particle,vectorGrid){
  let xV = floor(particle.pos.x/scale)
  let yV = max(1,floor(particle.pos.y/scale))


  return vectorGrid.getVectorbyXY(xV,yV)

}
