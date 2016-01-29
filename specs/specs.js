describe('Receipt', function() {
  it('creates a receipt for the customer based on their order information', function() {
    var testReceipt = new Receipt("Large","black olives",0);
    expect(testReceipt.pizzaSize).to.equal("Large");
    expect(testReceipt.pizzaToppings).to.equal("black olives");
    expect(testReceipt.pizzaPrice).to.equal(0);
  });
});

describe('pizzaSizePrice', function() {
  it('calculate pizza price based on its size', function() {
    var testReceipt = new Receipt('Large', 'black olives');
    expect(testReceipt.pizzaSizePrice()).to.equal(15);
  });
});

describe('pizzaToppingsPrice', function() {
  it('calculate pizza price based on the number of toppings', function() {
    var testReceipt = new Receipt('Large', ['black olives', 'pepperoni', 'pepperoncini']);
    expect(testReceipt.pizzaToppingsPrice()).to.equal(1.5);
  });
});
