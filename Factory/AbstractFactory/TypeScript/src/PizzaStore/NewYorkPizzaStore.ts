import Pizza from '../Pizza/Pizza';
import CheesePizza from '../Pizza/CheesePizza';
import PepperoniPizza from '../Pizza/PepperoniPizza';
import ClamPizza from '../Pizza/ClamPizza';
import VeggiePizza from '../Pizza/VeggiePizza';
import PizzaStore from './PizzaStore';
import PizzaIngredientFactory from '../IngredientFactory/PizzaIngredientFactory';
import NewYorkPizzaIngredientFactory from '../IngredientFactory/NewYorkPizzaIngredientFactory';

export default class NewYorkPizzaStore extends PizzaStore {
  protected createPizza(type: string): Pizza {
    let pizza: Pizza = null;
    const pizzaIngredientFactory: PizzaIngredientFactory =
      new NewYorkPizzaIngredientFactory();

    if (type === 'cheese') {
      pizza = new CheesePizza(pizzaIngredientFactory);
      pizza.setName('New York Style Cheese Pizza');
    }

    if (type === 'veggie') {
      pizza = new VeggiePizza(pizzaIngredientFactory);
      pizza.setName('New York Style Veggie Pizza');
    }

    if (type === 'pepperoni') {
      pizza = new PepperoniPizza(pizzaIngredientFactory);
      pizza.setName('New York Style Pepperoni Pizza');
    }

    if (type === 'clam') {
      pizza = new ClamPizza(pizzaIngredientFactory);
      pizza.setName('New York Style Clam Pizza');
    }

    return pizza;
  }
}
