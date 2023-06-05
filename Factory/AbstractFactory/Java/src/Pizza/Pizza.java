package Pizza;

import Ingredients.*;

public abstract class Pizza {
    String name;

    Dough dough;
    Sauce sauce;
    Veggies veggies[];
    Cheese cheese;
    Pepperoni pepperoni;
    Clams clams;

    public abstract void prepare();

    public void bake(){
        System.out.println("Bake for 25 minutes at 350");
    }

    public void cut(){
        System.out.println("Cutting the pizza into diagonal slices");
    }

    public void box(){
        System.out.println("Placing the pizza in an official PizzaStore box");
    }

    public void setName(String name){
        this.name = name;
    }

    public String getName(){
        return this.name;
    }

    public String toString(){
        StringBuffer pizzaString = new StringBuffer();
        pizzaString.append(name + "\n");
        if(dough != null){
            pizzaString.append(dough);
            pizzaString.append("\n");
        }
        if(sauce != null){
            pizzaString.append(sauce);
            pizzaString.append("\n");
        }
        if(cheese != null){
            pizzaString.append(cheese);
            pizzaString.append("\n");
        }
        if(veggies != null){
            for(int i = 0; i< veggies.length; i++){
                pizzaString.append(veggies[i]);
                if(i < veggies.length - 1){
                    pizzaString.append(", ");
                }
            }
            pizzaString.append("\n");
        }
        if(clams != null){
            pizzaString.append(clams);
            pizzaString.append("\n");
        }
        if(pepperoni != null){
            pizzaString.append(pepperoni);
            pizzaString.append("\n");
        }
        return pizzaString.toString();
    }
}
