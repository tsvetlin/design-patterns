import Pizza from '../Pizza';

class NewYorkStylePepperoniPizza extends Pizza {
  constructor() {
    super();
    this.name = 'New York Style Pepperoni Pizza';
    this.dough = 'Think Crust Dough';
    this.sauce = 'Marinara Sauce';

    this.toppings.push('Grated Reggiano Cheese');
    this.toppings.push('Sliced Pepperoni');
    this.toppings.push('Garlic');
    this.toppings.push('Onion');
    this.toppings.push('Mushrooms');
    this.toppings.push('Red Pepper');
  }
}

export default NewYorkStylePepperoniPizza;
