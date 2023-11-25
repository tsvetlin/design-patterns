import MenuComponent from './MenuComponent';

class Menu extends MenuComponent {
  menuComponents: MenuComponent[] = [];
  name: string;
  description: string;

  constructor(name: string, description: string) {
    super();
    this.name = name;
    this.description = description;
  }

  add(menuComponent: MenuComponent) {
    this.menuComponents.push(menuComponent);
  }

  remove(menuComponent: MenuComponent) {
    this.menuComponents = this.menuComponents.filter(
      (component) => component.getName() !== menuComponent.getName()
    );
  }

  getChild(i: number): MenuComponent {
    return this.menuComponents[i];
  }

  getName(): string {
    return this.name;
  }

  getDescription(): string {
    return this.description;
  }

  print(): void {
    console.log(`\n${this.getName()}, ${this.getDescription()}`);
    console.log('---------------------');

    for (const menuComponent of this.menuComponents) {
      menuComponent.print();
    }
  }
}

export default Menu;
