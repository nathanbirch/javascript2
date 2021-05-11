import { calculateCircumference, calculateArea } from './circleCalculator.js';
import { convertToNumber } from './validation.js';

document.querySelector('#submitButton').onclick = submitFunction;
document.querySelector('#submitAreaButton').onclick = submitAreaFunction;

function submitFunction() {
  let radius = document.getElementById('radius').value;
  radius = convertToNumber(radius);
  if (typeof radius === 'string') {
    document.getElementById('output').innerHTML = radius; //  error
  } else {
    let c = calculateCircumference(radius);
    document.getElementById('output').innerHTML = c;
  }
}

function submitAreaFunction() {
  let radius = document.getElementById('area').value;
  radius = convertToNumber(radius);
  if (typeof radius === 'string') {
    document.getElementById('outputArea').innerHTML = radius; //  error
  } else {
    let c = calculateArea(radius);
    document.getElementById('outputArea').innerHTML = c;
  }
}
