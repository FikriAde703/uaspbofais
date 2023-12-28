document.getElementById("rectangle").style.display = "block";
document.getElementById("square").style.display = "none";
document.getElementById("circle").style.display = "none";

function showRectangle() {
    document.getElementById("rectangle").style.display = "block";
    document.getElementById("square").style.display = "none";
    document.getElementById("circle").style.display = "none";
}

function showSquare() {
    document.getElementById("rectangle").style.display = "none";
    document.getElementById("square").style.display = "block";
    document.getElementById("circle").style.display = "none";
}

function showCircle() {
    document.getElementById("rectangle").style.display = "none";
    document.getElementById("square").style.display = "none";
    document.getElementById("circle").style.display = "block";
}

function calculateRectangle() {
    var length = parseFloat(document.getElementById("lengthRectangle").value);
    var width = parseFloat(document.getElementById("widthRectangle").value);

    var area = (length * width).toFixed(2);
    var perimeter = (2 * (length + width)).toFixed(2);

    document.getElementById("rectangleArea").innerHTML = "Luas: " + area;
    document.getElementById("rectanglePerimeter").innerHTML = "Keliling: " + perimeter;
}

function calculateSquare() {
    var side = parseFloat(document.getElementById("sideSquare").value);

    var area = (side * side).toFixed(2);
    var perimeter = (4 * side).toFixed(2);

    document.getElementById("squareArea").innerHTML = "Luas: " + area;
    document.getElementById("squarePerimeter").innerHTML = "Keliling: " + perimeter;
}

function calculateCircle() {
    var radius = parseFloat(document.getElementById("radiusCircle").value);

    var area = (Math.PI * radius * radius).toFixed(2);
    var circumference = (2 * Math.PI * radius).toFixed(2);

    document.getElementById("circleArea").innerHTML = "Luas: " + area;
    document.getElementById("circlePerimeter").innerHTML = "Keliling: " + circumference;
}

function reset() {
    document.getElementById("lengthRectangle").value = "";
    document.getElementById("widthRectangle").value = "";
    document.getElementById("rectangleArea").innerHTML = "";
    document.getElementById("rectanglePerimeter").innerHTML = "";

    document.getElementById("sideSquare").value = "";
    document.getElementById("squareArea").innerHTML = "";
    document.getElementById("squarePerimeter").innerHTML = "";

    document.getElementById("radiusCircle").value = "";
    document.getElementById("circleArea").innerHTML = "";
    document.getElementById("circlePerimeter").innerHTML = "";
}
