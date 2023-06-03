package eu.svetlin.design.patterns.factory.factorymethod.Pizza.NewYorkStyle;

import eu.svetlin.design.patterns.factory.factorymethod.Pizza.Pizza;

public class NewYorkStyleVeggiePizza extends Pizza {
    public NewYorkStyleVeggiePizza(){
        name = "New York Style Veggie Pizza";
        dough = "Thin Crust Dough";
        sauce = "Marinara Sauce";

        toppings.add("Grated Reggiano Cheese");
        toppings.add("Garlic");
        toppings.add("Onion");
        toppings.add("Mushrooms");
        toppings.add("Red Pepper");
    }
}
