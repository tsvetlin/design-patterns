import Pizza from '../Pizza';

class ChicagoStylePepperoniPizza extends Pizza {
  constructor() {
    super();
    this.name = 'Chicago Style Pepperoni Pizza';
    this.dough = 'Extra Thick Crust Dough';
    this.sauce = 'Plum Tomato Sauce';

    this.toppings.push('Shredded Mozzarella Cheese');
    this.toppings.push('Black Olives');
    this.toppings.push('Spinach');
    this.toppings.push('Eggplant');
    this.toppings.push('Sliced Pepperoni');
  }

  cut(): void {
    console.log('Cutting the pizza into sqaure slices');
  }
}

export default ChicagoStylePepperoniPizza;
