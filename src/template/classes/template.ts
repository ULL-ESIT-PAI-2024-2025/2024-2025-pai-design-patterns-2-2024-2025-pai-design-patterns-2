/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Abian Santana Ledesma 
 * @since Mar 19 2025
 * @desc Template class to the blocks classes 
 */

abstract class Block {
  public constructor(private name: string, private texture: string, private hardness: number) {}

  public getName(): string {
    return this.name;
  }

  public getTexture(): string {
    return this.texture;
  }

  public getHardness(): number {
    return this.hardness;
  }
 
  /**
    * Interact with the block
    * Place, break and special effect
    * @returns void
    */
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
