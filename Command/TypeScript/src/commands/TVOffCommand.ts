import TV from '../devices/TV';
import Command from './Command';

export default class TVOffCommand implements Command {
  tv: TV;

  constructor(tv: TV) {
    this.tv = tv;
  }

  execute() {
    this.tv.off();
  }

  undo() {
    this.tv.on();
  }
}
