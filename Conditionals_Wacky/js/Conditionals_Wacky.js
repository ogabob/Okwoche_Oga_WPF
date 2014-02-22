/**
 * Created by Oga Okwoche on 2/22/14.
 */
//This is a wacky math to prove a triangle is a right angled triangle if the sum of the squares of the sides equal the square of the hypotenuse which is the longest side.This is the Pythagoras theory. We will also find out if the triangle is an Isosceles or Scalene Triangle.



var hypotenuse=prompt("Please enter the length of the longest side.It is called the Hypotenuse");

var xLength=prompt("Please enter the length in CM of one side");

var yLength= prompt("Please enter the length of the other side in CM");

var z= xLength*yLength

var squareHypotenuse= hypotenuse*hypotenuse

if (z===squareHypotenuse){
    console.log("This is a right angled triangle")
}else if (z===squareHypotenuse && xLength===yLength){
    console.log("This is a right angle and Isosceles triangle")
}else(console.log("This is a scalene triangle"))

