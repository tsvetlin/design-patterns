package eu.svetlin.design.patterns.observer;

import eu.svetlin.design.patterns.observer.data.WeatherData;
import eu.svetlin.design.patterns.observer.displays.CurrentConditionsDisplay;
import eu.svetlin.design.patterns.observer.displays.ForecastDisplay;
import eu.svetlin.design.patterns.observer.displays.HeatIndexDisplay;
import eu.svetlin.design.patterns.observer.displays.StatisticsDisplay;

public class WeatherStation {

    public static void main(String[] args){
        WeatherData weatherData = new WeatherData();

        CurrentConditionsDisplay currentConditionsDisplay = new CurrentConditionsDisplay(weatherData);
        StatisticsDisplay statisticsDisplay = new StatisticsDisplay(weatherData);
        ForecastDisplay forecastDisplay = new ForecastDisplay(weatherData);
        HeatIndexDisplay heatIndexDisplay = new HeatIndexDisplay(weatherData);

        weatherData.setMeasurements(80, 65, 30.4f);
        weatherData.setMeasurements(82, 70, 29.2f);
        weatherData.setMeasurements(78, 90, 29.2f);

    }
}
