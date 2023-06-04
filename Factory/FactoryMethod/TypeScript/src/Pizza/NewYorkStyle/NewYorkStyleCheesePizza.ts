import Pizza from '../Pizza';

class NewYorkStyleCheesePizza extends Pizza {
  constructor() {
    super();
    this.name = 'New York Style Sauce and Cheese Pizza';
    this.dough = 'Thin Crust Dough';
    this.sauce = 'Marinara Sauce';

    this.toppings.push('Grated Reggiano Cheese');
  }
}

export default NewYorkStyleCheesePizza;
