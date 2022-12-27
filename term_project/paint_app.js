const canvas = document.querySelector("#canvas");
const eraser = document.querySelector("#eraser");
const pen = document.querySelector("#pen");
const clear = document.querySelector("#clear");
const color_picker = document.querySelector("#color-picker");
const size_picker = document.querySelector("#size-picker");


const context = canvas.getContext("2d");

// canvas elementinin görüntülenen ve çalışma alanı boyutlarını eşitle
canvas.style.width = "100%";
canvas.style.height = "100%";
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

let radius = 5;
let color = "black";
let offsetX;
let offsetY;
let eraserMode = false;


context.fillStyle = "white";
context.fillRect(0, 0, canvas.width, canvas.height);

canvas.addEventListener("mousemove", (e) => {
    var rect = e.target.getBoundingClientRect();
      var x = e.clientX - rect.left; //x position within the element.
      var y = e.clientY - rect.top;  //y position within the element.
      
  if (e.buttons == 1) {
    draw(x, y);
    
  }
});

canvas.addEventListener("touchmove", (e) => {
    e.preventDefault();
    var rect = e.target.getBoundingClientRect();
    var x = e.touches[0].clientX - rect.left;
    var y = e.touches[0].clientY - rect.top;
  
    if (e.touches.length > 0) {
      draw(x, y);
    }
  });

canvas.addEventListener("mousedown", (e) => {
      var rect = e.target.getBoundingClientRect();
      var x = e.clientX - rect.left; //x position within the element.
      var y = e.clientY - rect.top;  //y position within the element.
      
    draw(x, y);
});

function draw(x, y) {
  context.beginPath();
  context.arc(x , y , radius, 0, 2 * Math.PI);
  context.fillStyle = color;
  context.fill();
}

eraser.addEventListener("click", () => {
  eraser.style.border = "2px solid tomato"
  pen.style.border = "1px solid black"
  clear.style.border = "1px solid black"


  eraserMode = !eraserMode;
  if (eraserMode) {
    color = "white";
    
  }
});

pen.addEventListener("click", () => {

    eraser.style.border = "1px solid black"
    pen.style.border = "2px solid tomato"
    clear.style.border = "1px solid black"

    console.log(color);
    if (color == "white") {
        color = "black";
    }

    eraserMode = false;
    
    
  });

clear.addEventListener("click", () => {
    eraser.style.border = "1px solid black"
    pen.style.border = "1px solid black"
    clear.style.border = "2px solid tomato"

    context.fillStyle = "white";
    context.fillRect(0,0,canvas.width, canvas.height);

});

color_picker.addEventListener("input", (e) => color = e.target.value)

size_picker.addEventListener("input", (e) => radius = e.target.value)