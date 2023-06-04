import Pizza from './Pizza/Pizza';
import NewYorkPizzaStore from './PizzaStore/NewYorkPizzaStore';
import ChicagoPizzaStore from './PizzaStore/ChicagoPizzaStore';

const pizzaFriday = () => {
  const newYorkPizzaStore = new NewYorkPizzaStore();
  const chicagoPizzaStore = new ChicagoPizzaStore();

  let pizza: Pizza = newYorkPizzaStore.orderPizza('cheese');
  console.log(`Ethan ordered a ${pizza.getName()}\n`);

  pizza = chicagoPizzaStore.orderPizza('pepperoni');
  console.log(`Joel ordered a ${pizza.getName()}\n`);

  console.log(pizza.toString());
};

pizzaFriday();
