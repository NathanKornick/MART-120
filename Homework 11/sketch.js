var headX = 250;
var headY = 250;
var headDirection = 1;

var eyebrowY = 112;
var eyebrowBY = 112;
var eyebrowDirection = 3;
var eyebrowBDirection = 6;

var mouthX = 250;
var mouthDirection = 5;

var lefteye = 150;
var lefteyeDirection = 7;

var size = 25;
var count = 0;
var sizeDirection = 2;

function setup () 
{
    createCanvas(600,500);
}

function draw ()
{
    stroke('black')
    background (220);
    strokeWeight (1);
//head
    fill (255,230,80);
    circle (headX,headY,500);
    headX+=headDirection;
    if(headX >= 350 || headX <= 250)
    {
        headDirection *= -1;
    }
    //left eye
    fill ('white')
    ellipse (lefteye,lefteye,80,40);
    lefteye+=lefteyeDirection;
    if(lefteye >= 490 || lefteye <= 40)
    {
        lefteyeDirection *= -1
    }

    ellipse (350,150,80,40);
    fill (100,149,237);
    circle (150,150,40);
    circle (350,150,40);
    //nose
    fill (255,230,80);
    triangle (200,315,250,150,300,315);
    //mouth
    fill (250,128,114)
    ellipse (mouthX,370,200,35);
    mouthX+=mouthDirection;
    if(mouthX >= 505 || mouthX <= 90)
    {
        mouthDirection *= -1;
    }
    line (250,370,150,370);
    line (250,370,350,370);
    strokeWeight (20);
    point (150,150);
    point (350,150);
    strokeWeight (1);
    fill (255,230,80);
    ellipse (0,200,50,125);
    ellipse (500,200,50,125);
    //eyebrowA
    fill (186,74,0)
    rect(105,eyebrowY,80,13);
    eyebrowY+=eyebrowDirection;
    if(eyebrowY <= 5 || eyebrowY >= 490)
    {
        eyebrowDirection *= -1;
    }
    //eyebrowB
    rect(315,eyebrowBY,80,13);
    eyebrowBY+=eyebrowBDirection;
    if(eyebrowBY <= 5 || eyebrowBY >= 490)
    {
        eyebrowBDirection *= -1;
    }
    ellipse (250,40,500,80);
    ellipse (30,90,100,130);
    ellipse (470,90,100,130);
    textSize(size);
    size+=sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *= -1;
        count = 0;
    }
    fill ('black');
    text ('Nathan Kornick',420,495);
    stroke(231,76,60);
    strokeWeight (10);
    point (260,140);
    point (340,250);
    point (140,340);
    point (330,400);
    point (95,120);
    point (415,120);

}