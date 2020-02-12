var context, controller, circle, loop;

context = document.querySelector("canvas").getContext("2d");

context.canvas.height = 180;
context.canvas.width = 320;

//creating circle object to play with
circle = {
	width: 30,
	height: 30,
	x:0,
	dx: 0,
	y:0,
	dy:0,
	jumping:false,
	radius: 15
};
//controller for movement of the circle
controller = {
	right: false,
	left: false,
	up: false,

	keyListener:function(event){
		//keep track of the current key_state
		var key_state = (event.type == "keydown")?true:false;

		switch(event.keyCode){
			case 37: //left key
				controller.left = key_state;
			break;
			case 38: //up key
				controller.up = key_state;
			break;
			case 39: //right key
				controller.right = key_state;
			break;
		}
	}

};

//creating the looping function for drawing animation

loop = function(){
	//decrement the y val for jump
	if(controller.up && circle.jumping == false){
		circle.dy -= 20;
		circle.jumping = true;
	}
	//now going to check for left movement
	if(controller.left){
		circle.dx -= 0.5;
	}
	if(controller.right){
		circle.dx += 0.5;
	}

	//now going to account for gravity and also going to account for friction
	circle.dy += 1.5; //psuedo gravity
	circle.x += circle.dx;
	circle.y += circle.dy;
	//friction
	circle.dx *= 0.9;
	circle.dy *= 0.9;

	//now going to do some simple bounds checking
	//want the circle to loop around if goes to far on either side

	//check if falling off the screen
	if (circle.y > 180 - 3 - (circle.radius * 2)) {

    circle.jumping = false;
    circle.y = 180 - 3 - (circle.radius * 2);
    circle.dy = 0;

  }

	//left bounds
	if(circle.x < -1 * (circle.radius * 2)){
		circle.x = 320;
	}
	//right bounds
	if(circle.x > 320){
		circle.x = -1 * (circle.radius * 2);
	}	

	context.fillStyle = "#202020";
  	context.fillRect(0, 0, 320, 180);// x, y, width, height
  	context.fillStyle = "#ff0000";// hex for red
  	context.beginPath();
  	context.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2, false);
  	context.fill();
  	context.strokeStyle = "#202830";
  	context.lineWidth = 4;
  	context.beginPath();
  	context.moveTo(0, 164);
  	context.lineTo(320, 164);
  	context.stroke();

  	window.requestAnimationFrame(loop);
};


window.addEventListener("keydown", controller.keyListener)
window.addEventListener("keyup", controller.keyListener);
window.requestAnimationFrame(loop);