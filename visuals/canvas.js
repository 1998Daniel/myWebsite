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
		canvas.height = width.innerHeight;
		init();
	});

	function Circle(x, y, dx, dy, radius){
		this.x = x;
		this.y = y;
		this.dx = dx;
		this.dy = dy;
		this.radius = radius;
		this.minRadius = radius;
		//this.color = getRandomColour();
		this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
		this.draw = function(){
			c.beginPath();	
			c.arc(this.x,this.y, this.radius, 0, Math.PI * 2, false);
			
			var my_gradient= c.createLinearGradient(0, 0, 1500, 0);
			my_gradient.addColorStop(0, "black");
			my_gradient.addColorStop(0.5, "red");
			my_gradient.addColorStop(1, "white");
			//c.fillStyle = my_gradient;
			c.fillStyle = this.color;
			c.stroke();
			c.fill();
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

			//interactivity
			if(mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50){
				if(this.radius < maxRadius){ 
					this.radius += 1;
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
	
		for(var i = 0; i < 800; i++){
		var radius = Math.random() * 10 + 1;
		var x = Math.random() * (innerWidth -  radius * 2) + radius;
		var y = Math.random() * (innerHeight - radius * 2) + radius;
		var dx = (Math.random() - 0.5) * 5;
		var dy = (Math.random() - 0.5) * 5;
		
		circleArray.push(new Circle(x, y, dy, dx, radius));
		}
	}

	function animate(){
		requestAnimationFrame(animate);
		c.clearRect(0, 0, innerWidth, innerHeight);
		for(var i = 0; i < circleArray.length; i++){
			circleArray[i].update();
		}	
	}
	init();
	animate();

