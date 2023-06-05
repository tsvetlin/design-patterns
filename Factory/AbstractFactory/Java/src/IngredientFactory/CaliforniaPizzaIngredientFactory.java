package IngredientFactory;

import Ingredients.*;

public class CaliforniaPizzaIngredientFactory implements PizzaIngredientFactory {

    @Override
    public Dough createDough() {
        return new ThinCrustDough();
    }

    @Override
    public Sauce createSauce() {
        return new HoneyMustardSauce();
    }

    @Override
    public Cheese createCheese() {
        return new GoatCheese();
    }

    @Override
    public Veggies[] createVeggies() {
        Veggies[] veggies = { new Walnut(), new Seaweed(), new Onion() };
        return veggies;
    }

    @Override
    public Pepperoni createPepperoni() {
        return new BeefJerky();
    }

    @Override
    public Clams createClams() {
        return new Octopus();
    }
}
