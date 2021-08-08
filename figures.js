//Square Code
//Square: Perimeter: L+L+L+L, Area: L^2
console.group("Square");

// const squareSide = 5;
// console.log("The sides of the square measure: " +side+ "cm");

function squarePerimeter(side) {
    return side * 4;
} 
// console.log("The perimeter of the square is: " +squarePerimeter+ "cm");

function squareArea(side) {
    return side * side;
}
// console.log("The area of the square is: " +squareArea+ "cm^2");

console.groupEnd();

//Triangule Code
// Triangule: Perimeter: L+L+L, Area: (B*H)/2
console.group("Triangule");

// const trianguleSide1 = 5;
// const trianguleSide2 = 5;
// const trianguleBase = 5;
// const trianguleHeight = 5.5;
// console.log("The first side of the triangule measure: " +trianguleSide1+ "cm");
// console.log("The second side of the triangule measure: " +trianguleSide2+ "cm");
// console.log("The base of the triangule measure: " +trianguleBase+ "cm");
// console.log("The height of the triangule measure: " +trianguleHeight+ "cm");

function triangulePerimeter(side1, side2, base) {
    return (side1) + (side2) + (base);
}
// console.log("The perimeter of the triangule is: " +triangulePerimeter+ "cm");

function trianguleArea(base, height){
    return (base * height)/2;
}
// console.log("The area of the triangule is: " +trianguleArea+ "cm^2");

console.groupEnd();

//Circle
//Circle: Perimeter: Pi * D, Area: Pi * r^2
console.group("Circle");

// const ratio = 2.5;
// const diameter = ratio * 2 ;
const pi = Math.PI;
// console.log("The diameter of the circle measure: " +diameter+ "cm");
// console.log("The ratio of the circle measure: " +ratio+ "cm");

function circleDiameter(ratio) {
    return ratio * 2;
}

function circlePerimeter(ratio) {
    const diameter = circleDiameter(ratio);
    return diameter * pi;
}
// console.log("The perimeter of the circle is: " +circlePerimeter+ "cm");

function circleArea(ratio) {
    return pi * (ratio*ratio);
}  
// console.log("The area of the circle is: " +circleArea+ "cm^2");

console.groupEnd();

//Here we interactuate with HTML
//Square
function calculateSquarePerimeter() {
    const inputSquare = document.getElementById("inputSquare");
    const value = inputSquare.value;
    const perimeterSquare = squarePerimeter(value);
    alert(perimeterSquare);
}

function calculateSquareArea() {
    const inputSquare = document.getElementById("inputSquare");
    const value = inputSquare.value;
    const areaSquare = squareArea(value);
    alert(areaSquare);
}

//Triangule
function calculateTriangulePerimeter() {
    const inputSide1 = document.getElementById("inputSide1");
    const inputSide2 = document.getElementById("inputSide2");
    const inputBase = document.getElementById("inputBase");
    const valueSide1 = parseFloat(inputSide1.value);
    const valueSide2 = parseFloat(inputSide2.value);
    const valueBase = parseFloat(inputBase.value);
    const perimeterTriangule = triangulePerimeter(valueSide1, valueSide2, valueBase);
    alert(perimeterTriangule);
}

function calculateTrianguleArea() {
    const inputB = document.getElementById("inputBase");
    const inputH = document.getElementById("inputHeight");
    const valueB = inputB.value;
    const valueH = inputH.value;
    const areaTriangule = trianguleArea(valueB, valueH);
    alert(areaTriangule);
}

//Circle
function calculateCirclePerimeter() {
    const inputRatio = document.getElementById("inputCircle");
    const valueRatio = inputRatio.value;
    const perimeterCircle= circlePerimeter(valueRatio);
    alert(perimeterCircle);
}

function calculateCircleArea() {
    const inputR = document.getElementById("inputCircle");
    const valueR = inputR.value;
    const areaCircle = circleArea(valueR);
    alert(areaCircle);
}

//Challenge Isosceles Triangule

function isoscelesHeight(a, b) {
    var heightIsosceles = Math.sqrt((a*a) - ((b*b)/4));
    return heightIsosceles;
}

function calculateTrianguleIsoscelesHeight() {
    const inputIso1 = document.getElementById("inputIsosceles1");
    const inputIso2 = document.getElementById("inputIsosceles2");
    const inputIsoBase = document.getElementById("inputIsoscelesBase");
    const valueIso1 = inputIso1.value;
    const valueIso2 = inputIso2.value;
    const valueBase = inputIsoBase.value;

    if(valueIso1 == valueIso2 && valueBase != valueIso1){
        const heightIsosceles = isoscelesHeight(valueIso1, valueBase);
        alert(heightIsosceles);
    }else{
        alert("That is not an Isosceles Triangule! TRY AGAIN");
    }

}
