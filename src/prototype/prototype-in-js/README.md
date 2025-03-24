# Prototype

This type of inheritance is called prototypal inheritance. In prototypal inheritance, objects inherit from objects. 

## Prototype Chain

In JavaScript, objects have a special hidden property [[Prototype]] (as in [[Get]] or [[Put]]) that is either null or references another object. That object is called the "prototype" of the first object.

When we want to read a property from object, and it’s missing, JavaScript automatically takes it from the prototype. In programming, this is called "prototypal inheritance".

