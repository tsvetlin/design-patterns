import Light from '../devices/Light';
import Command from './Command';

export default class LightOnCommand implements Command {
  light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute() {
    this.light.on();
  }

  undo() {
    this.light.off();
  }
}
