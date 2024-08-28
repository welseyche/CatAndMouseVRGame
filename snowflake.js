class Snowflake{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = -rnd(3,10) / 10;
    this.obj = document.createElement("a-sphere");
    this.obj.setAttribute("radius",0.75);
    this.obj.setAttribute("opacity",1);
    this.obj.setAttribute("interact", "");

    
    this.obj.addEventListener("click",()=>{
      this.obj.setAttribute("opacity",0);
    })



    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
    scene.append(this.obj);
  }
  fall(){
    if(this.y > 0){
      this.y += this.dy;
      this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z}); 
    }else{
      this.y = 50;
    }
  }
}