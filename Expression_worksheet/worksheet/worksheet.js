
//Dog Year

var sparkyAgeHuman = 2;

var sparkyAgeDog   = sparkyAgeHuman * 7;//2 year old dog in human age is 7 time more older in dog age.

var statement= "sparky is" + " " + sparkyAgeHuman + " "+ "human years old which is"+ " "+ sparkyAgeDog+ " "+"in dog years";

console.log(statement)



// Slices of a pie Part 1

var slicesPerPizza= 7;

var numberOfPeople= 3

var numberOfPizzas= 4

var numberOfSlicesPerPerson= slicesPerPizza* numberOfPizzas/numberOfPeople//number of slices per person is is the product of the slices of pizza and the number of pizzas divided by the number of people

var statement2 = "Each person ate "+ numberOfSlicesPerPerson+" slices of pizza at the party"

console.log(statement2)




//slices of a pie II

var sparkySlices= slicesPerPizza* numberOfPizzas % numberOfPeople;// there is only one remainder for sparky

var statement3= "Sparky got "+ sparkySlices+ " slice of pizza"

console.log(statement3)



// average Shopping Bill

var weeklyGrocery = ["20","15","18","23","21"];//array 0,1,2,3,4

var weeklyGroceryTotal= Number(weeklyGrocery[0])+Number(weeklyGrocery[1])+Number(weeklyGrocery[2])+Number(weeklyGrocery[3])+Number(weeklyGrocery[4]);

var averageWeeklyGrocery= weeklyGroceryTotal/5

var statement4= "You have spent a total of  $"+ weeklyGroceryTotal+ " on groceries over 5 weeks.That is an average of $" +averageWeeklyGrocery+ " per week"

console.log(statement4)



//Discounts

var originalPrice= 20 //price in dollars

var discount= 10  //discount is in percentage

var itemDescription= "shoes"

var salesTax = 6 //sales tax is in percentage

var priceOfItemWithTax= originalPrice- (originalPrice* discount/100)+ (originalPrice* salesTax/100);// the price of the item with tax is 20-(20*10/100)+(20*6/100)

var priceOfItemWithoutTax= originalPrice- (originalPrice* discount/100);// the price of the item without tax is 20-(20*10/100)

var statement5= "Your "+ itemDescription+ " was originally $"+ originalPrice+ " but after a "+ discount + "% discount, it is now $" + priceOfItemWithoutTax+" without tax, and $"+priceOfItemWithTax+ " with tax.";

console.log(statement5)


