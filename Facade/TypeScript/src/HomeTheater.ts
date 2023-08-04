import Amplifier from './devices/Amplifier';
import Tuner from './devices/Tuner';
import StreamingPlayer from './devices/StreamingPlayer';
import CdPlayer from './devices/CdPlayer';
import Projector from './devices/Projector';
import TheaterLights from './devices/TheaterLight';
import Screen from './devices/Screen';
import PopcornPopper from './devices/PopcornPopper';
import HomeTheaterFacade from './HomeTheaterFacade';

const main = () => {
  const amp: Amplifier = new Amplifier('Amplifier');
  const tuner: Tuner = new Tuner('AM/FM Tuner', amp);
  const player: StreamingPlayer = new StreamingPlayer('Streaming Player', amp);
  const cd: CdPlayer = new CdPlayer('CD Player', amp);
  const projector: Projector = new Projector('Projector', player);
  const lights: TheaterLights = new TheaterLights('Theater Ceiling Lights');
  const screen: Screen = new Screen('Theater Screen');
  const popper: PopcornPopper = new PopcornPopper('Popcorn Popper');

  const homeTheater: HomeTheaterFacade = new HomeTheaterFacade(
    amp,
    tuner,
    player,
    cd,
    projector,
    screen,
    lights,
    popper
  );

  homeTheater.watchMovie('Raiders of the Lost Ark');
  homeTheater.endMovie();
};

main();
