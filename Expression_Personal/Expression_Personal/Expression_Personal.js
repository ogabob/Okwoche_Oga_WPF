
//calculating the simple Interest and the total amount accrued after some years in my savings account.

var principal= prompt("We will be calculating the Simple Interest and the Accrued Amount after some years for my savings account.\nPlease put in the Dollar amount Principal ");// this is the dollar amount initially put in the bank

var rate=prompt("Please put in the Rate");// the rate is in percentage

var time= prompt("Please put in the Time in years");// the time is in years.

var interest= principal* rate* time/100; //The interest is the Principal*Rate*Time/100

var accruedAmount= Number(principal) + Number(interest)// the Number command is to make sure the numbers are added and not merged.

var statement1= "The Simple Interest is $"+ interest;

var statement2= "The Accrued Amount is $"+ accruedAmount;

alert(statement1);
alert(statement2);

console.log (statement1);
console.log (statement2);
