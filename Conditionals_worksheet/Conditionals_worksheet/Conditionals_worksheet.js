// Created by Oga Okwoche on 2/17/14.
//Conditionals Worksheet



//GROUP 1: EXPRESSIONS WITH CONDITIONALS


//Last Chance for Gas
// To calculate the number of miles a a car can drive with a specific amount of fuel, the
//formula to find out the number of miles the fuel can cover is gauge reading of gas in %/100 *tank capacity in gallons*Miles per gallon

var gasEfficiency= prompt("Please enter the gas efficiency of your car in miles per gallon")//value is in miles per gallon

var gaugeReading=prompt("Please enter the gauge reading of the gas tank in percentage")//input in % value

var gasTankCapacity=prompt("Please enter your gas tank capacity in gallons")//value is in gallons

var actualGasInTank= gaugeReading/100* gasTankCapacity//the amount of gas in tank is gauge reading in%/100*gas tank capacity

var miles= actualGasInTank* gasEfficiency//the miles the car can cover is amount of gas in the car* the gas efficiency

var statement1="Yes, you can make it without stopping for gas!"

var statement2= "You only have "+ actualGasInTank+ " gallons of gas in your tank, better get gas now while you can!"


if (miles>=200){console.log(statement1)//it is safe to keep driving if the the amount of gas is sufficient for 200 miles or more
}else{console.log(statement2)}




//GROUP 2 : MULTIPLE RESULTS

//Grade Letter Calculator for Full Sail University.
// Here are the grades and letters
// A+ is 95-100
// A is 90-94
// B+ is 85-89
// B is 80-84
// C+ is 76-79
// C is 73-75
// D is 70-72
// F is 0-69

var numberGrade = prompt("We will be determining the letter grade of your number grade \nPlease enter the number grade in Percentage")

if(numberGrade<=100 && numberGrade>=95) // A+ is 95-100
{console.log("You have a " +numberGrade +" which means you have earned a(n) A+ in the class!")}

else if (numberGrade<=94 && numberGrade>=90)// A is between 90-94//this was initially the if condition
{console.log("You have a " +numberGrade +" which means you have earned a(n) A in the class!")}

else if (numberGrade<=89 && numberGrade>= 85)// B+ is between 85-89..
{ console.log("You have a " +numberGrade +" which means you have earned a(n) B+ in the class!")}

else if (numberGrade<=84 && numberGrade>=80)// B is between 80-84
{console.log("You have a " +numberGrade +" which means you have earned a(n) B in the class!")}

if (numberGrade<=79 && numberGrade>=76)// C+ is between 76-79
{console.log("You have a " +numberGrade +" which means you have earned a(n) C+ in the class!")}

if (numberGrade<75 && numberGrade>=73)// C is between 73-75
{console.log("You have a " +numberGrade +" which means you have earned a(n) C in the class!")}

if (numberGrade<70 && numberGrade>=72)// D is between 70-72
{console.log("You have a " +numberGrade +" which means you have earned a(n) D in the class!")}

if (numberGrade<69 && numberGrade>=0)//F is between 0-69
{console.log("You have a " +numberGrade +" which means you have earned a(n) F in the class!")}





//GROUP 3: MULTIPLE CONDITIONS

//Movie Ticket Price.

var timeOfMovie=prompt ("Please enter what time you will be watching the movie")

var age=prompt("Please enter your age")

var regularPrice= 12

var discountedPrice= 7

var statement3= "The ticket price is $"+ regularPrice

var statement4= "The ticket price is $"+ discountedPrice

if (age<=10 && age>=55)
{console.log(statement1)}
else if(timeOfMovie>=3 && timeOfMovie<=5)
{console.log(statement4)}
else{ console.log(statement3)}


