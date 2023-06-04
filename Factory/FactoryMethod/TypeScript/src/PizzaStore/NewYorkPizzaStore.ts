import NewYorkStyleCheesePizza from '../Pizza/NewYorkStyle/NewYorkStyleCheesePizza';
import NewYorkStyleClamPizza from '../Pizza/NewYorkStyle/NewYorkStyleClamPizza';
import NewYorkStylePepperoniPizza from '../Pizza/NewYorkStyle/NewYorkStylePepperoniPizza';
import NewYorkStyleVeggiePizza from '../Pizza/NewYorkStyle/NewYorkStyleVeggiePizza';
import Pizza from '../Pizza/Pizza';
import PizzaStore from './PizzaStore';

class NewYorkPizzaStore extends PizzaStore {
  createPizza(type: string): Pizza {
    if (type === 'cheese') {
      return new NewYorkStyleCheesePizza();
    }

    if (type === 'veggie') {
      return new NewYorkStyleVeggiePizza();
    }

    if (type === 'clam') {
      return new NewYorkStyleClamPizza();
    }

    if (type === 'pepperoni') {
      return new NewYorkStylePepperoniPizza();
    }

    return null;
  }
}

export default NewYorkPizzaStore;
