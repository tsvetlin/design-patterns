import Beverage from './Beverage';

class Tea extends Beverage {
  constructor() {
    super();
  }

  brew(): void {
    console.log('Steeping the tea');
  }

  addCondiments(): void {
    console.log('Adding Lemon');
  }
}

export default Tea;
