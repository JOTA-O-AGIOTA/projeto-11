
var ship, shipImage

var sea, seaImage

function preload(){

  shipImage = loadImage("ship-1.png")

  seaImage = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  
}

function draw() {
  background("blue");
    drawSprites();

   var ship = createSprite (10,260,10,10)
   var sea = createSprite(100,280,500,40)
 
}
