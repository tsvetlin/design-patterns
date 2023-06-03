import CheesePizza from './Pizza/CheesePizza';
import ClamPizza from './Pizza/ClamPizza';
import PepperoniPizza from './Pizza/PepperoniPizza';
import Pizza from './Pizza/Pizza';
import VeggiePizza from './Pizza/VeggiePizza';

class SimplePizzaFactory {
  createPizza(type: string): Pizza {
    let pizza: Pizza;

    if (type === 'cheese') {
      pizza = new CheesePizza();
    }

    if (type === 'veggie') {
      pizza = new VeggiePizza();
    }

    if (type === 'clam') {
      pizza = new ClamPizza();
    }

    if (type === 'pepperoni') {
      pizza = new PepperoniPizza();
    }

    return pizza;
  }
}

export default SimplePizzaFactory;
