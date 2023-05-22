import { Observer } from '../interfaces/Observer';
import { Subject } from '../interfaces/Subject';

class WeatherData implements Subject {
  private observers: Observer[];

  private temperature: number;
  private humidity: number;
  private pressure: number;

  constructor() {
    this.observers = [];
  }
  registerObserver(observer: Observer) {
    this.observers.push(observer);
  }
  removeObserver(observer: Observer) {
    this.observers.splice(this.observers.indexOf(observer, 0), 1);
  }
  notifyObservers() {
    for (const observer of this.observers) {
      observer.update();
    }
  }

  measurementsChanged() {
    this.notifyObservers();
  }

  setMeasurements(temperature: number, humidity: number, pressure: number) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurementsChanged();
  }

  getTemperature = () => this.temperature;

  getHumidity = () => this.humidity;

  getPressure = () => this.pressure;
}

export default WeatherData;
