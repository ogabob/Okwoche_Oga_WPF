/**
 * Created by Oga Okwoche on 2/28/14. at 1:26 am
 */
//we will be deciding what kind of shape given the length of sides.

alert("We want to know the kind of shape given the length of sides of the shape")

var a=prompt("Please enter the length of side a")//length in meters
var b= prompt("Please enter the length of side b")//length in meters
var c= prompt("please enter the length of side c")
var d= prompt("please enter the length  of side d")

 var area=a*b*c*d

 (area/2===a*b/2)? console.log("This is a square"):console.log("you figure out the shape")// the area of a square is 2 times the area of a triangle