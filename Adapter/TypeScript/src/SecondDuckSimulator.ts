import TurkeyAdapter from './adapters/TurkeyAdapter';
import DuckAdapter from './adapters/DuckAdapter';
import MallardDuck from './animals/MallardDuck';
import WildTurkey from './animals/WildTurkey';
import Duck from './interfaces/Duck';
import Turkey from './interfaces/Turkey';

const main = () => {
  const duck = new MallardDuck();
  const turkey = new WildTurkey();
  const turkeyAdapter: Duck = new TurkeyAdapter(turkey);
  const duckAdapter: Turkey = new DuckAdapter(duck);

  console.log('The turkey says...');
  turkey.gobble();
  turkey.fly();

  console.log('\nThe Duck says...');
  testDuck(duck);

  console.log('\nThe TurkeyAdapter says...');
  testDuck(turkeyAdapter);

  console.log('\nThe DuckAdapter says...');
  testTurkey(duckAdapter);
};

const testDuck = (duck: Duck): void => {
  duck.quack();
  duck.fly();
};

const testTurkey = (turkey: Turkey): void => {
  turkey.gobble();
  turkey.fly();
};

main();
