describe('Pizza', function() {
  it('creates a receipt for the customer based on their order information', function() {
    var newPizza = new Pizza("large","black olives",0);
    expect(newPizza.pizzaSize).to.equal("large");
    expect(newPizza.pizzaToppings).to.equal("black olives");
    expect(newPizza.pizzaPrice).to.equal(0);
  });
});

describe('pizzaSizePrice', function() {
  it('calculate pizza price based on its size', function() {
    var newPizza = new Pizza('Large', 'Black Olives');
    expect(newPizza.pizzaSizePrice()).to.equal(15);
  });
});

describe('pizzaToppingsPrice', function() {
  it('calculate pizza price based on the number of toppings', function() {
    var newPizza = new Pizza('Large', ['black olives', 'pepperoni', 'pepperoncini']);
    expect(newPizza.pizzaToppingsPrice()).to.equal(1.5);
  });
});
