# Head First Design Patterns

This is a companion repository for the [Design Patterns book](https://www.oreilly.com/library/view/head-first-design/9781492077992/), where I summarize what I have learned during my stay in Objectville for future reference.

I found this book amazing. It was easy to read with clear and funny examples, with engaging story.

## OO Basics

- Abstraction
- Encapsualtion
- Polymorphism
- Inheritance

## OO Principles

- Encapsulate what varies.
- Favor composition over inheritance.
- Program to interfaces, not implementations.
- Strive for loosely coupled designs between objects that interact.
- Classes should be open for extension but closed for modification.
- Depend on abstractions. Do not depend on concrete classes.
- Talk only to your friends.
- Let superclasses call subclass methods when they are needed.
- A class should have only one reason to change.

## OO Patterns

### Strategy Pattern

Defines a family of algorithms, encapsulates each one, and makes them interchangeable. Strategy lets the algorithm vary independently from clients that use it.

### Observer Pattern

Defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.

### Decorator Pattern

Attach additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality.

### Abstract Factory Pattern

Provides an interface for creating families of related or dependent objects without specifying their concrete classes.

### Factory Method Pattern

Defines an interface for creating an object, but let subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to the subclasses.

### Singleton Pattern

Ensure a class only has one instance and provide a global point of access to it.

### Command Pattern

Encapsulates a request as an object, thereby letting you parameterize clients with different requests, queue or log requests, and support undoable operations

### Adapter Pattern

Converts the interface of a class into another interface clients expect. Lets classes work together that couldn't otherwise because of incompatible interfaces.

### Facade Pattern

Provides a unified interface to a set of interfaces in a subsystem. Facade defines a higher-level interface that makes the subsystem easier to use.

### Template Method Pattern

Define the skeleton of an algorithm in an operation, deferring some steps to subclasses. Template Method lets subclasses redefine certain steps of an algorithm without changing the algorithm's structure.

### Iterator Pattern

Provide a way to access the elements of an aggregate object sequentially without exposing its underlying representation.

### Composite Pattern

Compose objects into tree structures to represent part-whole hierarchies. Composite lets clients treat individual objects and compositions of objects uniformly.

### State Pattern

Allow an object to alter its behavior when its internal state changes. The object will appear to change its class.

### Proxy Pattern

Provide a surrogate or placeholder for another object to control access to it.

### Compound Patterns

A compound Pattern combines two or more patterns into a solution that solves a recurring or general problem. MVC for example.
