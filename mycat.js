class Cat{
  constructor(x,y,z){
    this.x = x;
    this.y = y; 
    this.z = z;
    this.dz = rnd(-50,50) / 100;
    this.dx = rnd(-50,50) / 100 ;
    this.hit = 0;

    this.obj = document.createElement("a-gltf-model");
    this.obj.setAttribute("src","#catModel");
    this.obj.setAttribute("interact","");
    this.obj.setAttribute("animation-mixer",{timeScale: 1.5});
    this.obj.setAttribute("shadow", {receive:true});
    this.obj.setAttribute("scale", "7 7 7");
    this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
    this.obj.setAttribute("sound", {src:"#catMeow", loop:false, volume:3});
    scene.append(this.obj);    
  }

  angleTo(that){
      let dx = that.object3D.position.x - this.obj.object3D.position.x;
      let dz = that.object3D.position.z - this.obj.object3D.position.z;

      this.angle = Math.atan(dx/dz)
      if(dz < 0){
          this.angle += Math.PI
      }
  }
  rotateTowards(that){
      this.angleTo(that);
      this.obj.object3D.rotation.y = this.angle;
  }
  forward(speed){
      let dx = speed * Math.sin(this.angle);
      let dz = speed * Math.cos(this.angle);
      this.obj.object3D.position.x += dx;
      this.obj.object3D.position.z += dz; 
  }
  kill(){
    this.rotateTowards(mainCamera);       
    this.forward(0.4);
  }
  killSlow(){
    this.rotateTowards(mainCamera);       
    this.forward(0.2);
  }
  
  goToTwice(){
    this.rotateTowards(twice);       
    this.forward(3);
    
  }
  goToSVT(){
    this.rotateTowards(seventeen);       
    this.forward(3);
  }
  goToSserafim(){
    this.rotateTowards(lesserafim);       
    this.forward(3);
  }
}