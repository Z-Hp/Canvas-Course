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
