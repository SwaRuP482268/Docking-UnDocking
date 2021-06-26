var iss,bg_img,spacecraft;
var iss_img,spacecraft_img;
var hasDocked=false;

function preload(){

  bg_img=loadImage("spacebg.jpg");
  spacecraft_img=loadAnimation("spacecraft1.png","spacecraft2.png","spacecraft3.png","spacecraft4.png");
  iss_img=loadImage("iss.png");
 
}

function setup() {
  createCanvas(1500,750);
  
  iss=createSprite(750,250,50,50);
  iss.addImage(iss_img)
  //iss.debug=true;
  iss.setCollider("circle",-60,30,3);
  spacecraft = createSprite(750,600,50,50);
  spacecraft.addAnimation("Flying",spacecraft_img);
  spacecraft.scale=0.2;
  
  
 }

function draw() {
  background(bg_img);  

   

   if(keyDown(UP_ARROW)){
     spacecraft.velocityY=-1;
    
   }

   if(keyDown(DOWN_ARROW)){
      spacecraft.velocityY=1;
   }
   
   if(keyDown(RIGHT_ARROW)){
    spacecraft.velocityX=1;
 }
 
 if(keyDown(LEFT_ARROW)){
  spacecraft.velocityX=-1;
}

  if(spacecraft.isTouching(iss)){
    spacecraft.velocityX=0;
    spacecraft.velocityY=0;
    textSize(25);
    fill("White");
    text("Docking Succesfull !",550,600);

    hasDocked=true;
  }
 
  drawSprites();
  
}


