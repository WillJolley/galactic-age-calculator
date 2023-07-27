import Subject from '../src/ageCalc';

describe('Subject', () => {
  let subject = new Subject(30);

  test('should create a subject with user inputted age in earth years', () => {
    expect(subject.earthAge).toEqual(30);
  });

  test('should return user age in mercury years', () => {
    subject.calculateMercuryAge();
    expect(subject.mercuryAge).toEqual(30 / .24);
  });

  test('should return user age in venus years', () => {
    subject.calculateVenusAge();
    expect(subject.venusAge).toEqual(30 / .62);
  });

  test('should return user age in mars years', () => {
    subject.calculateMarsAge();
    expect(subject.marsAge).toEqual(30 / 1.88)
  })

  test('should return user age in jupiter years', () => {
    subject.calculateJupiterAge();
    expect(subject.jupiterAge).toEqual(30 / 11.86);
  })


})