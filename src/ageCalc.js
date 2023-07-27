export default class Subject {
  constructor(earthAge) {
    this.earthAge = earthAge;
  }

mercuryAge = 0;
venusAge = 0;
marsAge = 0;
jupiterAge = 0;

  calculateMercuryAge() {
    this.mercuryAge += this.earthAge / .24;
  }

  calculateVenusAge() {
    this.venusAge += this.earthAge / .62;
  }

  calculateMarsAge() {
    this.marsAge += this.earthAge / 1.88;
  }

  calculateJupiterAge() {
    this.jupiterAge += this.earthAge / 11.86;
  }

}
