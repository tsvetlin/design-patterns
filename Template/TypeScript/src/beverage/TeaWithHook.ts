import BeverageWithHook from './BeverageWithHook';
import promptSync from 'prompt-sync';

class TeaWithHook extends BeverageWithHook {
  constructor() {
    super();
  }

  promt = promptSync();

  brew(): void {
    console.log('Steeping the tea');
  }

  addCondiments(): void {
    console.log('Adding Lemon');
  }

  customerWantsCondiments(): boolean {
    const userInput: string = this.promt(
      'Would you like lemon with your tea (y/n)? '
    );
    if (userInput.toLowerCase().startsWith('y')) {
      return true;
    }

    return false;
  }
}

export default TeaWithHook;
