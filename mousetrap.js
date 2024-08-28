class Mousetrap{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.hit = 0;
    this.available = true;
    this.hit = 0;

    this.obj = document.createElement("a-box");
    this.obj.setAttribute("height",1);
    this.obj.setAttribute("width",6);
    this.obj.setAttribute("depth",3);
    this.obj.setAttribute("shadow",{receive:true});
    this.obj.setAttribute("src","#trap");
    this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});

    let fake = document.createElement("a-cylinder");
    fake.setAttribute("color","yellow");
    fake.setAttribute("radius", 2);
    fake.setAttribute("scale","0.5 1 0.5");
    fake.setAttribute("segments-radial",3);
    fake.setAttribute("side","double");
    fake.setAttribute("position","0 1 0");
    this.obj.append(fake);
    
    scene.append(this.obj);

  }
  trapped(){
    this.available = false;
  }
}