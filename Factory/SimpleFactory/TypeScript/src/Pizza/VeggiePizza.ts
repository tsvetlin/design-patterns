import Pizza from './Pizza';

class VeggiePizza extends Pizza {
  constructor() {
    super();
    this.name = 'Veggie Pizza';
    this.dough = 'Crust';
    this.sauce = 'Marinara Sauce';
    this.toppings.push('Shredded Mozzarella');
    this.toppings.push('Grated Parmesan');
    this.toppings.push('Diced Onion');
    this.toppings.push('Sliced Mushrooms');
    this.toppings.push('Sliced Red Pepper');
    this.toppings.push('Sliced Black Olives');
  }
}

export default VeggiePizza;
