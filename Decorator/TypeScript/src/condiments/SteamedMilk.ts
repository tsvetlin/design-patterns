import Beverage from '../beverages/Beverage';
import CondimentDecorator from './CondimentDecorator';

class SteamedMilk extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }
  getDescription() {
    return this.beverage.getDescription() + ', Steamed Milk';
  }

  cost(): number {
    return this.beverage.cost() + 0.1;
  }
}

export default SteamedMilk;
