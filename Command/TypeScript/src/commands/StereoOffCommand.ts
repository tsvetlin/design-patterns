import Stereo from '../devices/Stereo';
import Command from './Command';

export default class StereoOffCommand implements Command {
  stereo: Stereo;

  constructor(stereo: Stereo) {
    this.stereo = stereo;
  }

  execute() {
    this.stereo.off();
  }

  undo() {
    this.stereo.on();
  }
}
