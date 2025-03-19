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
  
  /**
    * Get the name of the block
    * @returns string - The name of the block
    */
  public getName(): string {
    return this.name;
  }

  /**
    * Get the texture of the block
    * @returns string - The texture of the
    */
  public getTexture(): string {
    return this.texture;
  }

  /**
    * Get the hardness of the block
    * @returns number - The hardness of the block
    */
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
  
  /**
    * Place the block
    * @returns void
    */
  protected place(): void {
    console.log(`Placing ${this.name}`);
  }
  
  /**
    * Break the block
    * @returns void
    */
  protected break(): void {
    console.log(`Breaking ${this.name}`);
  }

  /**
    * Special effect from the block
    * @returns void
    */
  protected specialEffect(): void {
    console.log(`${this.name} has not special effect`);
  }
 
  /**
    * get the block when it drops
    * @returns Block[] - Array of blocks that drops 
    */
  public abstract getDrops(): Block[];
}
