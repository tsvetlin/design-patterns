import MallardDuck from './duck/MallardDuck';
import ModelDuck from './duck/ModelDuck';
import RubberDuck from './duck/RubberDuck';
import FlyRocketPowered from './fly/FlyRocketPowered';

const main = () => {
  console.log('Hello duck\n');
  const mallard = new MallardDuck();
  mallard.display();
  mallard.performQuack();
  mallard.performFly();

  console.log('\n');

  const rubber = new RubberDuck();
  rubber.display();
  rubber.performQuack();
  rubber.performFly();

  console.log('\n');

  const model = new ModelDuck();
  model.display();
  model.performQuack();
  model.performFly();
  model.setFlyBehavior(new FlyRocketPowered());
  model.performFly();
};

main();
