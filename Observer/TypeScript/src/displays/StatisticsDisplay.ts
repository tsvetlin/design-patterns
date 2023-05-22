import { Observer } from '../interfaces/Observer';
import { DisplayElement } from '../interfaces/DisplayElement';
import WeatherData from '../data/WeatherData';

class StatisticsDisplay implements Observer, DisplayElement {
  private maxTemp = 0.0;
  private minTemp = 200;
  private tempSum = 0.0;
  private numReadings: number = 0;
  private weatherData: WeatherData;

  constructor(weatherData: WeatherData) {
    this.weatherData = weatherData;
    weatherData.registerObserver(this);
  }
  display = () =>
    console.log(
      'Avg/Max/Min temperature = ' +
        this.tempSum / this.numReadings +
        '/' +
        this.maxTemp +
        '/' +
        this.minTemp
    );
  update() {
    const temp = this.weatherData.getTemperature();
    this.tempSum += temp;
    this.numReadings++;

    if (temp > this.maxTemp) {
      this.maxTemp = temp;
    }

    if (temp < this.minTemp) {
      this.minTemp = temp;
    }

    this.display();
  }
}

export default StatisticsDisplay;
