

var oldEnough= true;

//if child is old enough, print to console "You can ride"

if(oldEnough){console.log("you can ride the coaster!")};


var oldEnough= false;

//if child is old enough, print to console "You can ride"

if(oldEnough){console.log("you can ride the coaster!")};

console.log("what comes after?")



var kidHeight= 50;

//if child is old enough, print to console "You can ride the coaster!
// if the child is greater than 50 inches"

if(kidHeight>48){console.log("you can ride the coaster!")};



var height= 44;

//if child is old enough, print to console "You can ride"
//if the height is greater than 50

if(height>50){console.log("you can ride the coaster!")};




var weight= 120
var minWeight=100

//if weight is more than 100lbs print "Passed Inspection"

if (weight>minWeight){console.log("Passed Inspection")};

var length= 1
var minLength= 2
//if length is more than 2, then print to console, "passed"

if (length>minLength){console.log("passed")};

console.log("Repeat process")


var length= 1
var minLength= 2
var allowance=2
//if length is more than 2, then print to console, "passed"

if (length+allowance>minLength){console.log("passed")};



var height= 44;

//if child is old enough, print to console "You can ride"
//if the height is greater than 50

if(height>50){console.log("you can ride the coaster!");}else {console.log("sorry it is not safe for you to ride")}



var height= 49;

//if child is old enough, print to console "You can ride"
//if the height is greater than 50

if(height>=50){console.log("you can ride the coaster!");}else {console.log("sorry it is not safe for you to ride")}


var kidHeight= 52;
var minHeight= 48;
var parentHeight= 45;

if (kidHeight>minHeight){console.log("you can ride the coaster")
}else if(kidHeight>minHeight){console.log("you can ride as long as you are with a parent!")
}else{console.log("sorry. This is not safe for you")}




//if price of phone is less than budget and pay is over 300
var budget= 300;
var iPhonePrice= 150;
var Pay= 200;

// if price of phone is less than budget and pay is over 300

if (iPhonePrice<budget && Pay>300){ console.log("you can buy phone");
}else {console.log("sorry,you can\'t get phone");}



var budget= 100;
var iPhonePrice= 150;
var lotteryWin= true;

// if price of phone is less than budget and pay is over 300

if (iPhonePrice<budget || lotteryWin===true){ console.log("you can buy phone");
}else {console.log("sorry,you can\'t get phone");}


var age=10;
var book;

//if the child is less than 10 years, the child gets Green Eggs and Ham and is greater than 10, The child gets The Time Machine
book=(age<10)?" Green Eggs and Ham" :"The Time Machine"
console.log(book)