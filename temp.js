import * as circleCalculator from './circleCalculator.js';

let radius = parseFloat(prompt('Please enter a radius: '));

let area = circleCalculator.computeCircleArea(radius);
let circumference = circleCalculator.computeCircleCircumference(radius);

console.log(`The circumference is ${circumference} and the area is ${area}.`);
