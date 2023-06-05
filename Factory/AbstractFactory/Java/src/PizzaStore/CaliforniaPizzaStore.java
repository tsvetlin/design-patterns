package PizzaStore;

import IngredientFactory.CaliforniaPizzaIngredientFactory;
import IngredientFactory.PizzaIngredientFactory;
import Pizza.Pizza;
import Pizza.CheesePizza;
import Pizza.ClamPizza;
import Pizza.PepperoniPizza;
import Pizza.VeggiePizza;

public class CaliforniaPizzaStore extends PizzaStore {
    @Override
    protected Pizza createPizza(String type) {
        Pizza pizza = null;
        PizzaIngredientFactory pizzaIngredientFactory = new CaliforniaPizzaIngredientFactory();
        if(type.equals("cheese")){
            pizza = new CheesePizza(pizzaIngredientFactory);
            pizza.setName("California Style Cheese Pizza");
        }

        if(type.equals("veggie")){
            pizza = new VeggiePizza(pizzaIngredientFactory);
            pizza.setName("California Style Veggie Pizza");
        }

        if(type.equals("clam")){
            pizza = new ClamPizza(pizzaIngredientFactory);
            pizza.setName("California Style Clam Pizza");
        }

        if(type.equals("pepperoni")){
            pizza = new PepperoniPizza(pizzaIngredientFactory);
            pizza.setName("California Style Pepperoni Pizza");
        }
        return pizza;
    }
}
