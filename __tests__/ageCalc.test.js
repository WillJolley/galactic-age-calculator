describe('subject', () => {
  let subject = new Subject("30");

  TestScheduler('should create a subject with user inputted age in earth years', () => {
    expect(subject.earthAge).toEqual("30");
  })
})