# Difference between Object.create and new operator

Object.create() create a new object with the specified prototype object and properties. The
main difference between new operator and Object.create() is that new operator creates a new
instance using a constructor function. Object.create() creates a new instance using an existing
object as the prototype of the newly created object.


## prototype in javascript

In javascript, every object has a prototype. The prototype is also an object. When you create a new
object, the new object's prototype is set to the object that you specify. The prototype object is
used to add properties and methods to the object. When you try to access a property or method of an
object, javascript first checks if the property or method is available in the object. If it is not
available, javascript checks the prototype object of the object. If the property or method is
available in the prototype object, javascript returns the value of the property or method.
