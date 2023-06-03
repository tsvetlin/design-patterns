package eu.svetlin.design.patterns.factory.factorymethod.Pizza.ChicagoStyle;

import eu.svetlin.design.patterns.factory.factorymethod.Pizza.Pizza;

public class ChicagoStyleClamPizza extends Pizza {
    public ChicagoStyleClamPizza(){
        name = "Chicago Style Clam Pizza";
        dough = "Extra Thick Crust Dough";
        sauce = "Plum Tomato Sauce";

        toppings.add("Shredded Mozzarella Cheese");
        toppings.add("Frozen Clams from Chesepeake Bay");
    }

    @Override
    public void cut() {
        System.out.println("Cutting the pizza into Square slices");
    }
}
