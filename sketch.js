var clicked = false;
var eyeColor;
function setup() { 
	createCanvas(400, 400);
    eyeColor = color("black");
} 

function draw() { 
    if (clicked) {
		background("darkblue");
        fill("yellow");
	    ellipse(width/2, height/2, 100);
	    fill(eyeColor);
	    var eyeOffset = 20;
	    ellipse(width/2 - eyeOffset, height/2 - eyeOffset, 20);
	    ellipse(width/2 + eyeOffset, height/2 - eyeOffset, 20);
        ellipse(width/2, 220, 30);
	} else {
		background("skyblue");
        fill("yellow");
	    ellipse(width/2, height/2, 100);
        fill(eyeColor);
	    var eyeOffset = 20;
	    ellipse(width/2 - eyeOffset, height/2 - eyeOffset, 20);
	    ellipse(width/2 + eyeOffset, height/2 - eyeOffset, 20);
        arc(width/2, 220, 40, 40, 0, PI+QUARTER_PI, OPEN);
	}
}

function mouseClicked() {
	clicked = !clicked;
}
