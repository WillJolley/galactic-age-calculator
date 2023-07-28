export default class Subject {
  constructor(earthAge, pastBday, futureBday) {
    this.earthAge = earthAge;
    this.pastBday = pastBday;
    this.futureBday = futureBday;
  }

  futureDiff = this.futureBday - this.earthAge;

  calculateMercuryAge() {
    this.mercuryAge = this.earthAge / .24;
  }

  calculateVenusAge() {
    this.venusAge = this.earthAge / .62;
  }

  calculateMarsAge() {
    this.marsAge = this.earthAge / 1.88;
  }

  calculateJupiterAge() {
    this.jupiterAge = this.earthAge / 11.86;
  }

  calcEarthYearsPassed() {
    this.earthYearsPassed = this.earthAge - this.pastBday;
  }

  calcMercYearsPassed() {
    this.mercYearsPassed = this.earthYearsPassed / .24;
  }

  calcVenusYearsPassed() {
    this.venusYearsPassed = this.earthYearsPassed / .62;
  }


}
