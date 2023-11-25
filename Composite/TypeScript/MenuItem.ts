import MenuComponent from './MenuComponent';

class MenuItem extends MenuComponent {
  name: string;
  description: string;
  vegetarian: boolean;
  price: number;

  constructor(
    name: string,
    description: string,
    vegetarian: boolean,
    price: number
  ) {
    super();
    this.name = name;
    this.description = description;
    this.vegetarian = vegetarian;
    this.price = price;
  }
  getName() {
    return this.name;
  }
  getDescription() {
    return this.description;
  }

  getPrice(): number {
    return this.price;
  }

  isVegetarian(): boolean {
    return this.vegetarian;
  }

  print() {
    console.log(
      ` ${this.getName()} ${
        this.isVegetarian() ? '(v)' : ''
      }, ${this.getPrice()}\n     -- ${this.getDescription()}`
    );
  }
}

export default MenuItem;
