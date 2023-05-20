package eu.svetlin.design.patterns.observer.displays;

import eu.svetlin.design.patterns.observer.data.WeatherData;
import eu.svetlin.design.patterns.observer.interfaces.DisplayElement;
import eu.svetlin.design.patterns.observer.interfaces.Observer;

public class CurrentConditionsDisplay implements Observer, DisplayElement {
    private float temperature;
    private float humidity;
    private WeatherData weatherData;

    public CurrentConditionsDisplay(WeatherData weatherData){
        this.weatherData = weatherData;
        weatherData.registerObserver(this);
    }

    @Override
    public void display() {
        System.out.println("Current conditions: " + temperature + "F degrees and " + humidity + "% humidity");
    }

    @Override
    public void update(float temperature, float humidity, float pressure) {
    this.temperature = temperature;
    this.humidity = humidity;
    display();
    }
}
