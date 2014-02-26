/**
 * Created by Oga Okwoche on 2/24/14.
 */
//Function- Basic Structure


function outputMSg(){
    console.log("Hello World")
}

function calcArea(){
    var width=30;
    var height=20;
    var area= width* height;
    console.log(area);
}
calcArea();




calcArea(20,30);

function calcArea(width,height){

    var area= width* height;
    console.log(area);
}


function dogYears(age){//parameters
    var dogYears=age*4
    console.log("Sparky is "+ dogYears+" years old")

}
dogYears(4);
dogYears(5);//arguments
dogYears(6)


var total=calcArea(20, 20);
function calArea(w,H){
    var area=w* H
    return area;
}
console.log(total);