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
  constructor(private material: string, private durability: number) {}
  
  /**
   * clone method that returns a new Pickaxe with the same material and durability
   * @returns Pickaxe
   */
  public clone(): Tool {
    return new Pickaxe(this.material, this.durability);
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
}
