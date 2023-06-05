import Pizza from './Pizza';
import PizzaIngredientFactory from '../IngredientFactory/PizzaIngredientFactory';

export default class PepperoniPizza extends Pizza {
  pizzaIngredientFactory: PizzaIngredientFactory;

  constructor(pizzaIngredientFactory: PizzaIngredientFactory) {
    super();
    this.pizzaIngredientFactory = pizzaIngredientFactory;
  }

  prepare(): void {
    console.log(`Preparing ${this.name}`);
    this.dough = this.pizzaIngredientFactory.createDough();
    this.sauce = this.pizzaIngredientFactory.createSauce();
    this.cheese = this.pizzaIngredientFactory.createCheese();
    this.veggies = this.pizzaIngredientFactory.createVeggies();
    this.pepperoni = this.pizzaIngredientFactory.createPepperoni();
  }
}
