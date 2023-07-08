export default class Hottub {
  isOn: boolean;
  temperature: number;

  constructor() {}

  on() {
    this.isOn = true;
  }

  off() {
    this.isOn = false;
  }

  circulate() {
    if (this.on) {
      console.log('Hottub is bubbling!');
    }
  }

  jetsOn() {
    if (this.on) {
      console.log('Hottub jets are non');
    }
  }

  jetsOff() {
    if (this.on) {
      console.log('Hottub jets are off');
    }
  }

  setTemperature(temperature: number) {
    if (temperature > this.temperature) {
      console.log(`Hottub is heating to a steaming ${temperature} degrees`);
    } else {
      console.log(`Hottub is cooling to a ${temperature} degrees`);
    }
  }
}
