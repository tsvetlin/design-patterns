abstract class Beverage {
  description: string = 'Unknown Beverage';

  getDescription() {
    return this.description;
  }

  abstract cost(): number;
}

export default Beverage;
