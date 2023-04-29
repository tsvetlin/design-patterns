import { FlyBehavior } from '../fly/FlyBehavior';
import { QuackBehavior } from '../quack/QuackBehavior';

class Duck {
  flyBehavior: FlyBehavior;
  quackBehavior: QuackBehavior;

  display() {
    throw new Error('Not implemented');
  }

  performFly() {
    this.flyBehavior.fly();
  }

  setFlyBehavior(flyBehavior: FlyBehavior) {
    this.flyBehavior = flyBehavior;
  }

  performQuack() {
    this.quackBehavior.quack();
  }

  setQuackBehavior(quackBehavior: QuackBehavior) {
    this.quackBehavior = quackBehavior;
  }

  swim() {
    console.log('All ducks float, even decoys!');
  }
}

export default Duck;
