package eu.svetlin.design.patterns.strategy.duck;

import eu.svetlin.design.patterns.strategy.fly.FlyNoWay;
import eu.svetlin.design.patterns.strategy.quack.Quack;

public class ModelDuck extends Duck{
    public ModelDuck() {
        super();
        flyBehavior = new FlyNoWay();
        quackBehavior = new Quack();
    }

    @Override
    public void display() {
        System.out.println("I'm a model duck");
    }
}
