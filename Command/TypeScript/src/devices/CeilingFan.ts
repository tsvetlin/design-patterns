export default class CeilingFan {
  HIGH = 3;
  MEDIUM = 2;
  LOW = 1;
  OFF = 0;
  location: string;
  speed: number;

  constructor(location: string) {
    this.location = location;
  }

  high() {
    this.speed = this.HIGH;
    console.log(this.location + ' ceiling fan is on high');
  }

  medium() {
    this.speed = this.MEDIUM;
    console.log(this.location + ' ceiling fan is on medium');
  }

  low() {
    this.speed = this.LOW;
    console.log(this.location + ' ceiling fan is on low');
  }

  off() {
    this.speed = this.OFF;
    console.log(this.location + ' ceiling fan is on off');
  }

  getSpeed() {
    return this.speed;
  }
}
