import Pizza from '../Pizza/Pizza';

export default abstract class PizzaStore {
  protected abstract createPizza(type: string): Pizza;

  orderPizza(type: string): Pizza {
    const pizza = this.createPizza(type);
    console.log(`Making a ${pizza.getName()}`);
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }
}
