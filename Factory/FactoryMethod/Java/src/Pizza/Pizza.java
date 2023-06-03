package eu.svetlin.design.patterns.factory.factorymethod.Pizza;

import java.util.ArrayList;
import java.util.List;

public abstract class Pizza {
    public String name;
    public String dough;
    public String sauce;
    public List<String> toppings = new ArrayList<>();

    public String getName() {
        return name;
    }

    public void prepare(){
        System.out.println("Preparing " + name);
        System.out.println("Tossing dough...");
        System.out.println("Adding sauce...");
        System.out.println("Adding toppings: ");
        for(String topping: toppings){
            System.out.println(" * " + topping);
        }

    }

    public void bake(){
        System.out.println("Bake for 25 minutes at 350 " + name);
    }

    public void cut(){
        System.out.println("Cut the pizza into diagonal slices " + name);
    }

    public void box(){
        System.out.println("Place the pizza in an official PizzaStore box " + name);
    }

    @Override
    public String toString() {
        return "Pizza { " +
                "name='" + name + '\'' +
                ", dough='" + dough + '\'' +
                ", sauce='" + sauce + '\'' +
                ", toppings=" + toppings +
                " }";
    }
}