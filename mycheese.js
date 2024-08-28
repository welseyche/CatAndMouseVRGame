
class Cheese{
  constructor(x,y,z){
    this.x = x; 
    this.y = y; 
    this.dy = rnd(2, 5) / 100;
    this.z = z;
    this.a = 0;
    this.da = 0.05;
    this.hit = 0;
    this.available = true;

    this.obj = document.createElement("a-cylinder");
    this.obj.setAttribute("color","yellow");
    this.obj.setAttribute("radius", 2);
    this.obj.setAttribute("interact","");
    this.obj.setAttribute("scale","0.5 1 0.5");
    this.obj.setAttribute("segments-radial",3);
    this.obj.setAttribute("side","double");
    this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
    this.obj.setAttribute("sound", {src:"#collect", loop:false, volume:1});
    
    scene.append(this.obj);

    
  }
  float(){
    if(this.available)
    {
      this.y += this.dy;
      this.a += this.da;
        
      this.obj.object3D.position.y = this.y;
      this.obj.object3D.rotation.y = this.a;
    
      if(this.y < 1.5 || this.y > 2.5){
        this.dy = -this.dy;
      }
    }
  }
  collect(){
    this.available = false;
    this.obj.components.sound.playSound();
  }
}