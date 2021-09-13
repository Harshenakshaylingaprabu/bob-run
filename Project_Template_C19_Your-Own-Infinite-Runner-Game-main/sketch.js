var bob,bobImg,coin,coinImg,mushroom,mushroomImg,snail,snailImg,gameover,gameoverImg
var gamestate = 1
var PLAY = 1
var END = 0
var score=0
var sea,seaImg,slab,invisibleGround,coinG,mushroomG,snailG,slabG



function preload(){
bobImg=loadAnimation("trex1.png","trex3.png","trex4.png")
coinImg=loadImage("coin.png")
seaImg=loadImage("background.png")
mushroomImg=loadImage("mushroom.png")
snailImg=loadImage("snail.png")
gameover=loadImage("gameOver.png")

}

function setup() {
createCanvas(600,600)
sea=createSprite(300,300,600,600)
sea.addImage(seaImg)
sea.velocityX=-7

bob=createSprite(100,500,50,50) 
bob.addAnimation("walking",bobImg)
bob.scale=0.5



invisibleGround=createSprite(300,500,600,50)

snailG = new Group()
mushroomG = new Group()
slabG = new Group()
coinG = new Group()
}

function draw() {
    background("white")
    text("Score: "+ score, 500,50);
  
    

    
 if(sea.x<0){
     sea.x=sea.width/8
     
 }
 invisibleGround.visible=false
 bob.collide(invisibleGround)
 bob.collide(slab)
 if(keyDown("space")){
     bob.y=bob.y-23
 }


 bob.y=bob.y+1

 spawn()
  
     
    if(bob.isTouching(coinG)){
    coinG.destroyEach()
    score=score+1
    }

    if (bob.isTouching(snailG)||bob.isTouching(mushroomG)){
     bob.destroy()
     bob.addAnimation("game over",gameoverImg)
     coinG.destroyEach()
     gamestate=END
     snailG.destroyEach()
     mushroomG.destroyEach()
     
     
    }
    drawSprites()
}


function spawn(){
    if (frameCount % 60 === 0){
 slab=createSprite(Math.round(random(300,550)),Math.round(random(10,450)),80,20)
 coin.createSprite(x,y,50,50)
 coin.x=slab.x
 coin.y=slab.y
 coin.addImage(coinImg)
 mushroom=createSprite(Math.round(random(10,450)),510,20,20)
 mushroom=addImage(mushroomImg)
 mushroomG.add(mushroom)
 coinG.add(coin)
 slabG.add(slab)
 snailG.add(snail)
    }

}