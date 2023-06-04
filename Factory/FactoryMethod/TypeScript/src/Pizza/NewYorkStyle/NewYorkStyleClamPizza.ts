import Pizza from '../Pizza';

class NewYorkStyleClamPizza extends Pizza {
  constructor() {
    super();
    this.name = 'New York Style Clam Pizza';
    this.dough = 'Thin Crust Dough';
    this.sauce = 'Marinara Sauce';

    this.toppings.push('Grated Reggiano Cheese');
    this.toppings.push('Fresh Clams from Long Island Sound');
  }
}

export default NewYorkStyleClamPizza;
