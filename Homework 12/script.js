var characterX = 20;
var characterY = 560;

var w = 87;
var s = 83;
var a = 65;
var d = 68;

var shape1X = 30;
var shape1Y = 50;
var shape2X = 470;
var shape2Y = 550;
var shapeXSpeed;
var shapeYSpeed;
var shape2XSpeed;
var shape2YSpeed;

var mouseShapeX;
var mouseShapeY;

var mousex = -10;
var mousey = -10;

function setup()
{
    createCanvas(500,600);
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shape2XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 2);
    shape2YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 2);
}

function draw()
{
    background(75,13,13);
    stroke(0);
    fill(0);
    // top border
    fill(164,155,155)
    rect(0,0,width,10);
    // left border
    rect(0,0,10,height);
    // bottom border
    rect(0,height-10,width,10);
    // right upper border
    rect(width-10,0,10,height-500);
    //right upper borderB
    rect(width-10,height-440,10,440)
    
    //character
    fill(164,155,155);
    square(characterX,characterY,20);

    if(keyIsDown(w))
{
    characterY -= 10;
}
    if(keyIsDown(s))
{
    characterY += 10;
}
    if(keyIsDown(a))
{
    characterX -= 10;
}
    if(keyIsDown(d))
{
    characterX += 10;
}
// obstacle1
fill(19,34,127)
circle(shape1X,shape1Y,20);
shape1X += shapeXSpeed;
shape1Y += shapeYSpeed;
//obstacle2
fill(215,225,52);
circle(shape2X,shape2Y,40);
shape2X -= shape2XSpeed;
shape2Y -= shape2YSpeed;
// bounceShape1
if(shape1X > width)
{
    shape1X = 0;
}
if(shape1X < 0)
{
    shape1X = width;
}
if(shape1Y > height)
{
    shape1Y = 0;
}
if(shape1Y < 0)
{
    shape1Y = height;
}
// bounceShape2
if(shape2X > width)
{
    shape2X = 0;
}
if(shape2X < 0)
{
    shape2X = width;
}
if(shape2Y > height)
{
    shape2Y = 0;
}
if(shape2Y < 0)
{
    shape2Y = height;
}
// mouse1
fill(254,254,254)
circle(mousex,mousey,30);
// crossing the exit
if(characterX > width && characterY > width-420 && characterY < width-340)
{
    fill('white');
    stroke(5);
    textSize(26);
    text("You Win!", width/2-50, height/2-50);
}
}
// mouse2
function mouseClicked()
{
    mousex = mouseX;
    mousey = mouseY;
}

