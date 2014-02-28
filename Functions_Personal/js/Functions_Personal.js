
/**
 * Created by Oga Okwoche on 2/27/14 at 7:46PM
 */


// I will be deciding is I will be taking an auto loan by deciding the APR. APR stands for the Annual Percentage Rate

var n= prompt("Please enter the number of payments you will be making in 1 year")

var tf=prompt("Please enter the total financing charges in Dollars")

var ab=prompt("Please enter the amount borrowed")

var T=prompt("Please enter the number of scheduled payments for the life of the loan")

var finalStatement=CalcApr(n,tf,ab,T);

function CalcApr(n,tf,ab,T){
   var apr= (2* n * tf )/( ab *T+1)
   var statement1=("Your APR is "+apr+ ". It is not recommended that you take this loan")
   var statement2=("Your APR is "+apr+ ". You can take the loan if you have a down payment")
   var statement3=("Your APR is "+apr+ ". You can go ahead and take the loan. No down payment is necessary")
    if (apr>5){
       return statement1

    }else if(apr<5 && apr>0.9) {
       return statement2

    }else{
       return statement3
    }



}

console.log(finalStatement)