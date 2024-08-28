class Fan{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z; 
    this.a = 0;
    this.da = 10;
    this.spinning = true;

    
    this.obj = document.createElement("a-entity");
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    this.obj.setAttribute("sound", {src:"#lightsOn", loop:false, volume:10})
    
    let light = document.createElement("a-sphere");
    light.setAttribute("color","white");
    light.setAttribute("radius",5);
    light.setAttribute("position","0 0 0");
    light.setAttribute("interact","");
    light.setAttribute("shadow",{receive:true});
    this.obj.append(light);


    let plank = document.createElement("a-box");
    plank.setAttribute("position","15 0 0");
    plank.setAttribute("width",20);
    plank.setAttribute("height",1);
    plank.setAttribute("depth",6);
    plank.setAttribute("rotation","0 0 0");
    plank.setAttribute("src","#wood");
    plank.setAttribute("shadow",{receive:true});
    this.obj.append(plank);

    let plank2 = document.createElement("a-box");
    plank2.setAttribute("position","0 0 15");
    plank2.setAttribute("width",20);
    plank2.setAttribute("height",1);
    plank2.setAttribute("depth",6);
    plank2.setAttribute("src","#wood")
    plank2.setAttribute("rotation","0 90 0");
    plank2.setAttribute("shadow",{receive:true});
    this.obj.append(plank2);

    let plank3 = document.createElement("a-box");
    plank3.setAttribute("position","-15 0 0");
    plank3.setAttribute("width",20);
    plank3.setAttribute("height",1);
    plank3.setAttribute("depth",6);
    plank3.setAttribute("src","#wood")
    plank3.setAttribute("rotation","0 0 0");
    plank3.setAttribute("shadow",{receive:true});
    this.obj.append(plank3);

    let plank4 = document.createElement("a-box");
    plank4.setAttribute("position","0 0 -15");
    plank4.setAttribute("width",20);
    plank4.setAttribute("height",1);
    plank4.setAttribute("depth",6);
    plank4.setAttribute("rotation","0 90 0");
    plank4.setAttribute("shadow",{receive:true});
    plank4.setAttribute("src","#wood");
    this.obj.append(plank4);

    

    scene.append(this.obj);

    light.addEventListener("click", ()=>{
      if(this.spinning == true)
      {
        this.spinning = false;
        this.obj.components.sound.playSound();
      }
      else
      {
        this.spinning = true;
        this.obj.components.sound.playSound();
      }
    })
  }
  spin(){
    if(this.spinning == true)
    {
      this.a += this.da;
      this.obj.setAttribute("rotation",{x:0, y:this.a, z:0});
      light.setAttribute("light","type:point; intensity:0.1");
    }
    if(this.spinning == false)
    {
      light.setAttribute("light","type:point; intensity:0.5");
    }
  }
}