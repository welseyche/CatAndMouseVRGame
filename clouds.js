class Cloud{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.dx = 1;

    this.obj = document.createElement("a-entity");
    let shapes = ["a-dodecahedron","a-icosahedron","a-octahedron","a-tetrahedron"];

    for(let i = -1; i <= 1; i++){
      let r = Math.floor(rnd(0,shapes.length));
      let puff = document.createElement(shapes[r]);
      puff.setAttribute("position",{x:i, y:0, z:0});
      this.obj.append( puff );
    }
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    this.obj.setAttribute("scale", "15 15 15")
    scene.append( this.obj )
  }
  fly(){
    this.x += this.dx
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
    if(this.x > 200){
      this.x = rnd(-200,200);
    }

  }
}