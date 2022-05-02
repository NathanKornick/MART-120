// x and y for my character
var characterX = 20;
var characterY = 560;

// define the keys
var w = 87;
var s = 83;
var a = 65;
var d = 68;

// x and y for shape
var shapeX = 30;
var shapeY = 50;

var shapeXs = [];
var shapeYs = [];
var diameters = [];

var shapeXSpeeds = [];
var shapeYSpeeds = [];

var shapeColor = [];

// create shape when mouse is clicked
var mouseShapeX;
var mouseShapeY;

function setup() {
    createCanvas(500, 600);
    // get random speed
    for (var i = 0; i < 50; i++) {
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeXs[i] = getRandomNumber(500);
        shapeYs[i] = getRandomNumber(600);
        diameters[i] = getRandomNumber(30);
    // get random color
        shapeColor[i] = random(255);
    }
}

function draw() {
    background(75, 13, 13);
    stroke(0);
    fill(0);

    // create borders function
    createBorders();

    // create character functions
    createCharacter();
    characterMovement();

    // random number function
    getRandomNumber();

// obstacles
for (var i = 0; i < shapeXs.length; i++) {
    fill(shapeColor[i]);
    circle(shapeXs[i], shapeYs[i], diameters[i]);
    shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

// move the shape
shapeXs[i] += shapeXSpeeds[i];
shapeYs[i] += shapeYSpeeds[i];

// check to see if shape has gone out of bounds
if (shapeXs[i] > width) {
    shapeXs[i] = 0;
}
if (shapeXs[i] < 0) {
    shapeXs[i] = width;
}
if (shapeYs[i] > height) {
    shapeYs[i] = 0;
}
if (shapeYs[i] < 0) {
    shapeYs[i] = height;
}
}

 // exit message
if(characterX > width && characterY > width-420 && characterY < width-340)
{
    fill('white');
    stroke(5);
    textSize(26);
    text("You Win!", width/2-50, height/2-50);
}

// draw the mouse
    fill(254,254,254);
    circle(mouseShapeX,mouseShapeY,30);
}

// borders
function createBorders()
{
 // top border
 fill(164,155,155)
 rect(0,0,width,10);
 // left border
 rect(0,0,10,height);
 // bottom border
 rect(0,height-10,width,10);
 // right upper border
 rect(width-10,0,10,height-500);
 // right upper borderB
 rect(width-10,height-440,10,440);
}

// character
function createCharacter()
{
 fill(164,155,155);
 square(characterX,characterY,20);
}

function characterMovement()
{
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
}

// mouse function
function mouseClicked() {
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

// random number
function getRandomNumber(number) {
return Math.floor(Math.random() * number) + 10;
}
