package eu.svetlin.design.patterns.decorator;

import eu.svetlin.design.patterns.decorator.beverages.Beverage;
import eu.svetlin.design.patterns.decorator.beverages.DarkRoast;
import eu.svetlin.design.patterns.decorator.beverages.Espresso;
import eu.svetlin.design.patterns.decorator.beverages.HouseBlend;
import eu.svetlin.design.patterns.decorator.condiments.Mocha;
import eu.svetlin.design.patterns.decorator.condiments.Soy;
import eu.svetlin.design.patterns.decorator.condiments.Whip;

public class StarbuzzCoffee {
    public static void main(String args[]){
        Beverage espresso = new Espresso();
        System.out.println(espresso.getDescription() + " $" + espresso.cost());

        Beverage doubleMochaWithWhip = new DarkRoast();
        doubleMochaWithWhip = new Mocha(doubleMochaWithWhip);
        doubleMochaWithWhip = new Mocha(doubleMochaWithWhip);
        doubleMochaWithWhip = new Whip(doubleMochaWithWhip);

        System.out.println(doubleMochaWithWhip.getDescription() + " $" + doubleMochaWithWhip.cost());

        Beverage houseBlendWithSoyMochaAndWhip = new HouseBlend();
        houseBlendWithSoyMochaAndWhip.setSize(Beverage.Size.VENTI);
        houseBlendWithSoyMochaAndWhip = new Soy(houseBlendWithSoyMochaAndWhip);
        houseBlendWithSoyMochaAndWhip = new Mocha(houseBlendWithSoyMochaAndWhip);
        houseBlendWithSoyMochaAndWhip = new Whip(houseBlendWithSoyMochaAndWhip);

        System.out.println(houseBlendWithSoyMochaAndWhip.getDescription() + " $" + String.format("%.2f", houseBlendWithSoyMochaAndWhip.cost()));
    }
}
