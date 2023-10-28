import Iterator from '../iterators/Iterator';
import Menu from './Menu';
import MenuItem from './MenuItem';
import ArrayIterator from '../iterators/ArrayIterator';

class PancakeHouseMenu implements Menu {
  menuItems: MenuItem[];

  constructor() {
    this.menuItems = [];

    this.addItem(
      "K&B's Pancake Breakfast",
      'Pancakes with scrambled eggs and toast',
      true,
      2.99
    );

    this.addItem(
      'Regular Pancake Breakfast',
      'Pancakes with fried eggs, sausage',
      false,
      2.99
    );

    this.addItem(
      'Blueberry Pancakes',
      'Pancakes made with fresh blueberries and blueberry syrup',
      true,
      3.49
    );

    this.addItem(
      'Waffles',
      'Waffles with your choice of blueberries or strawberries',
      true,
      3.59
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
    this.menuItems.push(menuItem);
  }

  public getMenuItems(): MenuItem[] {
    return this.menuItems;
  }

  public createIterator(): Iterator<MenuItem> {
    return new ArrayIterator(this.menuItems);
  }
}

export default PancakeHouseMenu;
