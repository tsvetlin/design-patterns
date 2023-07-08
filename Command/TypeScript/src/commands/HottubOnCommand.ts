import Hottub from '../devices/Hottub';
import Command from './Command';

export default class HottubOnCommand implements Command {
  hottub: Hottub;

  constructor(hottub: Hottub) {
    this.hottub = hottub;
  }

  execute() {
    this.hottub.setTemperature(40);
    this.hottub.on();
  }

  undo() {
    this.hottub.off();
  }
}
