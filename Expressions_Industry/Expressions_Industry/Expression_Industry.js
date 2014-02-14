

// This code wil be computing the Hue which is a color property that defines a stimuli relative to the stimuli color of Red, Blue Green and Yellow. The colors are inclined at a tangent.

var Green= prompt("We will be calculating the Hue for a color from RGB.\nPlease enter the Green value in degrees");//This value is expressed in degrees

var Blue= prompt("Please enter the Blue value in degrees");// This value is expressed in degrees

var Red = prompt("Please enter the Red value in degrees")// this value is expressed in degrees

var tangentHue= (1.73*(Green-Blue))/ (2*(Red-Green-Blue));// This is the formula for calculating the Hue

var statement1= " The Hue is "+ tangentHue

alert(statement1);

console. log(statement1);


