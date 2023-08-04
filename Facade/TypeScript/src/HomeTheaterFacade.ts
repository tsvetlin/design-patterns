import Amplifier from './devices/Amplifier';
import CdPlayer from './devices/CdPlayer';
import PopcornPopper from './devices/PopcornPopper';
import Projector from './devices/Projector';
import StreamingPlayer from './devices/StreamingPlayer';
import TheaterLights from './devices/TheaterLight';
import Tuner from './devices/Tuner';
import Screen from './devices/Screen';

class HomeTheaterFacade {
  amp: Amplifier;
  tuner: Tuner;
  player: StreamingPlayer;
  cd: CdPlayer;
  projector: Projector;
  lights: TheaterLights;
  screen: Screen;
  popper: PopcornPopper;

  constructor(
    amp: Amplifier,
    tuner: Tuner,
    player: StreamingPlayer,
    cd: CdPlayer,
    projector: Projector,
    screen: Screen,
    lights: TheaterLights,
    popper: PopcornPopper
  ) {
    this.amp = amp;
    this.tuner = tuner;
    this.player = player;
    this.cd = cd;
    this.projector = projector;
    this.screen = screen;
    this.lights = lights;
    this.popper = popper;
  }

  watchMovie(movie: string): void {
    console.log('Get ready to watch a movie...');
    this.popper.on();
    this.popper.pop();
    this.lights.dim(10);
    this.screen.down();
    this.projector.on();
    this.projector.wideScreenMode();
    this.amp.on();
    this.amp.setStreamingPlayer(this.player);
    this.amp.setSurroundSound();
    this.amp.setVolume(5);
    this.player.on();
    this.player.play(movie);
  }

  endMovie(): void {
    console.log('Shitting theater down...');
    this.popper.off();
    this.lights.on();
    this.screen.up();
    this.projector.off();
    this.amp.off();
    this.player.stop();
    this.player.off();
  }

  listenToRadio(frequency: number): void {
    console.log('Tuning in the airwawes...');
    this.tuner.on();
    this.tuner.setFrequency(frequency);
    this.amp.on();
    this.amp.setVolume(5);
    this.amp.setTuner(this.tuner);
  }

  endRadio(): void {
    console.log('Shutting down the tuner...');
    this.tuner.off();
    this.amp.off();
  }
}

export default HomeTheaterFacade;
