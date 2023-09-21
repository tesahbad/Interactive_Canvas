var paintcanvas = document.getElementById("canvas1");
var context = paintcanvas.getContext("2d");
var color = 'black';
var radius = 5; // Initial brush size
var isPainting = false;

function setWidth(value) {
    if (isNumeric(value)) {
        paintcanvas.width = Number(value);
    }
}

function setHeight(value) {
    if (isNumeric(value)) {
        paintcanvas.height = Number(value);
    }
}

function clearCanvas() {
    context.clearRect(0, 0, paintcanvas.width, paintcanvas.height);
}

function paintCircle(x, y) {
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI);
    context.fillStyle = color;
    context.fill();
    context.closePath();
}

function isNumeric(value) {
    return !isNaN(value) && isFinite(value);
}

paintcanvas.addEventListener("mousedown", startPaint);
paintcanvas.addEventListener("mousemove", doPaint);
paintcanvas.addEventListener("mouseup", endPaint);

function startPaint() {
    isPainting = true;
}

function endPaint() {
    isPainting = false;
    context.beginPath(); // Close the path after painting
}

function doPaint(event) {
    if (isPainting) {
        var x = event.offsetX;
        var y = event.offsetY;
        paintCircle(x, y);
    }
}

window.onload = function () {
    // Initialize canvas and context
    paintcanvas = document.getElementById('canvas1');
    context = paintcanvas.getContext('2d');
};

function changeColor(newColor) {
    color = newColor;
}

function resizeBrush(newSize) {
    radius = newSize;
    document.getElementById("sizeOutput").value = newSize;
}
