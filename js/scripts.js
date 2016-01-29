function Receipt (pizzaSize, pizzaToppings) {
  this.pizzaSize = pizzaSize;
  this.pizzaToppings = pizzaToppings;
  this.pizzaPrice = 0;
}

Receipt.prototype.pizzaSizePrice = function() {
  if (this.pizzaSize === 'Small') {
    return this.pizzaPrice += 9;
  } else if (this.pizzaSize === 'Medium') {
    return this.pizzaPrice += 12;
  } else if (this.pizzaSize === 'Large') {
    return this.pizzaPrice += 15;
  } else {
    return this.pizzaPrice += 18;
  }
};

Receipt.prototype.pizzaToppingsPrice = function() {
  for (var i = 0; i < this.pizzaToppings.length; i++) {
    this.pizzaPrice += 0.50;
  }
    return this.pizzaPrice;
};

//go through list of toppings selected and push them into an array

$(document).ready(function() {

});
