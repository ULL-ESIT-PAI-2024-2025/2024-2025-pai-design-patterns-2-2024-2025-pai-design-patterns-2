/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Abian Santana Ledesma 
 * @since Mar 19 2025
 * @desc Class Sword implements Tool that represents a Sword 
 */

import { Tool } from './tool';

export class Sword implements Tool {
  constructor(private material: string, private durability: number) {}

  /**
   * clone method that returns a new Sword with the same material and durability
   * @returns Sword
   */
  public clone(): this {
    return new Sword(this.material, this.durability) as this;
  }

  /**
   * displayInfo method that logs the material and durability of the Sword
   */
  public displayInfo(): void {
    console.log(`Sword: ${this.material}, Durability: ${this.durability}`);
  }

  /**
   * setDurability method that sets the durability of the Sword
   * @returns void
   */
  public setDurability(durability: number): void {
    this.durability = durability;
  }
}
