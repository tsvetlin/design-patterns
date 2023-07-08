import Command from './Command';

export default class MacroCommand implements Command {
  commands: Command[];

  constructor(commands: Command[]) {
    this.commands = commands;
  }

  execute() {
    for (const command of this.commands) {
      command.execute();
    }
  }

  undo() {
    for (let i = this.commands.length - 1; i >= 0; i--) {
      this.commands[i].undo();
    }
  }
}
