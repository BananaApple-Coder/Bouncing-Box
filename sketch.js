var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;
var colors = ["blue", "green", "red", "orange"]

function preload(){
    // load sound here
    music = loadSound("music.mp3")
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

    block3 = createSprite(515,580,200,30);
    block3.shapeColor = "red";

    block4 = createSprite(740,580,200,30);
    block4.shapeColor = "Green";

    //create two more blocks i.e. block3 and block4 here

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = colors[Math.round(random(0, 3))];
    //write code to add velocityX and velocityY
    ball.velocityX = random(4, 8)
    music.play();

}

function draw() {
    let stopped = false
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    if (stopped === false){
        ball.velocityY += random(0.5, 1)
    }

    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball)){
        ball.bounceOff(block1)
        ball.shapeColor = "blue";
    }



    if(block2.isTouching(ball)){
        stopped = true
        ball.shapeColor = "orange";
        //write code to set velocityX and velocityY of ball as 0
        ball.velocityX = 0
        ball.velocityY = 0
        ball.y = 550

        //write code to stop music
        music.stop()
    }

    //write code to bounce off ball from the block3
    if(block3.isTouching(ball)){
        ball.bounceOff(block3)
        ball.shapeColor = "red";
    }


    //write code to bounce off ball from the block4
    if(block4.isTouching(ball)){
        ball.bounceOff(block4)
        ball.shapeColor = "green";
    }

    drawSprites();
}
