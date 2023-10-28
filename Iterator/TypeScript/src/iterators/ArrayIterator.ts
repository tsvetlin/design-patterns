import MenuItem from '../menus/MenuItem';
import Iterator from './Iterator';

class ArrayIterator implements Iterator<MenuItem> {
  private list: MenuItem[];
  private position: number = 0;

  constructor(list: MenuItem[]) {
    this.list = list;
  }

  public next(): MenuItem {
    const menuItem = this.list[this.position];
    this.position = this.position + 1;
    return menuItem;
  }

  public hasNext(): boolean {
    if (this.position >= this.list.length) {
      return false;
    }

    return true;
  }

  public remove(): void {
    if (this.position <= 0) {
      throw new Error(
        "You can't remove an item until you've done at least one next()"
      );
    }
    if (this.list[this.position - 1] != null) {
      for (let i = this.position - 1; i < this.list.length - 1; i++) {
        this.list[i] = this.list[i + 1];
      }
      this.list[this.list.length - 1] = null;
    }
  }
}

export default ArrayIterator;
