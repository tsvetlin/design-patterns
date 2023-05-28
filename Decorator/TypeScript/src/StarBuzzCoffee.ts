import Beverage from './beverages/Beverage';
import DarkRoast from './beverages/DarkRoast';
import Espresso from './beverages/Espresso';
import HouseBlend from './beverages/HouseBlend';
import Mocha from './condiments/Mocha';
import Whip from './condiments/Whip';
import Soy from './condiments/Soy';

const main = () => {
  const espresso: Beverage = new Espresso();
  console.log(espresso.getDescription(), ' $' + espresso.cost());

  let doubleMochaWithWhip = new DarkRoast();
  doubleMochaWithWhip = new Mocha(doubleMochaWithWhip);
  doubleMochaWithWhip = new Mocha(doubleMochaWithWhip);
  doubleMochaWithWhip = new Whip(doubleMochaWithWhip);

  console.log(
    doubleMochaWithWhip.getDescription(),
    ' $' + doubleMochaWithWhip.cost()
  );

  let houseBlendWithSoyMochaAndWhip = new HouseBlend();
  houseBlendWithSoyMochaAndWhip = new Soy(houseBlendWithSoyMochaAndWhip);
  houseBlendWithSoyMochaAndWhip = new Mocha(houseBlendWithSoyMochaAndWhip);
  houseBlendWithSoyMochaAndWhip = new Whip(houseBlendWithSoyMochaAndWhip);

  console.log(
    houseBlendWithSoyMochaAndWhip.getDescription(),
    ' $' + houseBlendWithSoyMochaAndWhip.cost()
  );
};

main();
