import Beverage from '../beverages/Beverage';
import CondimentDecorator from './CondimentDecorator';

class Whip extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }
  getDescription() {
    return this.beverage.getDescription() + ', Whip';
  }

  cost(): number {
    return this.beverage.cost() + 0.1;
  }
}

export default Whip;
