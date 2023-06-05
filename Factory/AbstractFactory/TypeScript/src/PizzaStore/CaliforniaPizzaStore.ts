import Pizza from '../Pizza/Pizza';
import CheesePizza from '../Pizza/CheesePizza';
import PepperoniPizza from '../Pizza/PepperoniPizza';
import ClamPizza from '../Pizza/ClamPizza';
import VeggiePizza from '../Pizza/VeggiePizza';
import PizzaStore from './PizzaStore';
import PizzaIngredientFactory from '../IngredientFactory/PizzaIngredientFactory';
import CaliforniaPizzaIngredientFactory from '../IngredientFactory/CaliforniaPizzaIngredientFactory';

export default class CaliforniaPizzaStore extends PizzaStore {
  protected createPizza(type: string): Pizza {
    let pizza: Pizza = null;
    const pizzaIngredientFactory: PizzaIngredientFactory =
      new CaliforniaPizzaIngredientFactory();

    if (type === 'cheese') {
      pizza = new CheesePizza(pizzaIngredientFactory);
      pizza.setName('California Style Cheese Pizza');
    }

    if (type === 'veggie') {
      pizza = new VeggiePizza(pizzaIngredientFactory);
      pizza.setName('California Style Veggie Pizza');
    }

    if (type === 'pepperoni') {
      pizza = new PepperoniPizza(pizzaIngredientFactory);
      pizza.setName('California Style Pepperoni Pizza');
    }

    if (type === 'clam') {
      pizza = new ClamPizza(pizzaIngredientFactory);
      pizza.setName('California Style Clam Pizza');
    }

    return pizza;
  }
}
