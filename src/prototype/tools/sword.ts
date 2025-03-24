/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Martín José Marrero Quintans, Abian Santana Ledesma, Sonia Sonia Frías Jiménez
 * @since Mar 19 2025
 * @desc Class Sword implements Tool that represents a Sword 
 */

import { Tool } from './tool';

export class Sword implements Tool {
  private material: string;
  private durability: number;

  constructor() {
    this.material = 'Wood';
    this.durability = 59;
  }

  /**
   * clone method that returns a new Sword with the same material and durability
   * @returns Sword
   */
  public clone(): this {
    const clone = Object.create(this);
    clone.setMaterial(this.material);
    clone.setDurability(this.durability);
    return clone as this;
  }

  /**
   * displayInfo method that logs the material and durability of the Sword
   */
  public displayInfo(): void {
    console.log(`Sword: ${this.material}, Durability: ${this.durability}`);
  }

  /**
   * setMaterial method that sets the material of the Sword
   * @returns void
   */
  public setMaterial(material: string): void {
    this.material = material;
  }

  /**
   * setDurability method that sets the durability of the Sword
   * @returns void
   */
  public setDurability(durability: number): void {
    this.durability = durability;
  }
}
