package eu.svetlin.design.patterns.strategy.duck;

import eu.svetlin.design.patterns.strategy.fly.FlyNoWay;
import eu.svetlin.design.patterns.strategy.quack.Squeak;

public class RubberDuck extends Duck {
    public RubberDuck() {
        super();
        flyBehavior = new FlyNoWay();
        quackBehavior = new Squeak();
    }

    @Override
    public void display() {
    System.out.println("I'm a rubber duck :)");
    }
}
