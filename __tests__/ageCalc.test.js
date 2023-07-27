import Subject from '../src/ageCalc';

describe('Subject', () => {

  test('should create a subject with user inputted age in earth years', () => {
    let subject = new Subject(30);
    expect(subject.earthAge).toEqual(30);
  });
})