import GumballMachine from './GumballMachine';

const main = () => {
  const numberGumballs = 10;
  const gumballMachine = new GumballMachine(numberGumballs);

  console.log(gumballMachine.toString());

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 2; j++) {
      gumballMachine.insertQuarter();
      gumballMachine.turnCrank();
    }
    console.log(gumballMachine.toString());
  }
};

main();
