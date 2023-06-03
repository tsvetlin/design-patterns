package eu.svetlin.design.patterns.factory.simplefactory.Pizza;

public class ClamPizza extends Pizza {
    public ClamPizza(){
        name = "Clam Pizza";
        dough = "Thin Crust";
        sauce = "White Garlic Sauce";
        toppings.add("Clams");
        toppings.add("Grated Parmesan Cheese");
    }
}
