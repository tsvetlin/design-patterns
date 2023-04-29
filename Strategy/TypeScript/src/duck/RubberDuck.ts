import FlyNoWay from '../fly/FlyNoWay';
import Squeak from '../quack/Squeak';
import Duck from './Duck';

class RubberDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new FlyNoWay();
    this.quackBehavior = new Squeak();
  }

  display() {
    console.log("I'm a rubber duck :)");
  }
}

export default RubberDuck;
