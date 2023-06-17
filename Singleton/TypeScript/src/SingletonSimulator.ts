import { Singleton } from './Singleton';

const main = () => {
  const singleton = Singleton.getInstance();
  console.log(singleton.getDescription());
};

main();
