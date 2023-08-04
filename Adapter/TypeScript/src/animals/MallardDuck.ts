import Duck from '../interfaces/Duck';

export default class MallardDuck implements Duck {
  quack() {
    console.log('Quack');
  }

  fly() {
    console.log("I'm flying");
  }
}
