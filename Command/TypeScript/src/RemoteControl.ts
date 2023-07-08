import Command from './commands/Command';
import NoCommand from './commands/NoCommand';

export default class RemoteControl {
  onCommands: Command[];
  offCommands: Command[];
  undoCommand: Command;

  constructor() {
    const noCommand: Command = new NoCommand();
    this.offCommands = Array(7).fill(noCommand);
    this.onCommands = Array(7).fill(noCommand);
    this.undoCommand = noCommand;
  }

  setCommand(slot: number, onCommand: Command, offCommand: Command) {
    this.onCommands[slot] = onCommand;
    this.offCommands[slot] = offCommand;
  }

  onButtonWasPushed(slot: number) {
    this.onCommands[slot].execute();
  }

  offButtonWasPushed(slot: number) {
    this.offCommands[slot].execute();
  }

  undoButtonWasPushed() {
    this.undoCommand.undo();
  }

  toString() {
    let string = '\n------ Remote Control -------\n';
    for (let i = 0; i < this.onCommands.length; i++) {
      string = string.concat(
        `[slot ${i}] ${this.onCommands[i].constructor.name}    ${this.offCommands[i].constructor.name}\n`
      );
    }
    string = string.concat(`[undo ] ${this.undoCommand.constructor.name}`);
    return string;
  }
}
