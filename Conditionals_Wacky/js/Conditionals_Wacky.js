/**
 * Created by Oga Okwoche on 2/22/14.
 */
//This is a wacky math to prove a triangle is a right angled triangle if the sum of the squares of the sides equal the square of the hypotenuse which is the longest side.This is the Pythagoras theory. We will also find out if the triangle is an Isosceles or Scalene Triangle.



var hypotenuse=prompt("Please enter the length of the longest side in CM.It is called the Hypotenuse");//The length is in Centimeter

var xLength=prompt("Please enter the length in CM of one side");//The length is in Centimeter

var yLength= prompt("Please enter the length of the other side in CM");//The length is in centimeter

var z= xLength*yLength; // The unit is in Centimeter Square

var squareHypotenuse= hypotenuse*hypotenuse;//The unit is in centimeter Square

if (z===squareHypotenuse){
    console.log("This is a right angled triangle");// This is the print result if only pythagoras theorem is true

}else if (z===squareHypotenuse && xLength===yLength){//This is true if the first condition is true and both sides are equal
    console.log("This is a right angle and Isosceles triangle");//This is the print result for the second condition above
}else(console.log("This is a scalene triangle"));// This is the print result if the first 2 conditions are false.

