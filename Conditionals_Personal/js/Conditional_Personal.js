/**
 * Created by Oga Okwoche on 2/20/14.
 */


//This is a calculation that will decide where what tours my family wil visit when they visit in the summer.

var numberOfPeople= prompt("Please enter the number of family members coming to visit.");

var numberOfDays=prompt("Please enter the number of days family members will be staying");

var budget=prompt("Please enter the budget for the vacation in dollars");

var foodCostPerDay= 30
var hotelCostPerNight= 20;
alert("2 people per room");
alert("The cost of food per day is $30")
alert("The cost of a room is $20 per night")
var totalCostFood =   numberOfDays *numberOfPeople*foodCostPerDay;
 console.log(totalCostFood)//delete this line

var totalHotelCost=  (numberOfDays-1)*numberOfPeople*hotelCostPerNight/2;
console.log(totalHotelCost)//delete this line..


var totalHotelAndFoodCost= totalCostFood+totalHotelCost;
console.log(totalHotelAndFoodCost)//delete this line

var threshold1=budget/2
console.log(threshold1)//delete this line
var threshold2= budget/3
console.log(threshold2)


if (totalHotelAndFoodCost>threshold1){
    console.log("We will go sight seeing in Baltimore City!");
}else if (totalHotelAndFoodCost<threshold1 && totalHotelAndFoodCost>=threshold2){
    console.log("We can go to do some shopping at Towson Mall");
}else(console.log("We will go visit New York and do some shopping!"));


