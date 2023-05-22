import WeatherData from './data/WeatherData';
import CurrentConditionsDisplay from './displays/CurrentConditionsDisplay';
import StatisticsDisplay from './displays/StatisticsDisplay';
import ForecastDisplay from './displays/ForecastDisplay';
import HeatIndexDisplay from './displays/HeatIndexDisplay';

const main = () => {
  const weatherData = new WeatherData();

  const currentConditionsDisplay = new CurrentConditionsDisplay(weatherData);
  const statisticsDisplay = new StatisticsDisplay(weatherData);
  const forecastDisplay = new ForecastDisplay(weatherData);
  const heatIndexDisplay = new HeatIndexDisplay(weatherData);

  weatherData.setMeasurements(80, 65, 30.4);
  weatherData.setMeasurements(82, 70, 29.2);
  weatherData.setMeasurements(78, 90, 29.2);
};

main();
