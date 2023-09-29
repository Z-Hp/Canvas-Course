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
// ------------------------------------  Create Interactive feature --------------------------------------------
// ----------------------------------------------------------------------------------------------------------
var mouse = {
  x: undefined,
  y: undefined,
};
// var minRadius = 2;
var maxRadius = 40;

var neighborhoodRange = 50;

var colorArray = ["#F20F79", "#04BFBF", "#F2B90C", "#8C4E03", "#F25C05"];

window.addEventListener("mousemove", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
});

// Making the canvas responsive to the browser
window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  init();
});

// ----------------------------------------------------------------------------------------------------------
// ------------------------------------ Create javaScript Object --------------------------------------------
// ----------------------------------------------------------------------------------------------------------
function Circle(x, y, radius, dx, dy) {
  this.radius = radius;
  this.minRadius = radius;
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
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

    // interactivity
    if (
      // Note: (mouse.x - this.x) is distance between the mouse pointer and the x coordinate of each circle
      mouse.x - this.x < neighborhoodRange &&
      mouse.x - this.x > -neighborhoodRange &&
      mouse.y - this.y < neighborhoodRange &&
      mouse.y - this.y > -neighborhoodRange
    ) {
      if (this.radius < maxRadius) {
        this.radius += 1;
      }
    } else if (this.radius > this.minRadius) {
      this.radius -= 1;
    }

    this.draw();
  };
}
// ---------------------------------------------- Create 100 Circles ----------------------------------------------------------
var circleArray = [];

function init() {
  circleArray = [];
  for (var i = 0; i < 1000; i++) {
    var radius = Math.random() * 3 + 1;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    // For dx and dy: By -0.5 we can have both positive and negative velocity & 10 is a factor to amplify the speed.
    var dx = (Math.random() - 0.5) * 1;
    var dy = (Math.random() - 0.5) * 1;

    circleArray.push(new Circle(x, y, radius, dx, dy));
  }
}
// ------------------------------------ Animate all the circles we create previously -----------------------------------------

function animate() {
  requestAnimationFrame(animate);

  c.clearRect(0, 0, innerWidth, innerHeight);
  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}

init();
animate();
// --------------------------------------------------------------------------------------------------------------------------
