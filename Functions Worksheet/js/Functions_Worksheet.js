/**
 * Created by Oga Okwoche on 2/26/14.
 */







//Function to calculate the circumference of a circle.

var result= calcCircumference (10);

function calcCircumference(radius){
    var circumference=2*3.14*radius;
    return circumference;

}
console.log( "The circumference of the circle is  "+ result)







//Function to calculate how many bee stings.

var totalBeeStings= beeStings(100);

function beeStings(weight){
    var CalcBeeStings=8.6*weight;
    return CalcBeeStings;
}

console.log("It takes "+ totalBeeStings+ "  bee stings to kill this animal");