//Functions_Industry by Oga Okwoche 2/26/14

//We will be deciding which phone we will get based on the pixel density of the phone.

alert("We will be deciding the which phone we will get based on the pixel density of the phone screen")

var dp=prompt("Please enter the diagonal resolution in pixels ");
var di=prompt("Please enter the diagonal size of the screen in inches ");

var realPpi=function(dp,di){
    var ppi=dp/di;
    var s1=("You can get this phone.It has "+ppi+ "pixels");
    var s2=("I would not recommend this phone.It has "+ ppi+" pixels. It has a low resolution");

    if (ppi>261){
        return s1;
    }else {
        return s2;
    }


}

var x=realPpi(dp,di);

console.log(x)