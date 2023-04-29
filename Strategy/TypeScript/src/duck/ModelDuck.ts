import Duck from './Duck';
import FlyNoWay from '../fly/FlyNoWay';
import MuteQuack from '../quack/MuteQuack';

class ModelDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new FlyNoWay();
    this.quackBehavior = new MuteQuack();
  }

  display() {
    console.log("I'm a model duck");
  }
}

export default ModelDuck;
