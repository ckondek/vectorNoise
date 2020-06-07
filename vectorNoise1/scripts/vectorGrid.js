/*VectorGrid is a 1D array of vectors built on 2D perlan nosie.
You create an instance of the grid with a width and height.
Methods of the VectorGrid instance allow you to update the grid using the z variable as a time slice,
and it returns a vector at either an x,y position or an 1d array index.
*/

class VectorGrid{
  constructor(gridWidth,gridHeight){
    this.width =gridWidth;
    this.height=gridHeight;
    this.grid=new Array(this.width*this.height);
    for (let i = 0;i<this.grid.length;i++){
      this.grid[i]=createVector(0,0,0);
    }

  }
  pushVector(vector){
    this.grid.push(vector)
  }
  addVectorbyIndex(index,vector){
    this.grid[index]=vector;
  }
  setVectorbyXY(x,y,vector){
    let index=x+y*this.width;
    this.grid[index]=vector;
  }
  getVectorbyIndex(index){
    return this.grid[index]
  }
  getVectorbyXY(x,y){
    //if (y>=30){y=29}
    //if (x>=40){x=39}

    let index=x+y*this.width;
    return this.grid[index]
  }
  headingsFromNoise(noiseInc,vectorMag,timeOffset){
    let xOff=0;
    let yOff=0;
    for (let y=0;y<this.height;y++){
      xOff=0;
      yOff+=noiseInc;
      for (let x=0;x<this.width;x++){
        xOff+=noiseInc;
        console.log(noise(xOff,yOff,timeOffset)*540)
        let heading=radians(noise(xOff,yOff,timeOffset)*9940)
        let vector=p5.Vector.fromAngle(heading,vectorMag)
        this.setVectorbyXY(x,y,vector)
      }
    }

  }
  display(drawFunction,scale){
    for (let y=0;y<this.height;y++){
      for (let x=0;x<this.width;x++){
        let v=this.getVectorbyXY(x,y)
        push();
        translate(x*scale,y*scale)
        drawFunction(v)
        pop();

      }
    }

  }
}
