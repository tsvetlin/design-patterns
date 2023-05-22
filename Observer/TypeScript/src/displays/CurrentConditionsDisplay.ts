import { Observer } from '../interfaces/Observer';
import { DisplayElement } from '../interfaces/DisplayElement';
import WeatherData from '../data/WeatherData';

class CurrentConditionsDisplay implements Observer, DisplayElement {
  private temperature: number;
  private humidity: number;
  private weatherData: WeatherData;

  constructor(weatherData: WeatherData) {
    this.weatherData = weatherData;
    weatherData.registerObserver(this);
  }

  display() {
    console.log(
      'Current conditions: ' +
        this.temperature +
        'F degrees and ' +
        this.humidity +
        '% humidity'
    );
  }

  update() {
    this.temperature = this.weatherData.getTemperature();
    this.humidity = this.weatherData.getHumidity();
    this.display();
  }
}

export default CurrentConditionsDisplay;
