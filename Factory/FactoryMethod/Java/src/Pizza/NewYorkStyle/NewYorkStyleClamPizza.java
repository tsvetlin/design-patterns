package eu.svetlin.design.patterns.factory.factorymethod.Pizza.NewYorkStyle;

import eu.svetlin.design.patterns.factory.factorymethod.Pizza.Pizza;

public class NewYorkStyleClamPizza extends Pizza {
    public NewYorkStyleClamPizza(){
        name = "New York Style Clam Pizza";
        dough = "Thin Crust Dough";
        sauce = "Marinara Sauce";

        toppings.add("Grated Reggiano Cheese");
        toppings.add("Fresh Clams from Long Island Sound");
    }
}
