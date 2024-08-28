class Grass{
  constructor(x,y,z){
    this.x = x;
    this.y = y; 
    this.z = z;

    this.obj = document.createElement("a-entity");
    this.obj.setAttribute("position",{x:x,y:y,z:z});


    let green = document.createElement("a-cone");
    green.setAttribute("radius-top",0);
    green.setAttribute("radius-bottom",0.1);
    green.setAttribute("color","green");
    green.setAttribute("shadow", {receive:true});
    green.setAttribute("position","-1 -1 1");
    this.obj.append(green);

    let yellow = document.createElement("a-cone");
    yellow.setAttribute("radius-top",0);
    yellow.setAttribute("radius-bottom",0.1);
    yellow.setAttribute("color","greenyellow");
    yellow.setAttribute("shadow", {receive:true});
    yellow.setAttribute("position","1 -1 1");
    this.obj.append(yellow);

    let darkgreen = document.createElement("a-cone");
    darkgreen.setAttribute("radius-top",0);
    darkgreen.setAttribute("radius-bottom",0.1);
    darkgreen.setAttribute("color","darkgreen");
    darkgreen.setAttribute("shadow", {receive:true});
    darkgreen.setAttribute("position","0 -1 0");
    this.obj.append(darkgreen);

    this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});
    scene.append(this.obj);
  }
}