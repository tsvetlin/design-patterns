import Stereo from '../devices/Stereo';
import Command from './Command';

export default class StereoOnCommand implements Command {
  stereo: Stereo;

  constructor(stereo: Stereo) {
    this.stereo = stereo;
  }

  execute() {
    this.stereo.on();
  }

  undo() {
    this.stereo.off();
  }
}
