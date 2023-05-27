package eu.svetlin.design.patterns.decorator.condiments;

import eu.svetlin.design.patterns.decorator.beverages.Beverage;

public class Mocha extends CondimentDecorator {

    public Mocha(Beverage beverage){
        this.beverage = beverage;
    }
    @Override
    public double cost() {
        return beverage.cost() + .20;
    }

    @Override
    public String getDescription() {
        return beverage.getDescription() + ", Mocha";
    }
}
