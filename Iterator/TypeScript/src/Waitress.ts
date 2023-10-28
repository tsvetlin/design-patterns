import Menu from './menus/Menu';
import MenuItem from './menus/MenuItem';
import Iterator from './iterators/Iterator';

class Waitress {
  pancakeHouseMenu: Menu;
  dinerMenu: Menu;
  cafeMenu: Menu;

  constructor(pancakeHouseMenu: Menu, dinerMenu: Menu, cafeMenu: Menu) {
    this.pancakeHouseMenu = pancakeHouseMenu;
    this.dinerMenu = dinerMenu;
    this.cafeMenu = cafeMenu;
  }

  public printAllMenus(): void {
    const pancakeIterator: Iterator<MenuItem> =
      this.pancakeHouseMenu.createIterator();
    const dinerIterator: Iterator<MenuItem> = this.dinerMenu.createIterator();
    const cafeIterator: Iterator<MenuItem> = this.cafeMenu.createIterator();

    console.log('MENU\n----\nBREAKFAST');
    this.printMenu(pancakeIterator);
    console.log('\nLUNCH');
    this.printMenu(dinerIterator);
    console.log('\nDINER');
    this.printMenu(cafeIterator);
  }

  public printMenu(iterator: Iterator<MenuItem>) {
    while (iterator.hasNext()) {
      const menuItem: MenuItem = iterator.next();
      console.log(
        `${menuItem.getName()}, ${menuItem.getPrice()} -- ${menuItem.getDescription()}`
      );
    }
  }

  public printAllVegetarianMenus() {
    console.log('\nVEGETARIAN MENU\n---------------');
    this.printVegetarianMenu(this.pancakeHouseMenu.createIterator());
    this.printVegetarianMenu(this.dinerMenu.createIterator());
    this.printVegetarianMenu(this.cafeMenu.createIterator());
  }

  public printVegetarianMenu(iterator: Iterator<MenuItem>) {
    while (iterator.hasNext()) {
      const menuItem = iterator.next();
      if (menuItem.isVegetarian()) {
        console.log(
          `${menuItem.getName()}, ${menuItem.getPrice()} -- ${menuItem.getDescription()}`
        );
      }
    }
  }

  public isItemVegetarian(name: string): boolean {
    const pancakeIterator: Iterator<MenuItem> =
      this.pancakeHouseMenu.createIterator();
    if (this.isVegetarian(name, pancakeIterator)) {
      return true;
    }
    const dinerIterator: Iterator<MenuItem> = this.dinerMenu.createIterator();
    if (this.isVegetarian(name, dinerIterator)) {
      return true;
    }
    const cafeIterator: Iterator<MenuItem> = this.cafeMenu.createIterator();
    if (this.isVegetarian(name, cafeIterator)) {
      return true;
    }

    return false;
  }

  private isVegetarian(name: string, iterator: Iterator<MenuItem>) {
    while (iterator.hasNext()) {
      const menuItem: MenuItem = iterator.next();
      if (menuItem.getName() === name) {
        if (menuItem.isVegetarian()) {
          return true;
        }
      }
    }
    return false;
  }
}

export default Waitress;
