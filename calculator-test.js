
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {amount: 100000, years: 30, rate: 2.5}
  expect(calculateMonthlyPayment(values).toEqual("395.12"))
});


it("should return a result with 2 decimal places", function() {
  // ..
  const values = {amount: 100000, years: 25, rate: 2.5}
  expect(calculateMonthlyPayment(values).toEqual("448.62"))
});


/// etc
