describe('Pizza', function() {
  it('creates a receipt for the customer based on their order information', function() {
    var testPizza = new Pizza("large","black olives",0);
    expect(testPizza.pizzaSize).to.equal("large");
    expect(testPizza.pizzaToppings).to.equal("black olives");
    expect(testPizza.pizzaPrice).to.equal(0);
  });
});

describe('pizzaSizePrice', function() {
  it('calculate pizza price based on its size', function() {
    var testPizza = new Pizza('large', 'black olives');
    expect(testPizza.pizzaSizePrice()).to.equal(15);
  });
});

describe('pizzaToppingsPrice', function() {
  it('calculate pizza price based on the number of toppings', function() {
    var testPizza = new Pizza('Large', ['black olives', 'pepperoni', 'pepperoncini']);
    expect(testPizza.pizzaToppingsPrice()).to.equal(1.5);
  });
});
