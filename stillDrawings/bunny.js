//drawing bunny 17
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log(canvas.width);
console.log(canvas.height);
var c = canvas.getContext('2d');


c.beginPath();
c.moveTo(300,250);
c.lineTo(330,220);
c.moveTo(300,250);
c.lineTo(380, 290);
c.lineTo(400, 260);
c.lineTo(330, 220);
c.strokeStyle = "#dfcfcf";
c.stroke();
c.fillStyle = "#dfcfcf";
c.fill();
c.closePath();

c.beginPath();
c.moveTo(330,220);
c.lineTo(330, 205);
c.moveTo(400,260);
c.lineTo(330,220);
c.moveTo(400,260);
c.quadraticCurveTo(350, 195,330,205);
c.strokeStyle = "#dfcfcf";
c.stroke();
c.fillStyle = "#dfcfcf";
c.fill();
c.closePath();

c.beginPath();
c.moveTo(400,260);
c.lineTo(330,220);
c.lineTo(330,205);
c.lineTo(400,260);
c.strokeStyle = "#dfcfcf";
c.stroke();
c.fillStyle = "#dfcfcf";
c.fill();
c.closePath();

c.beginPath();
c.moveTo(330,205);
c.lineTo(330, 185);
c.lineTo(410,195);
c.lineTo(415,240);
c.lineTo(400,260);
c.quadraticCurveTo(350, 195,330,205);
c.strokeStyle = "#dfcfcf";
c.stroke();
c.fillStyle = "#cd1c1c";
c.fill();
c.closePath();

//vizer
c.beginPath();
c.moveTo(330,185);
c.lineTo(410,195);
c.lineTo(415,240);
c.lineTo(425,240);
c.lineTo(430,195);
c.lineTo(510,185);
c.lineTo(510, 175);
c.quadraticCurveTo(415,170,330,175);
c.lineTo(330,185);
c.strokeStyle = "red";
c.stroke();
c.fillStyle = "black";
c.fill();
c.closePath();

c.beginPath();
c.moveTo(330,175);
c.lineTo(330,165);
c.quadraticCurveTo(415,155,510,165);
c.lineTo(510,175);
c.strokeStyle = "red";
c.stroke();
c.fillStyle = "#cd1c1c";
c.fill();
c.closePath();

c.beginPath();
c.moveTo(380,290);
c.lineTo(415,240);
c.lineTo(425, 240);
c.lineTo(460,290);
c.lineTo(420, 250);
c.lineTo(380,290);
//c.lineWidth = 10;
c.strokeStyle = "black";
c.stroke();
c.fillStyle = "black";
c.fill();
c.closePath();

c.beginPath();
c.moveTo(380,290);
c.lineTo(405,310);
c.lineTo(405,265);
c.lineTo(380,290);
c.strokeStyle = "black";
c.stroke();
c.fillStyle = "#dfcfcf";
c.fill();
c.closePath();

c.beginPath();
c.moveTo(460,290);
c.lineTo(435,310);
c.lineTo(435,265);
c.lineTo(460,290);
c.strokeStyle = "black";
c.stroke();
c.fillStyle = "#dfcfcf";
c.fill();
c.closePath();

c.beginPath();
c.moveTo(435,310);
c.lineTo(405,310);
c.lineTo(405,265);
c.lineTo(420,250);
c.lineTo(435,265);
c.lineTo(435,310);
c.strokeStyle = "black";
c.stroke();
c.fillStyle = "#cd1c1c";
c.fill();
c.closePath();

c.beginPath();
c.moveTo(460,290);
c.lineTo(540,250);
c.lineTo(510,220);
c.strokeStyle = "black";
c.stroke();
c.fillStyle = "#dfcfcf";
c.fill();
c.closePath();

c.beginPath();
c.moveTo(510,220);
c.lineTo(510,205);
c.moveTo(510,220);
c.lineTo(460,290);
c.lineTo(440,260);
c.quadraticCurveTo(490,195,510,205);
c.strokeStyle = "#dfcfcf";
c.stroke();
c.fillStyle = "#dfcfcf";
c.fill();
c.closePath();

c.beginPath();
c.moveTo(510,205);
c.lineTo(510,185);
c.lineTo(430,195);
c.lineTo(425,240);
c.lineTo(440,260);
c.quadraticCurveTo(490,195,510,205);
c.moveTo(510,185);
c.strokeStyle = "black";
c.stroke();
c.fillStyle = "#cd1c1c";
c.fill();
c.closePath();

c.beginPath();
c.moveTo(330,165);
c.quadraticCurveTo(415,155,510,165);
c.moveTo(420,165);
c.arc(420,165,90,0,Math.PI, true);
c.strokeStyle = "orange";
c.stroke();
c.fillStyle = "#dfcfcf";
c.fill();
c.closePath();

c.beginPath();
c.moveTo(330,175);
c.lineTo(330,165);
c.quadraticCurveTo(415,155,510,165);
c.lineTo(510,175);
c.strokeStyle = "red";
c.stroke();
c.fillStyle = "#cd1c1c";
c.fill();
c.closePath();

c.beginPath();
c.moveTo(420,160);
c.quadraticCurveTo(420,80,410,75);
c.lineTo(400,75);
c.lineTo(400,50);
c.lineTo(420,52);
c.moveTo(420,160);
c.quadraticCurveTo(425,80,420,52);
//c.lineTo(410,75);
c.strokeStyle = "black";
c.stroke();
c.fillStyle = "#cd1c1c";
c.fill();
c.closePath();

c.beginPath();
c.moveTo(420,160);
c.lineTo(430,160);
c.lineTo(430,57);
c.lineTo(420,52);
c.moveTo(420,160);
c.quadraticCurveTo(425,80,420,52);
c.strokeStyle = "black";
c.stroke();
c.fillStyle = "#cd1c1c";
c.fill();
c.closePath();

c.beginPath();
c.moveTo(330,220);
c.lineTo(315,235);
c.lineTo(313,160);
c.lineTo(330,160);
c.lineTo(330,220);
c.strokeStyle = "black";
c.stroke();
c.fillStyle = "#dfcfcf";
c.fill();
c.closePath();

c.beginPath();
c.moveTo(318,160);
c.lineTo(322,160);
c.lineTo(322,70);
c.lineTo(318,70);
c.lineTo(318,160);
c.strokeStyle = "black";
c.stroke();
c.fillStyle = "black";
c.fill();
c.closePath();

c.beginPath();
c.moveTo(310,70);
c.lineTo(330,70);
c.quadraticCurveTo(325,55,350,60);
c.lineTo(350,50);
c.lineTo(310,50);
c.lineTo(310,70);
c.strokeStyle = "black";
c.stroke();
c.fillStyle = "#dfcfcf";
c.fill();
c.closePath();

c.beginPath();
c.moveTo(315,240);
c.lineTo(330,225);
c.lineTo(333,228);
c.lineTo(320,242);
c.lineTo(315,240);
c.strokeStyle = "black";
c.stroke();
c.fillStyle = "black";
c.fill();
c.closePath();

c.beginPath();
c.moveTo(525,240);
c.lineTo(510,225);
c.lineTo(507,228);
c.lineTo(520,242);
c.lineTo(525,240);
c.strokeStyle = "black";
c.stroke();
c.fillStyle = "black";
c.fill();
c.closePath();

c.beginPath();
// c.beginPath();
// c.moveTo(410,195);
// c.lineTo();
// c.strokeStyle = "grey";
// c.stroke();