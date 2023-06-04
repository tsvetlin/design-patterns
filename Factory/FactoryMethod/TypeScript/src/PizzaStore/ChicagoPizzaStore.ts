import Pizza from '../Pizza/Pizza';
import PizzaStore from './PizzaStore';
import ChicagoStyleCheesePizza from '../Pizza/ChicagoStyle/ChicagoStyleCheesePizza';
import ChicagoStyleClamPizza from '../Pizza/ChicagoStyle/ChicagoStyleClamPizza';
import ChicagoStylePepperoniPizza from '../Pizza/ChicagoStyle/ChicagoStylePepperoniPizza';
import ChicagoStyleVeggiePizza from '../Pizza/ChicagoStyle/ChicagoStyleVeggiePizza';

class ChicagoPizzaStore extends PizzaStore {
  createPizza(type: string): Pizza {
    if (type === 'cheese') {
      return new ChicagoStyleCheesePizza();
    }

    if (type === 'veggie') {
      return new ChicagoStyleVeggiePizza();
    }

    if (type === 'clam') {
      return new ChicagoStyleClamPizza();
    }

    if (type === 'pepperoni') {
      return new ChicagoStylePepperoniPizza();
    }

    return null;
  }
}

export default ChicagoPizzaStore;
