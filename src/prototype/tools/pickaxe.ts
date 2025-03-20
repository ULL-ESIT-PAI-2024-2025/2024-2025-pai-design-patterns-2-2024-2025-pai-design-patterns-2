/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Abian Santana Ledesma 
 * @since Mar 19 2025
 * @desc Class Pickaxe implements Tool that represents a Pickaxe 
 */

import { Tool } from './tool';

export class Pickaxe implements Tool {
  private material: string;
  private durability: number;
  
  constructor() {
    this.material = 'Wood';
    this.durability = 59;
  }
  
  /**
   * clone method that returns a new Pickaxe with the same material and durability
   * @returns Pickaxe
   */
  public clone(): this {
    // Object.create creates a new object with the prototype of the object passed as argument
    // see the README.md for more information
    const clone = Object.create(Object.getPrototypeOf(this));
    clone.setMaterial(this.material);
    clone.setDurability(this.durability);
    return clone as this;
  }

  /**
   * displayInfo method that logs the material and durability of the Pickaxe
   */
  public displayInfo(): void {
    console.log(`Pickaxe: ${this.material}, Durability: ${this.durability}`);
  }

  /**
   * setMaterial method that sets the material of the Pickaxe 
   * @returns void 
   */
  public setMaterial(material: string): void {
    this.material = material;
  }


  /**
   * setDurability method that sets the durability of the Pickaxe 
   * @returns void 
   */
  public setDurability(durability: number): void {
    this.durability = durability;
  }
}
