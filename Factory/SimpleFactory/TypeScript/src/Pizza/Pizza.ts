abstract class Pizza {
  name: string;
  dough: string;
  sauce: string;
  toppings: string[] = [];

  getName(): string {
    return this.name;
  }

  prepare() {
    console.log('Preparing ', this.name);
  }

  bake() {
    console.log('Baking ' + this.name);
  }

  cut() {
    console.log('Cutting ' + this.name);
  }

  box() {
    console.log('Boxing ' + this.name);
  }

  toString() {
    return `Pizza { name='${this.name}', dough='${this.dough}', sauce='${this.sauce}', toppings=${this.toppings} }`;
  }
}

export default Pizza;
