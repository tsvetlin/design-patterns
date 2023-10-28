import Iterator from '../iterators/Iterator';
import Menu from './Menu';
import MenuItem from './MenuItem';
import ArrayIterator from '../iterators/ArrayIterator';

class DinerMenu implements Menu {
  MAX_ITEMS: number = 6;
  numberOfItems: number = 0;
  menuItems: MenuItem[];

  constructor() {
    this.menuItems = Array(6);

    this.addItem(
      'Vegetarian BLT',
      "(Fakin') Bacon with lettuce & tomato on whole wheat",
      true,
      2.99
    );
    this.addItem(
      'BLT',
      'Bacon with lettuce & tomato on whole wheat',
      false,
      2.99
    );
    this.addItem(
      'Soup of the day',
      'Soup of the day, with a side of potato salad',
      false,
      3.29
    );
    this.addItem(
      'Hotdog',
      'A hot dog, with sauerkraut, relish, onions, topped with cheese',
      false,
      3.05
    );
    this.addItem(
      'Steamed Veggies and Brown Rice',
      'A medly of steamed vegetables over brown rice',
      true,
      3.99
    );
    this.addItem(
      'Pasta',
      'Spaghetti with Marinara Sauce, and a slice of sourdough bread',
      true,
      3.89
    );
  }

  addItem(
    name: string,
    description: string,
    vegetarian: boolean,
    price: number
  ): void {
    const menuItem: MenuItem = new MenuItem(
      name,
      description,
      vegetarian,
      price
    );
    if (this.numberOfItems >= this.MAX_ITEMS) {
      console.error("Sorry, menu is full!  Can't add item to menu");
    } else {
      this.menuItems[this.numberOfItems] = menuItem;
      this.numberOfItems = this.numberOfItems + 1;
    }
  }

  public getMenuItems(): MenuItem[] {
    return this.menuItems;
  }

  public createIterator(): Iterator<MenuItem> {
    return new ArrayIterator(this.menuItems);
  }
}

export default DinerMenu;
