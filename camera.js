class Camera {
  constructor(x, y, z) {
    this.x = x; 
    this.y = y;
    this.z = z;
    this.obj = document.createElement("a-gltf-model");
    
    this.obj.setAttribute("src", "#camera");
    this.obj.setAttribute("shadow", { receive: true });
    this.obj.setAttribute("scale", "1 1 1");
    this.obj.setAttribute("rotation", "0 -270 0");
    this.obj.setAttribute("position", { x: this.x, y: this.y, z: this.z });
    scene.append(this.obj);
    
    this.obj.setAttribute("interact", "");
    
    this.camera = document.createElement("a-camera");
    this.camera.setAttribute("active", false);
    this.camera.setAttribute("wasd-controls-enabled", false);
    
    this.cursor = document.createElement("a-cursor");
    this.cursor.setAttribute("raycaster", "objects: [interact]");
    this.cursor.setAttribute("color", "green");
    
    this.green = document.createElement("a-image");
    this.green.setAttribute("src", "#greenCam");
    this.green.setAttribute("width", 16);
    this.green.setAttribute("height", 9);
    this.cursor.append(this.green);
    
    this.camera.append(this.cursor);
    
    this.obj.addEventListener("click", ()=>{
      cameraOff();
      this.camera.setAttribute("active", true);
    });
    
    this.obj.append(this.camera);
  }
}



// class Camera{
//   constructor(x,y,z){
//     this.x = x; 
//     this.y = y;
//     this.z = z;

//     this.obj = document.createElement("a-gltf-model");

//     this.obj.setAttribute("src","#camera");
//     this.obj.setAttribute("shadow", {receive:true});
//     this.obj.setAttribute("scale", "1 1 1");
//     this.obj.setAttribute("rotation","0 -180 0");
//     this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z})
//     scene.append(this.obj);
    
//     this.obj.setAttribute("interact", "")

//     this.camera = document.createElement("a-camera");
//     this.camera.setAttribute("active",false);
//     this.camera.setAttribute("wasd-controls-enabled",false);


//     this.cursor = document.createElement("a-cursor");
//     this.cursor.setAttribute("raycaster", "objects: [interact]");
//     this.cursor.setAttribute("color", "green");

//     this.green = document.createElement("a-image");
//     this.green.setAttribute("src", "#greenCam");
//     this.green.setAttribute("width", 16);
//     this.green.setAttribute("height", 9);
//     this.cursor.append(this.green);
    
//     this.camera.append(this.cursor);

//     this.obj.addEventListener("click", ()=>{
//       cameraOff();
//       mainCamera.setAttribute("active", false);
//       this.camera.setAttribute("active", true);
//     })

//     this.obj.append( this.camera )
//   }
// }