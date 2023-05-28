import Beverage from '../beverages/Beverage';
import CondimentDecorator from './CondimentDecorator';

class Soy extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }
  getDescription() {
    return this.beverage.getDescription() + ', Soy';
  }

  cost(): number {
    return this.beverage.cost() + 0.15;
  }
}

export default Soy;
