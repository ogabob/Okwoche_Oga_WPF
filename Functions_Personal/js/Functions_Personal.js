
/**
 * Created by Oga Okwoche on 2/27/14 at 7:46PM
 */


// I will be deciding is I will be taking an auto loan by deciding the APR. APR stands for the Annual Percentage Rate

alert("We will be deciding if we will take the bank loan for a car based on the APR ");//This alert statement is an introduction to the user to understand what the user will be doing.

var n= prompt("Please enter the number of payments you will be making in 1 year");//This could range from 1-12

var tf=prompt("Please enter the total financing charges in Dollars");// This is the dollar amount of financial charges.

var ab=prompt("Please enter the amount borrowed");//This is the amount borrowed from the bank.

var T=prompt("Please enter the number of scheduled payments for the life of the loan");// This is the total number of payments for the life of the loan

var finalStatement=CalcApr(n,tf,ab,T);// These are the arguments with the variable n,tf,ab,t

function CalcApr(n,tf,ab,T){//This is the parameter of the function where the arguments are stored.

    var apr= (2* n * tf )/( ab *T+1);// This is  the basic formula for calculating the APR.

    var statement1=("Your APR is "+apr+ ". It is not recommended that you take this loan");//This is a variable statement if certain conditions are true

    var statement2=("Your APR is "+apr+ ". You can take the loan if you have a down payment");//This is a variable statement if certain conditions are true

   var statement3=("Your APR is "+apr+ ". You can go ahead and take the loan. No down payment is necessary");//This is a variable statement if certain conditions are true

    if (apr>5){//first condition
       return statement1;// statement1 is true if only this condition is true and is pushed out of the function

    }else if(apr<5 && apr>0.9) {//second condition
       return statement2;//statement2 is true if only this condition is true and is pushed out of the function

    }else{
       return statement3;//if statement1 and statement2 are false, then only statement3 is true and is pushed out of the function.
    }



}

console.log(finalStatement);//This is the final print result of the function after the conditions have been satisfied.