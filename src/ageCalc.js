export default class Subject {
  constructor(earthAge, pastBday, futureBday) {
    this.earthAge = earthAge;
    this.pastBday = pastBday;
    this.futureBday = futureBday;
  }

  calculateAges() {
    this.mercuryAge = this.earthAge / .24;
    this.venusAge = this.earthAge / .62;
    this.marsAge = this.earthAge / 1.88;
    this.jupiterAge = this.earthAge / 11.86;
  }

  calcEarthYearsPassed() {
    this.earthYearsPassed = this.earthAge - this.pastBday;
  }

  calcYearsPassed() {
    this.mercYearsPassed = this.earthYearsPassed / .24;
    this.venusYearsPassed = this.earthYearsPassed / .62;
    this.marsYearsPassed = this.earthYearsPassed / 1.88;
    this.jupYearsPassed = this.earthYearsPassed / 11.86;
  } 

  calcEarthYearsToPass() {
    this.earthYearsToPass = this.futureBday - this.earthAge;
  }

  calcYearsToPass() {
    this.mercYearsToPass = this.earthYearsToPass / .24;
    this.venusYearsToPass = this.earthYearsToPass / .62;
    this.marsYearsToPass = this.earthYearsToPass / 1.88;
    this.jupYearsToPass = this.earthYearsToPass / 11.86;
  }

}
