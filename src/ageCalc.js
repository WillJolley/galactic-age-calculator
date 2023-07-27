export default class Subject {
  constructor(earthAge) {
    this.earthAge = earthAge;
  }

mercuryAge = 0;
venusAge = 0;
marsAge = 0;
jupiterAge = 0;

  calculateMercuryAge() {
    return this.mercuryAge += this.earthAge / .24
  }

}
