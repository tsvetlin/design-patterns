import WeatherData from './data/WeatherData';
import CurrentConditionsDisplay from './displays/CurrentConditionsDisplay';

const main = () => {
  const weatherData = new WeatherData();

  const currentConditionsDisplay = new CurrentConditionsDisplay(weatherData);

  weatherData.setMeasurements(80, 65, 30.4);
  weatherData.setMeasurements(82, 70, 29.2);
  weatherData.setMeasurements(78, 90, 29.2);
};

main();
