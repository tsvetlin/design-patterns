package Commands;

import Devices.Hottub;

public class HottubOnCommand implements Command {
    Hottub hottub;

    public HottubOnCommand(Hottub hottub) {
        this.hottub = hottub;
    }
    public void execute() {
        hottub.on();
        hottub.setTemperature(40);
        hottub.circulate();
    }
    public void undo() {
        hottub.off();
    }
}
