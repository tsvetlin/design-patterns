import Pizza from './Pizza';

class PepperoniPizza extends Pizza {
  constructor() {
    super();
    this.name = 'Pepperoni Pizza';
    this.dough = 'Regular Crust';
    this.sauce = 'Marinara Sauce';
    this.toppings.push('Sliced Pepperoni');
    this.toppings.push('Sliced Onion');
    this.toppings.push('Grated Parmesan Cheese');
  }
}

export default PepperoniPizza;
