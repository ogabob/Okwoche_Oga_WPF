
//this is a wacky math proving x/y + w/z is the same as (xz+wy)/yz where x,y,w,z are number values.

alert( "We want to prove that x/y+ y/z is the same as (xz+wy)/yz" )

alert ("Let x=3, y=4, w=7, z=9")

alert("now let\'s try  x/y+ y/z ")

var numbers= [3,4,7,9]// ..0,1,2,3 these are real numbers

var sum1= (Number(numbers[0]) )/(Number(numbers[1]))+ (Number(numbers[2]))/(Number(numbers[3]))//This is the addition of fraction 3/4+7/9

var statement1= "The sum is "+ sum1

alert(statement1)

console.log (statement1)

var scenario2= "Now lets try (xz+wy)/yz  where x=3, y=4, w=7, and z=9 and see if it works"

alert (scenario2)

var a= Number(numbers[0])* Number(numbers[3])

var b=   Number(numbers[1])*Number(numbers[2])


var sum2= a/b

var statement2= "The sum is "+ sum2

alert (sum2)

console.log(statement2)

alert("Try this on paper!")