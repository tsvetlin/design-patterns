import BeefJerky from '../Ingredients/BeefJerky';
import Cheese from '../Ingredients/Cheese';
import Clams from '../Ingredients/Clams';
import Dough from '../Ingredients/Dough';
import GoatCheese from '../Ingredients/GoatCheese';
import HoneyMustardSauce from '../Ingredients/HoneyMustardSauce';
import Octopus from '../Ingredients/Octopus';
import Onion from '../Ingredients/Onion';
import Pepperoni from '../Ingredients/Pepperoni';
import Sauce from '../Ingredients/Sauce';
import Seaweed from '../Ingredients/Seaweed';
import ThinCrustDough from '../Ingredients/ThinCrustDough';
import Veggies from '../Ingredients/Veggies';
import Walnut from '../Ingredients/Walnut';
import PizzaIngredientFactory from './PizzaIngredientFactory';

export default class CaliforniaPizzaIngredientFactory
  implements PizzaIngredientFactory
{
  createDough(): Dough {
    return new ThinCrustDough();
  }

  createSauce(): Sauce {
    return new HoneyMustardSauce();
  }

  createCheese(): Cheese {
    return new GoatCheese();
  }

  createVeggies(): Veggies[] {
    return [new Walnut(), new Seaweed(), new Onion()];
  }

  createPepperoni(): Pepperoni {
    return new BeefJerky();
  }

  createClams(): Clams {
    return new Octopus();
  }
}
