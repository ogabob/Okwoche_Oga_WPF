/**
 * Created by Oga Okwoche on 2/20/14.
 */


//This is a calculation that will decide where what tours my family wil visit when they visit in the summer.

var numberOfPeople= prompt("Please enter the number of family members coming to visit.");

var numberOfDays=prompt("Please enter the number of days family members will be staying");

var budget=prompt("Please enter the budget for the vacation in dollars");

var foodCostPerDay= 30// this is the budgeted amount to spend on food per day.
var hotelCostPerNight= 20;// This is the budgeted amount for hotel per night
alert("There will be 2 people per room");//I made this more descriptive
alert("The cost of food per day is $30")// this is the budgeted amount to spend on food per day.
alert("The cost of a room is $20 per night")// This is the budgeted amount for hotel per night
var totalCostFood =   numberOfDays *numberOfPeople*foodCostPerDay;//This calculates the total cost of food for the period of time


var totalHotelCost=  (numberOfDays-1)*numberOfPeople*hotelCostPerNight/2; //This calculates the totola cost of the hotel for the period of time



var totalHotelAndFoodCost= totalCostFood+totalHotelCost;//This is the total cost on food and  hotel for the stay period.


var threshold1=budget/2// this is the maximun safe zone to spend

var threshold2= budget/3//this is the safest zone to spend



if (totalHotelAndFoodCost>threshold1){// this condition applies if the total cost exceeds the maximum safe zone
    console.log("We will go sight seeing in Baltimore City!");
}else if (totalHotelAndFoodCost<threshold1 && totalHotelAndFoodCost>=threshold2){
    console.log("We can go to do some shopping at Towson Mall");
}else(console.log("We will go visit New York and do some shopping!"));


