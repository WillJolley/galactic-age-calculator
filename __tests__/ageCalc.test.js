import Subject from '../src/ageCalc';

describe('Subject', () => {
  let subject = new Subject(30, 29, 81);

  test('should create a subject with user inputted age in earth years', () => {
    expect(subject.earthAge).toEqual(30);
  });

  test('should return user age in mercury years', () => {
    //subject.calculateMercuryAge();
    expect(subject.mercuryAge).toEqual(30 / .24);
  });

  test('should return user age in venus years', () => {
    subject.calculateVenusAge();
    expect(subject.venusAge).toEqual(30 / .62);
  });

  test('should return user age in mars years', () => {
    subject.calculateMarsAge();
    expect(subject.marsAge).toEqual(30 / 1.88)
  });

  test('should return user age in jupiter years', () => {
    subject.calculateJupiterAge();
    expect(subject.jupiterAge).toEqual(30 / 11.86);
  });

  test('should determine how many earth years have passed since a past birthday', () => {
    subject.calcEarthYearsPassed();
    expect(subject.earthYearsPassed).toEqual(1);
  });

  test('should determine how many mercury years have passed since a past birthday', () => {
    subject.calcMercYearsPassed();
    expect(subject.mercYearsPassed).toEqual(1 / .24);
  });

  test('should determine how many venus years have passed since a past birthday', () => {
    subject.calcVenusYearsPassed();
    expect(subject.venusYearsPassed).toEqual(1 / .62);
  });

  test('should determine how many mars years have passed since a past birthday', () => {
    subject.calcMarsYearsPassed();
    expect(subject.marsYearsPassed).toEqual(1 / 1.88);
  });

  test('should determine how many jupiter years have passed since a past birthday', () => {
    subject.calcJupYearsPassed();
    expect(subject.jupYearsPassed).toEqual(1 / 11.86);
  });


})