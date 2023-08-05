import BeverageWithHook from './BeverageWithHook';
import promptSync from 'prompt-sync';

class CoffeeWithHook extends BeverageWithHook {
  constructor() {
    super();
  }

  promt = promptSync();

  brew(): void {
    console.log('Dripping Coffee through filter');
  }

  addCondiments(): void {
    console.log('Adding Sugar and Milk');
  }

  customerWantsCondiments(): boolean {
    const userInput: string = this.promt(
      'Would you like milk and sugar with your coffee (y/n)? '
    );
    if (userInput.toLowerCase().startsWith('y')) {
      return true;
    }

    return false;
  }
}

export default CoffeeWithHook;
