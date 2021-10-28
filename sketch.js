var sanitizer,sanitizerImg;
var human,humanImg;
var mask,maskImg;
var sink,sinkImg;
var crowd,crowdImg;
var ground,groundImg;

function preload(){
    sanitizerImg = loadImage("sanitizer.jpg");
    humanImg = loadImage("human.jpg");
    maskImg = loadImage("mask.jpg");
    sinkImg = loadImage("sink.jpg");
    crowdImg = loadImage("crowd.jpg");
    groundImg = loadImage("ground.jpg");
}

function setup(){
    canvas = createCanvas(800,800);

    sanitizer = createSprite(500,100,30,30);
    sanitizer.addImage(sanitizerImg);
    sanitizer.scale = 0.3;
    sanitizer .depth = 5;

    human = createSprite(100,300,30,30);
    human.addImage(humanImg);
    human.scale = 0.5;

    mask = createSprite(450,600,30,30);
    mask.addImage(maskImg);
    mask.scale = 0.3

    sink = createSprite(700,500,30,30);
    sink.addImage(sinkImg);
    sink.scale = 0.3;

    crowd = createSprite(150,100,30,30);
    crowd.addImage(crowdImg);
    crowd.scale = 0.6;

   // ground = createSprite(700,300,400,400);
   // ground.addImage(groundImg);
    //ground.depth = ground.depth-2
    //ground.scale = 4;
    //ground.velocityX = -4;

}

function draw(){
    background(0);

    drawSprites();
}