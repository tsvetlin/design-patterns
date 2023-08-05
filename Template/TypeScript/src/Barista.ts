import Tea from './beverage/Tea';
import Coffee from './beverage/Coffee';
import TeaWithHook from './beverage/TeaWithHook';
import CoffeeWithHook from './beverage/CoffeeWithHook';

const main = () => {
  const tea: Tea = new Tea();
  const coffee: Coffee = new Coffee();

  console.log('\nMaking tea...');
  tea.prepareRecipe();

  console.log('\nMaking coffee...');
  coffee.prepareRecipe();

  const teaHook: TeaWithHook = new TeaWithHook();
  const coffeeHook: CoffeeWithHook = new CoffeeWithHook();

  console.log('\nMaking tea...');
  teaHook.prepareRecipe();
  console.log('\nMaking coffee...');
  coffeeHook.prepareRecipe();
};

main();
