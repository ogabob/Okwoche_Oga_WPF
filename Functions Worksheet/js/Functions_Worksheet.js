/**
 * Created by Oga Okwoche on 2/26/14.
 */







//Function to calculate the circumference of a circle.

var result= calcCircumference (10);//this is the function argument with the radius of 10

function calcCircumference(radius){// this tis the radius parameter that stores tha value of 10
    var circumference=2*3.14*radius;//calculation to calculate the circumference.3.14 is the value of Pi
    return circumference;//the return function pushes the result outside the function to the var result.

}
console.log( "The circumference of the circle is  "+ result)//this is the print result for the circumference







//Function to calculate how many bee stings.

var totalBeeStings= beeStings(100);//this is the argument that gives the weight of the animal in pounds

function beeStings(weight){// this is the parameter that that stores the weight of the animal
    var CalcBeeStings=8.6*weight;
    return CalcBeeStings;
}

console.log("It takes "+ totalBeeStings+ " bee stings to kill this animal");