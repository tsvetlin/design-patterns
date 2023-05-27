package eu.svetlin.design.patterns.decorator.condiments;

import eu.svetlin.design.patterns.decorator.beverages.Beverage;

public abstract class CondimentDecorator extends Beverage {
    Beverage beverage;
    public abstract String getDescription();
}