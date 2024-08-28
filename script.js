let rnd = (l,u) => Math.random()*(u-l) + l;
let scene, cheeses = [ ], grasses = [], cat, cheese_collected = 0, camera, catCollided = false, trapCollided = false, trees = [ ], clouds = [ ], snowflakes = [ ], fan, door, traps = [ ], stair, towardsMouse = true, towardsMouseSlow = false, towardsTwice = false, towardsSVT = false, towardsSserafim = false;
window.onload = function(){
  scene = document.querySelector("a-scene");
  //mainCamera = new Player("a-camera");

  window.onclick = function()
  {
    title.setAttribute("opacity",0);
    directions.setAttribute("opacity",0);
    score.setAttribute("opacity",1);
    song.components.sound.playSound();
  }
  twice.addEventListener("click",function()
  {
    this.components.sound.playSound();
    towardsTwice = true;
    towardsMouse = false;
    towardsMouseSlow = false;
    towardsSVT = false;
    towardsSserafim = false;
  })
  seventeen.addEventListener("click",function()
  {
    this.components.sound.playSound();
    towardsSVT = true;
    towardsMouse = false;
    towardsMouseSlow = false;
    towardsTwice = false;
    towardsSserafim = false;
  })
  lesserafim.addEventListener("click",function()
  {
    this.components.sound.playSound();
    towardsSserafim = true;
    towardsMouse = false;
    towardsMouseSlow = false;
    towardsSVT = false;
    towardsTwice = false;
  })
  
  for(let i = 0; i < 30; i++)
  {
    let x = rnd(-160, 50);
    let y = 2;
    let z = rnd(-80, -5);
    let cheese = new Cheese(x, y, z);
    cheeses.push(cheese);
  }
  
  cat = new Cat(-200, 7, -100);

  for(let i = 0; i < 100; i++)
  {
    let x = rnd(-180, 100);
    let y = 1;
    let z = rnd(0, 100);
    let grass = new Grass(x, y, z);
    grasses.push(grass);
  }
  for(let i = 0; i < 100; i++)
  {
    let x = rnd(-180, 100);
    let y = 1;
    let z = rnd(-200, -100);
    let grass = new Grass(x, y, z);
    grasses.push(grass);
  }
  for(let i = 0; i < 50; i++)
  {
    let x = rnd(-165, -260);
    let y = 1;
    let z = rnd(-200, 100);
    let grass = new Grass(x, y, z);
    grasses.push(grass);
  }
  for(let i = 0; i < 50; i++)
  {
    let x = rnd(20, 100);
    let y = 1;
    let z = rnd(-200, 100);
    let grass = new Grass(x, y, z);
    grasses.push(grass);
  }

  for(let i = 0; i < 10; i++){
    let x = rnd(-300, 300);
    let y = 50;
    let z = rnd(50,500);
    let tree = new Tree(x,y,z);
    trees.push(tree);
  }
  for(let i = 0; i < 10; i++){
    let x = rnd(-300, 300);
    let y = 30;
    let z = rnd(-400,-200);
    let tree = new Tree(x,y,z);
    trees.push(tree);
  }

  camera = new Camera(-150,50,-7);

  for(let j = 0; j < 20; j++){
    let x = rnd(-200,200);
    let y = 150;
    let z = rnd(-200,200);
    let cloud = new Cloud(x,y,z);
    clouds.push(cloud);
  }

  for(let i = 0; i < 100; i++){
    let x = rnd(-200,200);
    let y = 50;
    let z = rnd(0,300);
    let snowflake = new Snowflake(x,y,z);
    snowflakes.push(snowflake);
  }
  for(let i = 0; i < 100; i++){
    let x = rnd(-200,200);
    let y = 50;
    let z = rnd(-400,-100);
    let snowflake = new Snowflake(x,y,z);
    snowflakes.push(snowflake);
  }
  for(let i = 0; i < 50; i++){
    let x = rnd(50,200);
    let y = 150;
    let z = rnd(-200,200);
    let snowflake = new Snowflake(x,y,z);
    snowflakes.push(snowflake);
  }
  for(let i = 0; i < 50; i++){
    let x = rnd(-200,-160);
    let y = 50;
    let z = rnd(-100,0);
    let snowflake = new Snowflake(x,y,z);
    snowflakes.push(snowflake);
  }
  for(let i = 0; i < 15; i++){
    let x = rnd(-160,50);
    let y = 0.5;
    let z = rnd(-80,-5);
    let trap = new Mousetrap(x,y,z);
    traps.push(trap);
  }
    
  fan = new Fan(-55, 60, -50);

  
  door = new Door(-3, 22.5,7.5);

  //stair = new Stair(-70,55,20);
  
  window.addEventListener("keydown", function(e){
    if (e.key == " ")
    {
      cameraOff();
      mainCamera.setAttribute("active", true);
    }
  })
  
  setTimeout( loop, 3000);
}  

