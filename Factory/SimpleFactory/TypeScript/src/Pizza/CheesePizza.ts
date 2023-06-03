import Pizza from './Pizza';

class CheesePizza extends Pizza {
  constructor() {
    super();
    this.name = 'Cheese Pizza';
    this.dough = 'Regular Crust';
    this.sauce = 'Marinara Pizza Sauce';
    this.toppings.push('Fresh Mozzarella');
    this.toppings.push('Parmesan');
  }
}

export default CheesePizza;
