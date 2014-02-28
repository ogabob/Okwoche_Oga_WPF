//Functions_Industry by Oga Okwoche 2/26/14

//We will be deciding which phone we will get based on the pixel density of the phone.

alert("We will be deciding the which phone we will use to view our mobile website based on on the pixel density of the phone screen")//alert showing what the user will be doing to find out which phone the customer should use to view a website.

var dp=prompt("Please enter the diagonal resolution in pixels ");//This is the diagonal resolution in pictures
var di=prompt("Please enter the diagonal size of the screen in inches ");//This is the diagonal size of the screen in inches

var realPpi=function(dp,di){//This is the anonymous function
    var ppi=dp/di;//this is the formula for calculation the pixel per inch
    var s1=("You can get this phone.It has "+ppi+ "pixels");//this is a statement if a specific condition is true
    var s2=("I would not recommend this phone.It has "+ ppi+" pixels. It has a low resolution");

    if (ppi>261){
        return s1;
    }else {
        return s2;
    }


}

var x=realPpi(dp,di);

console.log(x)