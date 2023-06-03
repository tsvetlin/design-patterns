package eu.svetlin.design.patterns.factory.factorymethod.PizzaStore;

import eu.svetlin.design.patterns.factory.factorymethod.Pizza.ChicagoStyle.ChicagoStyleCheesePizza;
import eu.svetlin.design.patterns.factory.factorymethod.Pizza.ChicagoStyle.ChicagoStyleClamPizza;
import eu.svetlin.design.patterns.factory.factorymethod.Pizza.ChicagoStyle.ChicagoStylePepperoniPizza;
import eu.svetlin.design.patterns.factory.factorymethod.Pizza.ChicagoStyle.ChicagoStyleVeggiePizza;
import eu.svetlin.design.patterns.factory.factorymethod.Pizza.Pizza;

public class ChicagoPizzaStore extends PizzaStore{
    @Override
    Pizza createPizza(String type) {
        if(type.equals("cheese")){
            return new ChicagoStyleCheesePizza();
        }

        if(type.equals("veggie")){
            return new ChicagoStyleVeggiePizza();
        }

        if(type.equals("clam")){
            return new ChicagoStyleClamPizza();
        }

        if(type.equals("pepperoni")){
            return new ChicagoStylePepperoniPizza();
        }

        return null;
    }
}
