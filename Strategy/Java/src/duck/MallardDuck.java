package eu.svetlin.design.patterns.strategy.duck;

import eu.svetlin.design.patterns.strategy.fly.FlyWithWings;
import eu.svetlin.design.patterns.strategy.quack.Quack;

public class MallardDuck extends Duck {
    public MallardDuck() {
        super();
        quackBehavior = new Quack();
        flyBehavior = new FlyWithWings();
    }

    @Override
    public void display() {
        System.out.println("I'm a real Mallard Duck");
    }
}
