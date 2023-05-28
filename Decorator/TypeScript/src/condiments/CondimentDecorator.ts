import Beverage from '../beverages/Beverage';

abstract class CondimentDecorator extends Beverage {
  beverage: Beverage;
  abstract getDescription(): string;
}

export default CondimentDecorator;
