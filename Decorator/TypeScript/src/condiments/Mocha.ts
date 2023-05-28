import Beverage from '../beverages/Beverage';
import CondimentDecorator from './CondimentDecorator';

class Mocha extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }
  getDescription() {
    return this.beverage.getDescription() + ', Mocha';
  }

  cost(): number {
    return this.beverage.cost() + 0.2;
  }
}

export default Mocha;
