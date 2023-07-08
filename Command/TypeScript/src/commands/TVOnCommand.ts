import TV from '../devices/TV';
import Command from './Command';

export default class TVOnCommand implements Command {
  tv: TV;

  constructor(tv: TV) {
    this.tv = tv;
  }

  execute() {
    this.tv.on();
  }

  undo() {
    this.tv.off();
  }
}
