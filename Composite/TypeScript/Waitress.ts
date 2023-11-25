import MenuComponent from './MenuComponent';

class Waitress {
  allMenus: MenuComponent;

  constructor(allMenus: MenuComponent) {
    this.allMenus = allMenus;
  }

  printMenu(): void {
    this.allMenus.print();
  }
}

export default Waitress;
