package PizzaStore;

import IngredientFactory.NewYorkPizzaIngredientFactory;
import IngredientFactory.PizzaIngredientFactory;
import Pizza.Pizza;
import Pizza.CheesePizza;
import Pizza.ClamPizza;
import Pizza.PepperoniPizza;
import Pizza.VeggiePizza;

public class NewYorkPizzaStore extends PizzaStore {
    @Override
    protected Pizza createPizza(String type) {
        Pizza pizza = null;
        PizzaIngredientFactory pizzaIngredientFactory = new NewYorkPizzaIngredientFactory();

        if(type.equals("cheese")){
            pizza = new CheesePizza(pizzaIngredientFactory);
            pizza.setName("New York Style Cheese Pizza");
        }

        if(type.equals("veggie")){
            pizza = new VeggiePizza(pizzaIngredientFactory);
            pizza.setName("New York Style Veggie Pizza");
        }

        if(type.equals("clam")){
            pizza = new ClamPizza(pizzaIngredientFactory);
            pizza.setName("New York Style Clam Pizza");
        }

        if(type.equals("pepperoni")){
            pizza = new PepperoniPizza(pizzaIngredientFactory);
            pizza.setName("New York Style Pepperoni Pizza");
        }

        return pizza;
    }
}
