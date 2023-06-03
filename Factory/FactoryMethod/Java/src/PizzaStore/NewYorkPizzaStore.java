package eu.svetlin.design.patterns.factory.factorymethod.PizzaStore;

import eu.svetlin.design.patterns.factory.factorymethod.Pizza.NewYorkStyle.NewYorkStyleCheesePizza;
import eu.svetlin.design.patterns.factory.factorymethod.Pizza.NewYorkStyle.NewYorkStyleClamPizza;
import eu.svetlin.design.patterns.factory.factorymethod.Pizza.NewYorkStyle.NewYorkStylePepperoniPizza;
import eu.svetlin.design.patterns.factory.factorymethod.Pizza.NewYorkStyle.NewYorkStyleVeggiePizza;
import eu.svetlin.design.patterns.factory.factorymethod.Pizza.Pizza;

public class NewYorkPizzaStore extends PizzaStore{
    @Override
    Pizza createPizza(String type) {
        if(type.equals("cheese")){
            return new NewYorkStyleCheesePizza();
        }

        if(type.equals("veggie")){
            return new NewYorkStyleVeggiePizza();
        }

        if(type.equals("clam")){
            return new NewYorkStyleClamPizza();
        }

        if(type.equals("pepperoni")){
            return new NewYorkStylePepperoniPizza();
        }

        return null;
    }
}
