class Mover{
  constructor(x,y){
    this.pos=createVector(x,y);
    this.vel=createVector(0,0);
    this.acc=createVector(0,0);
    this.mass=(random(5));
    this.size=this.mass*50
  }
  applyForce(force){
    let newForce=p5.Vector.div(force,this.mass);
    this.acc.add(newForce)
  }
  edges(){
    if(this.pos.y >height){
      this.pos.y=0;
    }
    if(this.pos.x >width){
      this.pos.x=0;
    }
    if(this.pos.y <0){
      this.pos.y=height;
    }
    if(this.pos.x <0){
      this.pos.x=width;
    }
  }

  edgesX(){
    if(this.pos.y >height+7){
      this.pos.y=-3;
    }
    if(this.pos.x >width+10){
      this.pos.x= -200;
    }
    if(this.pos.y < -5){
      this.pos.y=height+3;
    }
    if(this.pos.x < -270){
      this.pos.x=width+7;
    }
  }
  update(){
    this.vel.add(this.acc);
    this.vel.limit(2)
    this.pos.add(this.vel);
    this.acc.set(0,0);
  }
  display_func(drawFunction){
    drawFunction(this.pos.x,this.pos.y)

  }
}
