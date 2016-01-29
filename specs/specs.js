describe('Receipt', function() {
  it('creates a receipt for the customer based on their order information', function() {
    var testReceipt = new Receipt ("Large","black olives",0);
    expect(testReceipt.pizzaSize).to.equal("Large");
    expect(testReceipt.pizzaToppings).to.equal("black olives");
    expect(testReceipt.pizzaPrice).to.eql(0);
  });
});
