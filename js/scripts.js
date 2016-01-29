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
  for (var i = 0; i < this.pizzaToppings.length; i++) {
    this.pizzaPrice += 0.50;
  }
    return this.pizzaPrice;
};

function resetFields() {
  $("form input[name=size]").attr('checked',false);
  $("input:checkbox[name=topping]").attr('checked',false);
}

$(document).ready(function() {
  $("form#order-pizza").submit(function(event) {
    event.preventDefault();
    debugger;

    var pizzaSize = $("form input[name=size]:checked").val();
    var pizzaToppings = []
      $("input:checkbox[name=topping]:checked").each(function(){
      pizzaToppings.push($(this).val());
      });
    var newPizza = new Pizza(pizzaSize, pizzaToppings)
    newPizza.pizzaSizePrice(pizzaSize);
    newPizza.pizzaToppingsPrice(pizzaToppings);

  $('.pizza-order').show();
  $('.pizza-size').text(newPizza.pizzaSize);
  $('.pizza-toppings').text(newPizza.pizzaToppings);
  $('.pizza-price').text(newPizza.pizzaPrice);


  resetFields();
  });
});
