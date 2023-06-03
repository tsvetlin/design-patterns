package eu.svetlin.design.patterns.factory.factorymethod.Pizza.NewYorkStyle;

import eu.svetlin.design.patterns.factory.factorymethod.Pizza.Pizza;

public class NewYorkStylePepperoniPizza extends Pizza {
    public NewYorkStylePepperoniPizza(){
        name = "New York Style Pepperoni Pizza";
        dough = "Think Crust Dough";
        sauce = "Marinara Sauce";

        toppings.add("Grated Reggiano Cheese");
        toppings.add("Sliced Pepperoni");
        toppings.add("Garlic");
        toppings.add("Onion");
        toppings.add("Mushrooms");
        toppings.add("Red Pepper");
    }
}
