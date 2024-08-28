class Door{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.a = -45;
    // this.da = 5;
    this.rotate = false;

    this.obj = document.createElement("a-entity");
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    this.obj.setAttribute("rotation",{x:0,y:this.a,z:0});

    let plank = document.createElement("a-box");
    plank.setAttribute("src","#redwood");
    plank.setAttribute("position","0 0 0");
    plank.setAttribute("rotation","0 0 0");
    plank.setAttribute("width",20);
    plank.setAttribute("height",45);
    plank.setAttribute("depth",1);
    plank.setAttribute("shadow",{receive:true});
    plank.setAttribute("interact","");
    plank.setAttribute("static-body", "");
    this.obj.append(plank);


    let knob = document.createElement("a-sphere");
    knob.setAttribute("position","6 0 0");
    knob.setAttribute("radius",2);
    knob.setAttribute("color","grey");
    knob.setAttribute("shadow",{receive:true});
    this.obj.append(knob);

    scene.append(this.obj);

     plank.addEventListener("click",()=>{
       if(this.rotate == false){
         this.rotate = true; 
       }
     })

    
  }
   open(){
     if(this.rotate == true){
       this.a -= this.da;
       this.obj.setAttribute("rotation",{x:0,y:this.a,z:0})
     }
     if(this.a >= 0 || this.a <= -90){
       this.da = 0;
       this.rotate = false;
     }
   }
  
}