import CeilingFan from '../devices/CeilingFan';
import Command from './Command';

export default class CeilingFanHighCommand implements Command {
  ceilingFan: CeilingFan;
  prevSpeed: number;

  constructor(ceilingFan: CeilingFan) {
    this.ceilingFan = ceilingFan;
  }

  execute() {
    this.prevSpeed = this.ceilingFan.getSpeed();
    this.ceilingFan.high();
  }
  undo() {
    switch (this.prevSpeed) {
      case this.ceilingFan.HIGH:
        this.ceilingFan.high();
        break;
      case this.ceilingFan.MEDIUM:
        this.ceilingFan.medium();
        break;
      case this.ceilingFan.LOW:
        this.ceilingFan.low();
        break;
      default:
        this.ceilingFan.off();
        break;
    }
  }
}
