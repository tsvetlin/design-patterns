import PizzaStore.PizzaStore;
import PizzaStore.NewYorkPizzaStore;
import PizzaStore.ChicagoPizzaStore;
import PizzaStore.CaliforniaPizzaStore;
import Pizza.Pizza;

public class PizzaFriday {

    public static void main(String[] args){
        PizzaStore newYorkPizzaStore = new NewYorkPizzaStore();
        PizzaStore chicagoPizzaStore = new ChicagoPizzaStore();
        PizzaStore californiaPizzaStore = new CaliforniaPizzaStore();

        Pizza pizza = newYorkPizzaStore.orderPizza("cheese");
        System.out.println("Ethan ordered a " + pizza + "\n");

        pizza = chicagoPizzaStore.orderPizza("clam");
        System.out.println("Joel ordered a " + pizza + "\n");

        pizza = californiaPizzaStore.orderPizza("pepperoni");
        System.out.println("Svetlin ordered a " + pizza + "\n");
    }

}
