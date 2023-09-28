var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

c.fillStyle = "rgb(255, 141, 129)";
c.fillRect(100, 100, 100, 100);
c.fillRect(300, 100, 100, 100);
c.fillStyle = "rgb(129, 137, 255)";
c.fillRect(100, 300, 100, 100);
c.fillRect(300, 300, 100, 100);

// Line
c.beginPath();
c.moveTo(100, 300);
c.lineTo(300, 100);
c.lineTo(400, 300);
c.strokeStyle = "rgb(117, 230, 124)";
c.stroke();
