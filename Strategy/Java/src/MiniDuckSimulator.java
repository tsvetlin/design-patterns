package eu.svetlin.design.patterns.strategy;

import eu.svetlin.design.patterns.strategy.duck.Duck;
import eu.svetlin.design.patterns.strategy.duck.MallardDuck;
import eu.svetlin.design.patterns.strategy.duck.ModelDuck;
import eu.svetlin.design.patterns.strategy.duck.RubberDuck;
import eu.svetlin.design.patterns.strategy.fly.FlyRocketPowered;

public class MiniDuckSimulator {
    public static void main(String[] args){
        System.out.println("Hello duck!\n");
        Duck mallard = new MallardDuck();
        mallard.display();
        mallard.performQuack();
        mallard.performFly();

        System.out.println();

        Duck rubber = new RubberDuck();
        rubber.display();
        rubber.performQuack();
        rubber.performFly();

        System.out.println();

        Duck model = new ModelDuck();
        model.display();
        model.performFly();
        model.setFlyBehavior(new FlyRocketPowered());
        model.performFly();
    }
}