import Pizza from './Pizza';
import PizzaIngredientFactory from '../IngredientFactory/PizzaIngredientFactory';

export default class ClamPizza extends Pizza {
  pizzaIngredientFactory: PizzaIngredientFactory;

  constructor(pizzaIngredientFactory: PizzaIngredientFactory) {
    super();
    this.pizzaIngredientFactory = pizzaIngredientFactory;
  }
  prepare(): void {
    console.log(`Prepering ${this.name}`);
    this.dough = this.pizzaIngredientFactory.createDough();
    this.sauce = this.pizzaIngredientFactory.createSauce();
    this.cheese = this.pizzaIngredientFactory.createCheese();
    this.clams = this.pizzaIngredientFactory.createClams();
  }
}
