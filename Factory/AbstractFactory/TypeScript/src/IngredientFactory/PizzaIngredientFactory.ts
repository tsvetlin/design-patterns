import Dough from '../Ingredients/Dough';
import Sauce from '../Ingredients/Sauce';
import Cheese from '../Ingredients/Cheese';
import Veggies from '../Ingredients/Veggies';
import Pepperoni from '../Ingredients/Pepperoni';
import Clams from '../Ingredients/Clams';

export default interface PizzaIngredientFactory {
  createDough: () => Dough;
  createSauce: () => Sauce;
  createCheese: () => Cheese;
  createVeggies: () => Veggies[];
  createPepperoni: () => Pepperoni;
  createClams: () => Clams;
}
