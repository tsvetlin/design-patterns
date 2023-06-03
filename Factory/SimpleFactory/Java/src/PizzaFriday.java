package eu.svetlin.design.patterns.factory.simplefactory;

import eu.svetlin.design.patterns.factory.simplefactory.Pizza.Pizza;

public class PizzaFriday {
   public static void main(String[] args){
        SimplePizzaFactory factory = new SimplePizzaFactory();
        PizzaStore store = new PizzaStore(factory);

        Pizza pizza = store.orderPizza("cheese");
        System.out.println(pizza);

        pizza = store.orderPizza("pepperoni");
        System.out.println(pizza);
    }
}
