import SimplePizzaFactory from './SimplePizzaFactory';
import Pizza from './Pizza/Pizza';

class PizzaStore {
  factory: SimplePizzaFactory;

  constructor(factory: SimplePizzaFactory) {
    this.factory = factory;
  }

  orderPizza(type: string): Pizza {
    let pizza: Pizza;
    pizza = this.factory.createPizza(type);
    pizza.prepare();
    pizza.bake();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }
}

export default PizzaStore;
