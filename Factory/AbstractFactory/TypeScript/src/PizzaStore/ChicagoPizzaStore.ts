import Pizza from '../Pizza/Pizza';
import CheesePizza from '../Pizza/CheesePizza';
import PepperoniPizza from '../Pizza/PepperoniPizza';
import ClamPizza from '../Pizza/ClamPizza';
import VeggiePizza from '../Pizza/VeggiePizza';
import PizzaStore from './PizzaStore';
import PizzaIngredientFactory from '../IngredientFactory/PizzaIngredientFactory';
import ChicagoPizzaIngredientFactory from '../IngredientFactory/ChicagoPizzaIngredientFactory';

export default class ChicagoPizzaStore extends PizzaStore {
  protected createPizza(type: string): Pizza {
    let pizza: Pizza = null;
    const pizzaIngredientFactory: PizzaIngredientFactory =
      new ChicagoPizzaIngredientFactory();

    if (type === 'cheese') {
      pizza = new CheesePizza(pizzaIngredientFactory);
      pizza.setName('Chicago Style Cheese Pizza');
    }

    if (type === 'veggie') {
      pizza = new VeggiePizza(pizzaIngredientFactory);
      pizza.setName('Chicago Style Veggie Pizza');
    }

    if (type === 'pepperoni') {
      pizza = new PepperoniPizza(pizzaIngredientFactory);
      pizza.setName('Chicago Style Pepperoni Pizza');
    }

    if (type === 'clam') {
      pizza = new ClamPizza(pizzaIngredientFactory);
      pizza.setName('Chicago Style Clam Pizza');
    }

    return pizza;
  }
}
