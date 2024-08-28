class Tree{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;

    this.obj = document.createElement("a-entity");
    this.obj.setAttribute("position",{x:x,y:y,z:z})

    let trunk = document.createElement("a-cylinder");
    trunk.setAttribute("color","brown");
    trunk.setAttribute("radius",10);
    trunk.setAttribute("shadow",{recive:true});
    trunk.setAttribute("position","0 0 0");
    trunk.setAttribute("height",200);
    trunk.setAttribute("src","#tree")
    trunk.setAttribute("static-body", "");
    trunk.setAttribute("side","double");
    this.obj.append(trunk);

    let leaves = document.createElement("a-cone");
    leaves.setAttribute("radius-top",0);
    leaves.setAttribute("radius-bottom",30)
    leaves.setAttribute("height",75);
    leaves.setAttribute("shadow",{recive:true});
    leaves.setAttribute("position","0 75 0");
    leaves.setAttribute("src", "#leaves");
    leaves.setAttribute("color", "grey");
    this.obj.append(leaves);

    let leaves2 = document.createElement("a-cone");
    leaves2.setAttribute("radius-top",0);
    leaves2.setAttribute("radius-bottom",30)
    leaves2.setAttribute("height",75);
    leaves2.setAttribute("shadow",{recive:true});
    leaves2.setAttribute("position","0 125 0");
    leaves2.setAttribute("src", "#leaves");
    leaves2.setAttribute("color", "grey");
    this.obj.append(leaves2);
   

    this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});
    scene.append(this.obj);
  }
}