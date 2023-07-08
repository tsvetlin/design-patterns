import RemoteControl from './RemoteControl';
import Light from './devices/Light';
import Stereo from './devices/Stereo';
import TV from './devices/TV';
import Hottub from './devices/Hottub';
import LightOnCommand from './commands/LightOnCommand';
import LightOffCommand from './commands/LightOffCommand';
import TVOnCommand from './commands/TVOnCommand';
import TVOffCommand from './commands/TVOffCommand';
import HottubOnCommand from './commands/HottubOnCommand';
import HottubOffCommand from './commands/HottubOffCommand';
import StereoOnCommand from './commands/StereoOnCommand';
import StereoOffCommand from './commands/StereoOffCommand';
import Command from './commands/Command';
import MacroCommand from './commands/MacroCommand';

const remoteLoader = () => {
  const remoteControl: RemoteControl = new RemoteControl();

  const light: Light = new Light('Living Room');
  const tv: TV = new TV('Living Room');
  const stereo: Stereo = new Stereo('Living Room');
  const hottub: Hottub = new Hottub();

  const lightOn: LightOnCommand = new LightOnCommand(light);
  const lightOff: LightOffCommand = new LightOffCommand(light);
  const tvOn: TVOnCommand = new TVOnCommand(tv);
  const tvOff: TVOffCommand = new TVOffCommand(tv);
  const hottubOn: HottubOnCommand = new HottubOnCommand(hottub);
  const hottubOff: HottubOffCommand = new HottubOffCommand(hottub);
  const stereoOn: StereoOnCommand = new StereoOnCommand(stereo);
  const stereoOff: StereoOffCommand = new StereoOffCommand(stereo);

  const partyOn: Command[] = [lightOn, stereoOn, tvOn, hottubOn];
  const partyOff: Command[] = [lightOff, stereoOff, tvOff, hottubOff];

  const partyOnMacro: MacroCommand = new MacroCommand(partyOn);
  const partyOffMacro: MacroCommand = new MacroCommand(partyOff);

  remoteControl.setCommand(0, partyOnMacro, partyOffMacro);

  console.log(remoteControl.toString());
  console.log('--- Pushing Macro On ---');
  remoteControl.onButtonWasPushed(0);
  console.log('--- Pushing Macro Off ---');
  remoteControl.offButtonWasPushed(0);
};

remoteLoader();
