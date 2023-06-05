import Dough from '../Ingredients/Dough';
import ThinCrustDough from '../Ingredients/ThinCrustDough';
import Sauce from '../Ingredients/Sauce';
import MarinaraSauce from '../Ingredients/MarinaraSauce';
import Cheese from '../Ingredients/Cheese';
import ReggianoCheese from '../Ingredients/ReggianoCheese';
import Veggies from '../Ingredients/Veggies';
import Garlic from '../Ingredients/Garlic';
import Onion from '../Ingredients/Onion';
import Mushroom from '../Ingredients/Mushroom';
import RedPepper from '../Ingredients/RedPepper';
import Pepperoni from '../Ingredients/Pepperoni';
import SlicedPepperoni from '../Ingredients/SlicedPepperoni';
import Clams from '../Ingredients/Clams';
import FreshClams from '../Ingredients/FreshClams';
import PizzaIngredientFactory from './PizzaIngredientFactory';

export default class NewYorkPizzaIngredientFactory
  implements PizzaIngredientFactory
{
  createDough(): Dough {
    return new ThinCrustDough();
  }

  createSauce(): Sauce {
    return new MarinaraSauce();
  }

  createCheese(): Cheese {
    return new ReggianoCheese();
  }

  createVeggies(): Veggies[] {
    return [new Garlic(), new Onion(), new Mushroom(), new RedPepper()];
  }

  createPepperoni(): Pepperoni {
    return new SlicedPepperoni();
  }

  createClams(): Clams {
    return new FreshClams();
  }
}
