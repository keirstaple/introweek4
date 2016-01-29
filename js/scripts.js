function Pizza (pizzaSize, pizzaToppings) {
  this.pizzaSize = pizzaSize;
  this.pizzaToppings = pizzaToppings;
  this.pizzaPrice = 0;
}

Pizza.prototype.pizzaSizePrice = function() {
  if (this.pizzaSize === 'small') {
    return this.pizzaPrice += 9;
  } else if (this.pizzaSize === 'medium') {
    return this.pizzaPrice += 12;
  } else if (this.pizzaSize === 'large') {
    return this.pizzaPrice += 15;
  } else {
    return this.pizzaPrice += 18;
  }
};

Pizza.prototype.pizzaToppingsPrice = function() {
  for (i = 0; i < this.pizzaToppings.length; i++) {
    this.pizzaPrice += 0.50;
  }
    return this.pizzaPrice;
};

//go through list of toppings selected and push them into an array

$(document).ready(function() {
  $("form#order-pizza").submit(function(event) {
    debugger;

    var pizzaSize = $("form input[name=size]:checked").val();
    var pizzaToppings = []
      $("input:checkbox[name=topping]:checked").each(function(){
      pizzaToppings.push($(this).val());
      });
    var testPizza = new Pizza(pizzaSize, pizzaToppings)
    testPizza.pizzaSizePrice(pizzaSize);
    testPizza.pizzaToppingsPrice(pizzaToppings);


  event.preventDefault();
  });
});
