import HasQuarterState from './HasQuarterState';
import NoQuarterState from './NoQuarterState';
import SoldOutState from './SoldOutState';
import SoldState from './SoldState';
import WinnerState from './WinnerState';
import { State } from './State';

class GumballMachine {
  soldOutState: SoldOutState;
  noQuarterState: NoQuarterState;
  hasQuarterState: HasQuarterState;
  soldState: SoldState;
  winnerState: WinnerState;

  state: State;
  count = 0;

  constructor(numberGumballs: number) {
    this.soldOutState = new SoldOutState(this);
    this.noQuarterState = new NoQuarterState(this);
    this.hasQuarterState = new HasQuarterState(this);
    this.soldState = new SoldState(this);
    this.winnerState = new WinnerState(this);

    this.count = numberGumballs;
    if (numberGumballs > 0) {
      this.state = this.noQuarterState;
    } else {
      this.state = this.soldOutState;
    }
  }

  insertQuarter() {
    this.state.insertQuarter();
  }

  ejectQuarter() {
    this.state.ejectQuarter();
  }

  turnCrank() {
    this.state.turnCrank();
    this.state.dispense();
  }

  setState(state: State): void {
    this.state = state;
  }

  releaseBall(): void {
    console.log('A gumball comes rolling out the slot...');
    if (this.count > 0) {
      this.count -= 1;
    }
  }

  getCount(): number {
    return this.count;
  }

  refill(count: number): void {
    this.count += count;
    console.log(
      'The gumball machine was just refilled; its new count is: ' + this.count
    );
    this.state.refill();
  }

  getState() {
    return this.state;
  }

  getSoldOutState(): State {
    return this.soldOutState;
  }

  getNoQuarterState() {
    return this.noQuarterState;
  }

  getHasQuarterState() {
    return this.hasQuarterState;
  }

  getSoldState() {
    return this.soldState;
  }

  getWinnerState() {
    return this.winnerState;
  }

  toString(): string {
    return `\nMighty Gumball, Inc.\nTypeScript-enabled Standing Gumball Model #2005\nInventory: ${
      this.count
    } gumball${this.count !== 1 ? 's' : ''}\nMachine is ${this.state}\n`;
  }
}

export default GumballMachine;
