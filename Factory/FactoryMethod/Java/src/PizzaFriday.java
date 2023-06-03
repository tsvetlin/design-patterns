package eu.svetlin.design.patterns.factory.factorymethod;

import eu.svetlin.design.patterns.factory.factorymethod.Pizza.Pizza;
import eu.svetlin.design.patterns.factory.factorymethod.PizzaStore.ChicagoPizzaStore;
import eu.svetlin.design.patterns.factory.factorymethod.PizzaStore.NewYorkPizzaStore;
import eu.svetlin.design.patterns.factory.factorymethod.PizzaStore.PizzaStore;

public class PizzaFriday {
   public static void main(String[] args){
        PizzaStore newYorkStore = new NewYorkPizzaStore();
        PizzaStore chicagoStore = new ChicagoPizzaStore();

        Pizza pizza = newYorkStore.orderPizza("cheese");
        System.out.println("Ethan ordered a " + pizza.getName() + "\n");

        pizza = chicagoStore.orderPizza("pepperoni");
        System.out.println("Joel ordered a " + pizza.getName() + "\n");
    }
}
