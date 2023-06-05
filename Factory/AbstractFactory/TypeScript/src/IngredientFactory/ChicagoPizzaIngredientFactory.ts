import Dough from '../Ingredients/Dough';
import ThickCrustDough from '../Ingredients/ThickCrustDough';
import Sauce from '../Ingredients/Sauce';
import PlumTomatoSauce from '../Ingredients/PlumTomatoSauce';
import Cheese from '../Ingredients/Cheese';
import MozzarellaCheese from '../Ingredients/MozzarellaCheese';
import Veggies from '../Ingredients/Veggies';
import PizzaIngredientFactory from './PizzaIngredientFactory';
import Eggplant from '../Ingredients/Eggplant';
import BlackOlives from '../Ingredients/BlackOlives';
import Spinach from '../Ingredients/Spinach';
import Pepperoni from '../Ingredients/Pepperoni';
import SlicedPepperoni from '../Ingredients/SlicedPepperoni';
import Clams from '../Ingredients/Clams';
import FrozenClams from '../Ingredients/FrozenClams';

export default class ChicagoPizzaIngredientFactory
  implements PizzaIngredientFactory
{
  createDough(): Dough {
    return new ThickCrustDough();
  }

  createSauce(): Sauce {
    return new PlumTomatoSauce();
  }

  createCheese(): Cheese {
    return new MozzarellaCheese();
  }

  createVeggies(): Veggies[] {
    return [new Eggplant(), new BlackOlives(), new Spinach()];
  }

  createPepperoni(): Pepperoni {
    return new SlicedPepperoni();
  }

  createClams(): Clams {
    return new FrozenClams();
  }
}
