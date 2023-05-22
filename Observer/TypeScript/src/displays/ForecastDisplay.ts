import { Observer } from '../interfaces/Observer';
import { DisplayElement } from '../interfaces/DisplayElement';
import WeatherData from '../data/WeatherData';

class ForecastDisplay implements Observer, DisplayElement {
  private weatherData: WeatherData;
  private currentPressure = 29.92;
  private lastPressure: number;

  constructor(weatherData: WeatherData) {
    this.weatherData = weatherData;
    weatherData.registerObserver(this);
  }
  display() {
    console.log('Forecast: ');
    if (this.currentPressure > this.lastPressure) {
      console.log('Improving weather on the way!');
    } else if (this.currentPressure === this.lastPressure) {
      console.log('More of the same');
    } else if (this.currentPressure < this.lastPressure) {
      console.log('Watch out for cooler, rainy weather');
    }
  }
  update() {
    this.lastPressure = this.currentPressure;
    this.currentPressure = this.weatherData.getPressure();
    this.display();
  }
}

export default ForecastDisplay;
