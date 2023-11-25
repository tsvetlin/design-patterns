abstract class MenuComponent {
  add(menuComponent: MenuComponent): void {
    throw new Error('Method not implemented.');
  }

  remove(menuComponent: MenuComponent): void {
    throw new Error('Method not implemented.');
  }

  getChild(i: number): MenuComponent {
    throw new Error('Method not implemented.');
  }

  getName(): string {
    throw new Error('Method not implemented.');
  }

  getDescription(): string {
    throw new Error('Method not implemented.');
  }

  getPrice(): number {
    throw new Error('Method not implemented.');
  }

  isVegetarian(): boolean {
    throw new Error('Method not implemented.');
  }

  print(): void {
    throw new Error('Method not implemented.');
  }
}

export default MenuComponent;
