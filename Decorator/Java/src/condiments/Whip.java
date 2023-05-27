package eu.svetlin.design.patterns.decorator.condiments;

import eu.svetlin.design.patterns.decorator.beverages.Beverage;

public class Whip extends CondimentDecorator {

    public Whip(Beverage beverage){
        this.beverage = beverage;
    }
    @Override
    public double cost() {
        return beverage.cost() + .10;
    }

    @Override
    public String getDescription() {
        return beverage.getDescription() + ", Whip";
    }
}
