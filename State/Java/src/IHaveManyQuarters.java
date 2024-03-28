public class IHaveManyQuarters {

	public static void main(String[] args) {
    int numberGumballs = 10;
		GumballMachine gumballMachine =
			new GumballMachine(numberGumballs);

		System.out.println(gumballMachine);

    for(int i = 0; i < 5; i++){
      for(int j = 0; j < 2; j++){
        gumballMachine.insertQuarter();
        gumballMachine.turnCrank();
      }

      System.out.println(gumballMachine);
    }
	}
}
