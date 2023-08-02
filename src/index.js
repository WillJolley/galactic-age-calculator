import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Subject from './ageCalc.js';

function handleForm(event) {
  event.preventDefault();
  const userAge = parseInt(document.getElementById("userAge"));
  const pastAge = parseInt(document.getElementById("pastAge"));
  const futureAge = parseInt(document.getElementById("futureAge"));
  
  let subject = new Subject(userAge, pastAge, futureAge);
  subject.calculateAges();
  subject.calcEarthYearsPassed();
  subject.calcYearsPassed();
  subject.calcEarthYearsToPass();
  subject.calcYearsToPass();
  
  let results = document.getElementById("results")
  results.ul.append 
  
}

window.addEventListener("load", function() {
  this.document.querySelector('form').addEventListener("submit", handleForm);
});