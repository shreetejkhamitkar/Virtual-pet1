//Create variables here
var dog;
var happyDog;
var database;
var foodS;
var foodStock;

function preload()
{
  //load images here
  dogImage=loadImage("images/dogImg.png");
  happyDog=loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);

  dog=createSprite(250,250,10,10);
  dog.addImage(dogImage);
  dog.scale=0.2;

  database = firebase.database();

  foodStock = database.ref('food');
  foodStock.on("value", readStock);
}


function draw() {  
background(46, 139, 87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(happyDog);
}

  drawSprites();
  textSize(20);
  fill("yellow")
   text("Food Remaining:" + foodS, 250,480);
   text("Press Up Arrow Key To Feed Jack !!",120,80);
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
     food:x
})

}