function results(){
  if(cheese_collected >= 2000){
    youWin.setAttribute("opacity",1);
    score.setAttribute("opacity", 0);
  }
  else if(catCollided == true || trapCollided == true){
    youLose.setAttribute("opacity",1);
  }
  PlayAgain.setAttribute("opacity",1);

  window.addEventListener("keydown",function(e){
     if(e.key == "y"){
       location.reload();
     }
  })
}


function loop(){
  for(let cheese of cheeses){
    cheese.float();
    //console.log(distance(cheese.obj, mainCamera))
    if(distance(cheese.obj, mainCamera) < 3 && cheese.available)
    {
      if(cheese.hit > 0){
        cheese.obj.setAttribute("opacity",0);
        cheese.collect();
        cheese_collected+=100;
      }
      cheese.hit++;
    }
  }

  if(towardsMouse){
    cat.kill();
  }
  if(towardsMouseSlow){
    cat.killSlow();
  }
  if(towardsTwice){
    cat.goToTwice();
  }
  if(towardsSVT){
    cat.goToSVT(); 
  }
  if(towardsSserafim){
    cat.goToSserafim();
  }

  if((distance(cat.obj, twice) < 30)){
    towardsTwice = false;
    towardsMouse = true;
  }
  if((distance(cat.obj, seventeen) < 30)){
    towardsSVT = false;
    towardsMouse = true;
  }
  if((distance(cat.obj, lesserafim) < 30)){
    towardsSserafim = false;
    towardsMouse = true;
  }

  if(distance(cat.obj, mainCamera) < 10){
    if(cat.hit > 0)
    {
      catCollided = true;
      cat.obj.components.sound.playSound();
    }
    cat.hit++;
  }
    


  

  for(let trap of traps)
  {
    //console.log(distance(trap.obj, mainCamera));
    if(distance(trap.obj, mainCamera) < 2 && trap.available){
      if(trap.hit > 0)
      {
        trap.trapped();
        trapCollided = true;
      }
      trap.hit++;
      youLose.setAttribute("opacity",1);
    }
  }
  
    
  // door.open();
  fan.spin();
  if(fan.spinning == true){
    towardsMouse = true;
    towardsMouseSlow = false;
  }
  if(fan.spinning == false){
    towardsMouse = false;
    towardsMouseSlow = true;
  }
  
  for(let cloud of clouds)
  {
    cloud.fly();
  }

  for(let snowflake of snowflakes){
    snowflake.fall();
  }

  score.setAttribute("value",`SCORE: ${cheese_collected} / 2000`);
 

  
  let angle = mainCamera.object3D.rotation.y + Math.PI;
  let x = 2 * Math.sin(angle) + mainCamera.object3D.position.x;
  let z = 2 * Math.cos(angle) + mainCamera.object3D.position.z;
  light.setAttribute("position",{x:x,y:1,z:z});
  //Rotate the box instead of the spot light
  light.object3D.rotation.y = angle + Math.PI;
  light.object3D.rotation.x = mainCamera.object3D.rotation.x * 1.5;

  if(cheese_collected < 2000 && catCollided == false && trapCollided == false){
    window.requestAnimationFrame( loop );
  }
  else{
    results();
  }
}

function distance(obj1,obj2){
  let x1 = obj1.object3D.position.x;
  let y1 = obj1.object3D.position.y;
  let z1 = obj1.object3D.position.z;
  let x2 = obj2.object3D.position.x;
  let y2 = obj2.object3D.position.y;
  let z2 = obj2.object3D.position.z;

  let d = Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2) + Math.pow(z1-z2,2));
  return d;
}

function cameraOff(){
  mainCamera.setAttribute("active", false);
}



//if(distance(camera,cheese.obj) < 1){
  //cheese.obj.setAttribute("opacity",0);
//}