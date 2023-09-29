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

// ----------------------------------------------------------------------------------------------------------
// ------------------------------------ Create javaScript Object --------------------------------------------
// ----------------------------------------------------------------------------------------------------------
function Circle(x, y, radius, dx, dy) {
  this.radius = radius;
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;

  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = "blue";
    c.stroke();
  };

  this.update = function () {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  };
}
// ---------------------------------------------- Create 100 Circles ----------------------------------------------------------

var circleArray = [];
for (var i = 0; i < 100; i++) {
  var radius = 30;
  var x = Math.random() * (innerWidth - 2 * radius) + radius;
  var y = Math.random() * (innerHeight - 2 * radius) + radius;
  // For dx and dy: By -0.5 we can have both positive and negative velocity & 3 is a factor to amplify the speed.
  var dx = (Math.random() - 0.5) * 3;
  var dy = (Math.random() - 0.5) * 3;

  circleArray.push(new Circle(x, y, radius, dx, dy));
}

// ------------------------------------ Animate all the circles we create previously -----------------------------------------

function animate() {
  requestAnimationFrame(animate);

  c.clearRect(0, 0, innerWidth, innerHeight);
  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}

animate();
// --------------------------------------------------------------------------------------------------------------------------
