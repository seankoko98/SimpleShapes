// Global Variables 
	var ellipseXPos = 0;
	var ellipseYPos = 300;
	var ellipseDist = 50;

// Setup code goes here
	function setup() {
  	createCanvas(900, 700);
  	print("Starting up Simple Shapes");
  	rectMode(CENTER);
  	ellipseMode(CENTER);

  	print("Width = " + width);
  	print("Height = " + height);

// set ellipse X pos
  	ellipseXPos = width - 250;
 }

// Draw code goes here
	function draw() {
 	background(157,243,188);
 	
`	drawEllipses();
	drawRects();`
	drawCircles();
}

function drawCircles(){

// circle
 	fill(220,157,243);
 	strokeWeight(0);
 	circle(500, 500, 190);

 	fill(143,136,233);
 	strokeWeight(0);
 	circle(143, 600, 190);

 	fill(233,136,227);
 	strokeWeight(0);
 	circle(90, 90, 90);

 	fill(136,204,233);
 	strokeWeight(0);
 	circle(790, 190, 90);

 	fill(233,136,175);
 	strokeWeight(0);
 	circle(790, 390, 90);

 	fill(93,83,230);
 	strokeWeight(0);
 	circle(290, 190, 120);

 	fill(93,83,230);
 	strokeWeight(0);
 	circle(700, 230, 120);

 	fill(136,204,233);
 	strokeWeight(0);
 	circle(230, 500, 90);

 	fill(136,204,233);
 	strokeWeight(0);
 	circle(400, 600, 50);

 	fill(143,136,233);
 	strokeWeight(0);
 	circle(330, 150, 80);

}

`function drawEllipses() {

// ellipse
 	fill(0,255,0);
  	ellipse(ellipseXPos, ellipseYPos,100,150);

  	fill(0,255,0);
  	ellipse(ellipseXPos, ellipseYPos + ellipseDist,100,150);
}

function drawRects(){

// center rect
  	fill(255,0,0);
  	stroke(244);
  	strokeWeight(3);
  	rect(width/2,height/2,200,100);

// small rect
  	fill(126,50,40);
  	stroke(24);
  	strokeWeight(5);
  	rect(100,height/2,20,300);

}`
