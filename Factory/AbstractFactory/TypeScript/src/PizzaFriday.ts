import ChicagoPizzaStore from './PizzaStore/ChicagoPizzaStore';
import NewYorkPizzaStore from './PizzaStore/NewYorkPizzaStore';
import CaliforniaPizzaStore from './PizzaStore/CaliforniaPizzaStore';
import PizzaStore from './PizzaStore/PizzaStore';
import Pizza from './Pizza/Pizza';

const pizzaFriday = () => {
  const newYorkPizzaStore: PizzaStore = new NewYorkPizzaStore();
  const chicagoPizzaStore: PizzaStore = new ChicagoPizzaStore();
  const californiaPizzaStore: PizzaStore = new CaliforniaPizzaStore();

  let pizza: Pizza = newYorkPizzaStore.orderPizza('cheese');
  console.log(`Ethan ordered a ${pizza}\n`);

  pizza = chicagoPizzaStore.orderPizza('clam');
  console.log(`Joel ordered a ${pizza}\n`);

  pizza = chicagoPizzaStore.orderPizza('veggie');
  console.log(`Joel ordered a ${pizza}\n`);

  pizza = californiaPizzaStore.orderPizza('pepperoni');
  console.log(`Svetlin ordered a ${pizza}\n`);
};

pizzaFriday();
