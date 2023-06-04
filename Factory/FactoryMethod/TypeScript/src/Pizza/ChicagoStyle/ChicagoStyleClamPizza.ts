import Pizza from '../Pizza';

class ChicagoStyleClamPizza extends Pizza {
  constructor() {
    super();
    this.name = 'Chicago Style Clam Pizza';
    this.dough = 'Extra Thick Crust Dough';
    this.sauce = 'Plum Tomato Sauce';

    this.toppings.push('Shredded Mozzarella Cheese');
    this.toppings.push('Frozen Clams from Chesepeake Bay');
  }

  cut(): void {
    console.log('Cutting the pizza into sqaure slices');
  }
}

export default ChicagoStyleClamPizza;
