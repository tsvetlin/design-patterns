package eu.svetlin.design.patterns.decorator.condiments;

import eu.svetlin.design.patterns.decorator.beverages.Beverage;

public class Soy extends CondimentDecorator {

    public Soy(Beverage beverage){
        this.beverage = beverage;
    }

    private double getSoyCost() {
        switch (beverage.getSize()) {
            case GRANDE:
                return .20;
            case VENTI:
                return .25;
            case TALL:
            default:
                return .15;
        }
    }
    @Override
    public double cost() {
        return beverage.cost() + getSoyCost();
    }

    @Override
    public String getDescription() {
        return beverage.getDescription() + ", Soy";
    }
}
