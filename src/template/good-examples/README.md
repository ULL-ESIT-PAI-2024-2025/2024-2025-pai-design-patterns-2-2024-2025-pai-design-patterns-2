# Solution

To fix this problem I implement the Template pattern to fix it.

That mean create a generic abstract class called `Block` that contains the common methods.

```typescript
export abstract class Block {
  public constructor(private name: string, private id: number, private hardness: number) {}
 
  public getName(): string {
    return this.name;
  }
  
  public getId(): number {
    return this.id;
  }

  public getHardness(): number {
    return this.hardness;
  }
 
  public interact(): void {
    this.place();
    this.break();
    this.specialEffect();
  }

  protected place(): void {
    console.log(`Placing ${this.name}`);
  }
  
  protected break(): void {
    console.log(`Breaking ${this.name}`);
  }

  protected specialEffect(): void {
    console.log(`${this.name} has not special effect`);
  }

  public abstract getDrops(): Block[];
}
```

there are thre types of methods in the `Block` class:

1. **Common methods**: These methods are the same in all classes. For example, the `getId`, `getHardness`, `getName`, `interact` and `place` methods.
2. **Hook methods**: These methods has a template implemention that can be overridden in the subclasses. For example, the `specialEffect` and `break` methods.
3. **Abstract methods**: These methods must be implemented in the subclasses. For example, the `getDrops` method.
