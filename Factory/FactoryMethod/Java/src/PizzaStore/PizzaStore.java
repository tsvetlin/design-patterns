package eu.svetlin.design.patterns.factory.factorymethod.PizzaStore;

import eu.svetlin.design.patterns.factory.factorymethod.Pizza.Pizza;

public abstract class PizzaStore {

    abstract Pizza createPizza(String type);
    public Pizza orderPizza(String type){
        Pizza pizza = createPizza(type);
        System.out.println("Making a " + pizza.getName());
        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();

        return pizza;
    }
}
