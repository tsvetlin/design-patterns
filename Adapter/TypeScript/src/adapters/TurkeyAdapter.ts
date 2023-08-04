import Duck from '../interfaces/Duck';
import Turkey from '../interfaces/Turkey';

export default class TurkeyAdapter implements Duck {
  turkey: Turkey;

  constructor(turkey: Turkey) {
    this.turkey = turkey;
  }

  quack() {
    this.turkey.gobble();
  }

  fly() {
    for (let i = 0; i < 5; i++) {
      this.turkey.fly();
    }
  }
}
