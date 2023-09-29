var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// canvas.width = 800;
// canvas.height = 500;

var c = canvas.getContext("2d");

// c.fillStyle = "rgb(255, 141, 129)";
// c.fillRect(100, 100, 100, 100);
// c.fillRect(300, 100, 100, 100);
// c.fillStyle = "rgb(129, 137, 255)";
// c.fillRect(100, 300, 100, 100);
// c.fillRect(300, 300, 100, 100);

// // Line
// c.beginPath();
// c.moveTo(100, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle = "rgb(117, 230, 124)";
// c.stroke();

// // Arc / Circle
// c.beginPath();
// c.arc(600, 250, 100, 0, Math.PI * 2, false);
// c.strokeStyle = "blue";
// c.stroke();

// for (var i = 0; i < 5; i++) {
//   var x = Math.random() * window.innerWidth;
//   var y = Math.random() * window.innerHeight;
//   c.beginPath();
//   c.arc(x, y, 30, 0, Math.PI * 2, false);
//   c.strokeStyle = "red";
//   c.stroke();
// }

var x = Math.random() * innerWidth;
var y = Math.random() * innerHeight;
var dx = (Math.random() - 0.5) * 30;
var dy = (Math.random() - 0.5) * 30;
var radius = 30;

function animate() {
  requestAnimationFrame(animate);

  c.clearRect(0, 0, innerWidth, innerHeight);

  c.beginPath();
  c.arc(x, y, radius, 0, Math.PI * 2, false);
  c.strokeStyle = "blue";
  c.stroke();

  if (x + radius > innerWidth || x - radius < 0) {
    dx = -dx;
  }
  if (y + radius > innerHeight || y - radius < 0) {
    dy = -dy;
  }

  x += dx;
  y += dy;
}

animate();
