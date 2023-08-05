abstract class Beverage {
  prepareRecipe(): void {
    this.boilWater();
    this.brew();
    this.pourInCup();
    this.addCondiments();
  }

  abstract brew(): void;
  abstract addCondiments(): void;

  private boilWater(): void {
    console.log('Boiling water');
  }

  private pourInCup(): void {
    console.log('Pouring into cup');
  }
}

export default Beverage;
