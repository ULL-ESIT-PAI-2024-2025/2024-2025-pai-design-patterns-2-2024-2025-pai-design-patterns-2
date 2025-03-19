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
  constructor(private name: string, private id: number, private hardness: number) {
    this.name = name;
    this.id = id;
    this.hardness = hardness;
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
    console.log(`Expand the grass to the next block`);
  }
}
