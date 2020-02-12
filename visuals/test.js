var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

function getRandomColour(){
  var red = Math.floor(Math.random()* 255);
  var green = Math.floor(Math.random() * 255);
  var blue = Math.floor(Math.random() * 255);

  return "rgb("+red+","+green+"," +blue+" )";  
}

	var mouse = {
		x: undefined,
		y: undefined
	}
	
	var maxRadius = 70;
	//var minRadius = 10;
	var colorArray= [
		'#4a8C7a','#49bf94','#49a684','#d9704a','#d9704a',
	];

	window.addEventListener('mousemove', 
		function(event){
			mouse.x = event.x,
			mouse.y = event.y
	});

	window.addEventListener('resize', function(){
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		init();
	});

	// function rCirlce(x,y,dx,dy,radius){
	// 	this.x = x;
	// 	this.y = y;
	// 	this.dx = dx;
	// 	this.dy = dy;
	// 	this.radius = radius;
	// 	this.color = getRandomColour();
	// }

	function Circle(x, y, dx, dy, radius, isOuter, rotationDir){
		this.x = x;
		this.y = y;
		this.dx = dx;
		this.dy = dy;
		this.radius = radius;
		this.minRadius = radius;
		this.radians = 0;
		this.velocity =	0.09;
		this.isOuter = isOuter;
		this.rotationDir = rotationDir;
		var circles = [];
		//this.color = getRandomColour();
		//this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
		this.color = 'red';

		//this function will serve to initialize the rCircles initially for each circle
		this.initialize = function(){
			//clear circle array to avoid having memory issues
				circles = [];
				var radianHolder = Math.PI * (2/3); //2PI/3 
				var angle = 0.0;
				
				for(var i = 0; i < 3; i++){
					angle += radianHolder;
					//circles.push(new Circle(this.x + Math.cos(angle), this.y + Math.sin(angle), this.dx, this.dy, this.radius, true));
					//This one works for the three around it but not rotating
					circles.push(new Circle(this.x + Math.cos(angle) * 30, this.y + Math.sin(angle )* 30, this.dx, this.dy, this.radius, true));
					//circles.push(new Circle(this.x + Math.cos(angle), this.y + Math.sin(angle), this.dx, this.dy, this.radius, true));
					circles[i].color = 'black';
					console.log(angle);
					
				}
				//console.log(circles.length);
			//}	
		//	else{
		//		while
		//	}
		}

		this.draw = function(){
			c.beginPath();	
			c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
			
			var my_gradient= c.createLinearGradient(0, 0, 1500, 0);
			my_gradient.addColorStop(0, "black");
			my_gradient.addColorStop(0.5, "red");
			my_gradient.addColorStop(1, "white");
			//c.fillStyle = my_gradient;
			c.fillStyle = this.color;
			c.stroke();
			c.fill();
			this.radians += this.velocity;
			var radianHolder = Math.PI * (2/3); //2PI/3 
			var angle = 0.0;
			for(var i = 0; i < circles.length; i++){
				var rng = Math.random();
				angle += radianHolder;
				c.beginPath();	
				//c.arc(circles[i].x + Math.cos(this.radians) * 30 ,circles[i].y + Math.sin(this.radians) * 30 , circles[i].radius, 0, Math.PI * 2, false);
				
				//sharingan one
				//c.arc(circles[i].x +  Math.cos(this.radians + angle) * 30, circles[i].y + Math.sin(this.radians + angle) * 30, circles[i].radius, 0, Math.PI * 2, false);
				//normal spinning one
				if(this.rotationDir){
					//c.arc(this.x +  Math.cos(this.radians + angle) * 30, this.y + Math.sin(this.radians + angle) * 30, circles[i].radius, 0, Math.PI * 2, false);
					c.arc(circles[i].x +  Math.cos(this.radians + angle) * 30, circles[i].y + Math.sin(this.radians + angle) * 30, circles[i].radius, 0, Math.PI * 2, false);
				}
				else {
					//c.arc(this.x +  Math.cos(-(this.radians + angle)) * 30, this.y + Math.sin(-(this.radians + angle)) * 30, circles[i].radius, 0, Math.PI * 2, false);
					c.arc(circles[i].x + Math.cos(-(this.radians - angle)) * 30, circles[i].y + Math.sin(-(this.radians - angle)) * 30, circles[i].radius, 0, Math.PI * 2, false);
				}	
				//c.arc(this.x +  Math.cos(-(this.radians + angle)) * 30, this.y + Math.sin(-(this.radians + angle)) * 30, circles[i].radius, 0, Math.PI * 2, false);

			//c.fillStyle = my_gradient;
				c.fillStyle = circles[i].color;
				c.stroke();
				c.fill();
			}


		}

		this.update = function(){

			if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
				this.dx = -this.dx;
			}
			if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
				this.dy = -this.dy;
			}
		
			this.x += this.dx;
			this.y += this.dy;

			//maybe i need to draw the rCircles here?? and update also in main circle?
			
			//interactivity
			// if(mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50 && this.isOuter == false){
			// 	if(this.radius < maxRadius){ 
			// 		//this.radius += 1;
			// 		this.circles[0].radius += 1;
			// 	}
			// }
			// else if(this.radius > this.minRadius){
			// 	//this.radius -= 1;
			// }
			this.initialize();
			
			if(mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50 && this.isOuter == false){
				if(this.radius < maxRadius){ 
					this.radius += 1;
					//circles[0].radius += 10;
					
				}
			}
			else if(this.radius > this.minRadius){
				this.radius -= 1;
			}

			this.draw();

		}
	}
	var circleArray = [];
	
	function init(){

		circleArray = []
	
		for(var i = 0; i < 25; i++){
		var radius = Math.random() * 10 + 1;
		var x = Math.random() * (innerWidth -  radius * 2) + radius;
		var y = Math.random() * (innerHeight - radius * 2) + radius;
		var dx = (Math.random() - 0.5) * 5;
		var dy = (Math.random() - 0.5) * 5;
		var rng = Math.random();
		if(rng >= .50){
		circleArray.push(new Circle(x, y, dy, dx, radius, false, true));}
		else{
			circleArray.push(new Circle(x, y, dy, dx, radius, false, false));
		}
		
		}
	}

	function animate(){
		requestAnimationFrame(animate);
		c.clearRect(0, 0, innerWidth, innerHeight);
		for(var i = 0; i < circleArray.length; i++){
			//circleArray[i].initi();
			circleArray[i].update();

		}	

	}
	init();
	animate();

