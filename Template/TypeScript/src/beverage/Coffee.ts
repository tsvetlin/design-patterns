import Beverage from './Beverage';

class Coffee extends Beverage {
  constructor() {
    super();
  }

  brew(): void {
    console.log('Dripping Coffee through filter');
  }

  addCondiments(): void {
    console.log('Adding Sugar and Milk');
  }
}

export default Coffee;
