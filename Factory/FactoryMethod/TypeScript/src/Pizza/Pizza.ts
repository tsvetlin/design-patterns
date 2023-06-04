abstract class Pizza {
  name: string;
  dough: string;
  sauce: string;
  toppings: string[] = [];

  getName(): string {
    return this.name;
  }

  prepare(): void {
    console.log(`Preparing ${this.name}`);
    console.log('Tossing dough...');
    console.log('Adding sauce...');
    console.log('Adding toppings: ');
    for (const topping of this.toppings) {
      console.log(` * ${topping}`);
    }
  }

  bake(): void {
    console.log(`Bake for 25 minutes at 350 ${this.name}`);
  }

  cut(): void {
    console.log(`Cut the pizza into diagonal slices ${this.name}`);
  }

  box(): void {
    console.log(`Place the pizza in an official PizzaStore box ${this.name}`);
  }

  toString(): string {
    return `Pizza { name="${this.name}", dough="${this.dough}", sauce="${this.sauce}", toppings="${this.toppings}" }`;
  }
}

export default Pizza;
