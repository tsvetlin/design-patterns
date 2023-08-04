import Turkey from '../interfaces/Turkey';
import Duck from '../interfaces/Duck';

export default class DuckAdapter implements Turkey {
  duck: Duck;

  constructor(duck: Duck) {
    this.duck = duck;
  }

  gobble() {
    this.duck.quack();
  }

  fly() {
    this.duck.fly();
  }
}
