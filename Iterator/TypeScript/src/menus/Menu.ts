import Iterator from '../iterators/Iterator';
import MenuItem from './MenuItem';

interface Menu {
  createIterator(): Iterator<MenuItem>;
}

export default Menu;
