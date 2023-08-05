abstract class BeverageWithHook {
  prepareRecipe(): void {
    this.boilWater();
    this.brew();
    this.pourInCup();
    if (this.customerWantsCondiments()) {
      this.addCondiments();
    }
  }

  abstract brew(): void;
  abstract addCondiments(): void;

  private boilWater(): void {
    console.log('Boiling water');
  }

  private pourInCup(): void {
    console.log('Pouring into cup');
  }

  customerWantsCondiments(): boolean {
    return true;
  }
}

export default BeverageWithHook;
