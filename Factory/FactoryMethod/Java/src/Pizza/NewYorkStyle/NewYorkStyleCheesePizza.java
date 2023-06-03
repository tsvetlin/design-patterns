package eu.svetlin.design.patterns.factory.factorymethod.Pizza.NewYorkStyle;

import eu.svetlin.design.patterns.factory.factorymethod.Pizza.Pizza;

public class NewYorkStyleCheesePizza extends Pizza {
    public NewYorkStyleCheesePizza(){
        name = "New York Style Sauce and Cheese Pizza";
        dough = "Thin Crust Dough";
        sauce = "Marinara Sauce";

        toppings.add("Grated Reggiano Cheese");
    }
}
