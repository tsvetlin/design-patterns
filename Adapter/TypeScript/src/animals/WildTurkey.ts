import Turkey from '../interfaces/Turkey';

export default class WildTurkey implements Turkey {
  gobble() {
    console.log('Gobble gobble');
  }
  fly() {
    console.log("I'm flying a short distance");
  }
}
