import DinerMenu from './menus/DinerMenu';
import PancakeHouseMenu from './menus/PancakeHouseMenu';
import CafeMenu from './menus/CafeMenu';
import Waitress from './Waitress';

const main = () => {
  const pancakeHouseMenu: PancakeHouseMenu = new PancakeHouseMenu();
  const dinerMenu: DinerMenu = new DinerMenu();
  const cafeMenu: CafeMenu = new CafeMenu();

  const waitress: Waitress = new Waitress(
    pancakeHouseMenu,
    dinerMenu,
    cafeMenu
  );

  waitress.printAllMenus();
  waitress.printAllVegetarianMenus();

  console.log('\nCustomer asks, is the Hotdog vegetarian?');
  console.log(
    `Waitress says: ${waitress.isItemVegetarian('Hotdog') ? 'Yes' : 'No'}`
  );
  console.log('\nCustomer asks, are the Waffles vegetarian?');
  console.log(
    `Waitress says: ${waitress.isItemVegetarian('Waffles') ? 'Yes' : 'No'}`
  );
};

main();
