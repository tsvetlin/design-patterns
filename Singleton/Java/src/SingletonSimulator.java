package eu.svetlin.design.patterns.singleton;

public class SingletonSimulator {
    public static void main(String[] args){
        Singleton singleton = Singleton.getInstance();
        System.out.println(singleton.getDescription());
    }
}
