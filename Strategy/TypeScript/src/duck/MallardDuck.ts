import Duck from './Duck';
import Quack from '../quack/Quack';
import FlyWithWings from '../fly/FlyWithWings';

class MallardDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new FlyWithWings();
    this.quackBehavior = new Quack();
  }

  display() {
    console.log("I'm a real Mallard Duck");
  }
}

export default MallardDuck;
