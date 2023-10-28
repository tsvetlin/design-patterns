interface Iterator<T> {
  next(): T;
  hasNext(): boolean;
  remove(): void;
}

export default Iterator;
