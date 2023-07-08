import Hottub from '../devices/Hottub';
import Command from './Command';

export default class HottubOffCommand implements Command {
  hottub: Hottub;

  constructor(hottub: Hottub) {
    this.hottub = hottub;
  }

  execute() {
    this.hottub.setTemperature(36);
    this.hottub.off();
  }

  undo() {
    this.hottub.on();
  }
}
