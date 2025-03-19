/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Abian Santana Ledesma 
 * @since Mar 19 2025
 * @desc class grass to the blocks classes
 */

export class Grass {
  private readonly name;
  private readonly id: number; 
  private readonly hardness: number;

  /**
   * Constructor of the class
   */
  public constructor() {
    this.name = 'Grass';
    this.id = 2;
    this.hardness = 0.1; 
  }

  /**
   * Get the name of the block
   * @returns string - The name of the block
   */
  getName(): string {
    return this.name;
  }

  /**
   * Get the id of the block
   * @returns number - The id of the block
   */
  getId(): number {
    return this.id;
  }
  
  /**
   * Get the hardness of the block
   * @returns number - The hardness of the block
   */
  getHardness(): number {
    return this.hardness;
  }

  /**
    * Interact with the block
    * Place, break and special effect
    * @returns void
    */
  public interact(): void {
    console.log(`Placing ${this.name}`);
    console.log(`Breaking ${this.name}`);
    console.log(`Drop grass block`);
    console.log(`Expand the grass to the next dirt block`);
  }
}
