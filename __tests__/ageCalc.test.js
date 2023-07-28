import Subject from '../src/ageCalc';

describe('Subject', () => {
  let subject = new Subject(30, 29, 81);

  test('should create a subject with user inputted age in earth years', () => {
    expect(subject.earthAge).toEqual(30);
  });

  test('should return user age in mercury years, venus years, mars years, and jupiter years', () => {
    subject.calculateAges();
    expect(subject.mercuryAge).toEqual(30 / .24);
    expect(subject.venusAge).toEqual(30 / .62);
    expect(subject.marsAge).toEqual(30 / 1.88);
    expect(subject.jupiterAge).toEqual(30 / 11.86);
  });

  test('should determine how many earth years have passed since a past birthday', () => {
    subject.calcEarthYearsPassed();
    expect(subject.earthYearsPassed).toEqual(1);
  });

  test('should determine how many mercury years, venus years, mars years, and jupiter years have passed since a past birthday', () => {
    subject.calcYearsPassed();
    expect(subject.mercYearsPassed).toEqual(1 / .24);
    expect(subject.venusYearsPassed).toEqual(1 / .62);
    expect(subject.marsYearsPassed).toEqual(1 / 1.88);
    expect(subject.jupYearsPassed).toEqual(1 / 11.86);
  });

  test('should determine how many earth years will pass by a future birthday', () => {
    subject.calcEarthYearsToPass();
    expect(subject.earthYearsToPass).toEqual(51);
  });

  test('should determine how many mercury years, venus years, mars years, and jupiter years will pass by a future birthday', () => {
    subject.calcYearsToPass();
    expect(subject.mercYearsToPass).toEqual(51 / .24);
    expect(subject.venusYearsToPass).toEqual(51 / .62);
    expect(subject.marsYearsToPass).toEqual(51 / 1.88);
    expect(subject.jupYearsToPass).toEqual(51 / 11.86);
  });

})