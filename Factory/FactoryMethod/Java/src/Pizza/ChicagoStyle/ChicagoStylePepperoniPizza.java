package eu.svetlin.design.patterns.factory.factorymethod.Pizza.ChicagoStyle;

import eu.svetlin.design.patterns.factory.factorymethod.Pizza.Pizza;

public class ChicagoStylePepperoniPizza extends Pizza {
    public ChicagoStylePepperoniPizza(){
        name = "Chicago Style Pepperoni Pizza";
        dough = "Extra Thick Crust Dough";
        sauce = "Plum Tomato Sauce";

        toppings.add("Shredded Mozzarella Cheese");
        toppings.add("Black Olives");
        toppings.add("Spinach");
        toppings.add("Eggplant");
        toppings.add("Sliced Pepperoni");
    }

    @Override
    public void cut() {
        System.out.println("Cutting the pizza into square slices");
    }
}
