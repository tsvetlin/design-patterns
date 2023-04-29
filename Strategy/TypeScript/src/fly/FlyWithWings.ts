import { FlyBehavior } from './FlyBehavior';

class FlyWithWings implements FlyBehavior {
  fly(): void {
    console.log("I can't fly");
  }
}

export default FlyWithWings;
