import Dough from '../Ingredients/Dough';
import Sauce from '../Ingredients/Sauce';
import Veggies from '../Ingredients/Veggies';
import Cheese from '../Ingredients/Cheese';
import Pepperoni from '../Ingredients/Pepperoni';
import Clams from '../Ingredients/Clams';

export default abstract class Pizza {
  name: string;

  dough: Dough;
  sauce: Sauce;
  veggies: Veggies[];
  cheese: Cheese;
  pepperoni: Pepperoni;
  clams: Clams;

  abstract prepare(): void;

  bake(): void {
    console.log('Bake for 25 minutes at 350');
  }

  cut(): void {
    console.log('Cutting the pizza into diagonal slices');
  }

  box(): void {
    console.log('Placing the pizza into an official PizzaStore box');
  }

  setName(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  toString(): string {
    return `${this.name}\n${this.dough ? `${this.dough}\n` : ''}${
      this.sauce ? `${this.sauce}\n` : ''
    }${this.cheese ? `${this.cheese}\n` : ''}${
      this.veggies ? `${this.veggies}\n` : ''
    }${this.clams ? `${this.clams}\n` : ''}${
      this.pepperoni ? `${this.pepperoni}\n` : ''
    }`;
  }
}
