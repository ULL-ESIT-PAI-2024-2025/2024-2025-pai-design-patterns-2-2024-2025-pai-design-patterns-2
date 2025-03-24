/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Martín José Marrero Quintans, Abian Santana Ledesma, Sonia Sonia Frías Jiménez
 * @since Mar 19 2025
 * @desc Class Bedrock to represent the bedrock block 
 */

export class Bedrock {
  private readonly name;
  private readonly id: number; 
  private readonly hardness: number;

  /**
   * Constructor of the class
   */
  public constructor() {
    this.name = 'Bedrock';
    this.id = 0;
    this.hardness = 1; 
  }

  /**
   * Get the name of the block
   * @returns string - The name of the block
   */
  public getName(): string {
    return this.name;
  }

  /**
   * Get the id of the block
   * @returns number - The id of the block
   */
  public getId(): number {
    return this.id;
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
    console.log(`Placing ${this.name}`);
    console.log(`${this.name} cannot be broken`);
    console.log(`No block drop`);
    console.log(`Non special effect`);
  }
}
