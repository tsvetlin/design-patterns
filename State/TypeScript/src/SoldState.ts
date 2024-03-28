import GumballMachine from './GumballMachine';
import { State } from './State';

class SoldState implements State {
  gumballMachine: GumballMachine;

  constructor(gumballMachine: GumballMachine) {
    this.gumballMachine = gumballMachine;
  }

  insertQuarter(): void {
    console.log("Please wait, we're already giving you a gumball");
  }

  ejectQuarter(): void {
    console.log('Sorry, you already turned the crank');
  }

  turnCrank(): void {
    console.log("Turning twice doesn't get you another gumball!");
  }

  dispense(): void {
    this.gumballMachine.releaseBall();
    if (this.gumballMachine.getCount() > 0) {
      this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
    } else {
      console.log('Oops, out of gumballs!');
      this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
    }
  }

  refill() {}

  toString() {
    return 'dispense a gumball';
  }
}

export default SoldState;
