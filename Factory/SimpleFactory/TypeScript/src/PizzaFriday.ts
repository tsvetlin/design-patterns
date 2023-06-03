import SimplePizzaFactory from './SimplePizzaFactory';
import PizzaStore from './PizzaStore';

const pizzaFriday = () => {
  const factory = new SimplePizzaFactory();
  const store = new PizzaStore(factory);

  let pizza = store.orderPizza('cheese');
  console.log(pizza.toString());

  pizza = store.orderPizza('pepperoni');
  console.log(pizza.toString());
};

pizzaFriday();
