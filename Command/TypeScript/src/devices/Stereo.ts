export default class Stereo {
  location: string;

  constructor(location: string) {
    this.location = location;
  }

  on() {
    console.log(this.location + ' stereo is on');
  }

  off() {
    console.log(this.location + ' stereo if off');
  }

  setCD() {
    console.log(this.location + ' stereo is set for CD input');
  }

  setDVD() {
    console.log(this.location + ' stereo is set for DVD input');
  }

  setRadio() {
    console.log(this.location + ' stereo is set for Radio');
  }

  setVolume(volume: number) {
    console.log(this.location + ' Stereo volume set to ' + volume);
  }
}
