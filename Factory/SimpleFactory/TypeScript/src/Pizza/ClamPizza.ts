import Pizza from './Pizza';

class ClamPizza extends Pizza {
  constructor() {
    super();
    this.name = 'Clam Pizza';
    this.dough = 'Thin Crust';
    this.sauce = 'White Garlic Sauce';
    this.toppings.push('Clams');
    this.toppings.push('Grated Parmesan Cheese');
  }
}

export default ClamPizza;
