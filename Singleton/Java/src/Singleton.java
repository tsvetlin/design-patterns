package eu.svetlin.design.patterns.singleton;

public class Singleton {
    private volatile static Singleton uniqueInstance;

    private Singleton(){}

    public String getDescription(){
        return "Hello, I'm one of a kind :)";
    }

    public static Singleton getInstance(){
        if(uniqueInstance == null){
            synchronized (Singleton.class){
                if(uniqueInstance == null){
                    uniqueInstance = new Singleton();
                }
            }
        }
        return uniqueInstance;
    }
}
