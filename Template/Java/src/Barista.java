import beverage.Tea;
import beverage.TeaWithHook;
import beverage.Coffee;
import beverage.CoffeeWithHook;

public class Barista {
  public static void main(String[] args){
    Tea tea = new Tea();
    Coffee coffee = new Coffee();

    System.out.println("\nMaking tea...");
    tea.prepareRecipe();

    System.out.println("\nMaking coffee...");
    coffee.prepareRecipe();

    TeaWithHook teaHook = new TeaWithHook();
		CoffeeWithHook coffeeHook = new CoffeeWithHook();

		System.out.println("\nMaking tea...");
		teaHook.prepareRecipe();

		System.out.println("\nMaking coffee...");
		coffeeHook.prepareRecipe();
  }
}
