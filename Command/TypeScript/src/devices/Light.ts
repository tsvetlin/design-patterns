export default class Light {
  location: string;
  level: number;

  constructor(location: string) {
    this.location = location;
  }

  on() {
    this.level = 100;
    console.log('Light is on');
  }

  off() {
    this.level = 0;
    console.log('Light is off');
  }

  dim(level: number) {
    this.level = level;
    if (level === 0) {
      this.off();
    } else {
      console.log(`Light is dimmed to ${level}%`);
    }
  }

  getLevel(): number {
    return this.level;
  }
}
