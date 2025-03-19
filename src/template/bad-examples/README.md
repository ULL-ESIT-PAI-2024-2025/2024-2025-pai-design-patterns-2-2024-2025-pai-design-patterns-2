# PROBLEM

The main problem about that implementation is that the grass, bedrock and dirt classes
have some method that make the same functionality.

Therefore this code violates the DRY principle. Causing a lot of code repetition.

For example, the 'getId', 'getHardness' and 'getName' methods are the same in all classes.

# SOLUTION

To solve this problem, we can create a superclass called 'Block' that contains the common methods

for more explanation see [this link](../good-examples/README.md)
