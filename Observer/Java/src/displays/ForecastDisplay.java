package eu.svetlin.design.patterns.observer.displays;

import eu.svetlin.design.patterns.observer.data.WeatherData;
import eu.svetlin.design.patterns.observer.interfaces.DisplayElement;
import eu.svetlin.design.patterns.observer.interfaces.Observer;


public class ForecastDisplay implements Observer, DisplayElement {
    private WeatherData weatherData;
    private float currentPressure = 29.92f;
    private float lastPressure;

    public ForecastDisplay(WeatherData weatherData){
        this.weatherData = weatherData;
        weatherData.registerObserver(this);
    }

    @Override
    public void display(){
        System.out.print("Forecast: ");
        if (currentPressure > lastPressure) {
            System.out.println("Improving weather on the way!");
        } else if (currentPressure == lastPressure) {
            System.out.println("More of the same");
        } else if (currentPressure < lastPressure) {
            System.out.println("Watch out for cooler, rainy weather");
        }

    }

    @Override
    public void update(){
        lastPressure = currentPressure;
        currentPressure = weatherData.getPressure();
        display();
    }

}

