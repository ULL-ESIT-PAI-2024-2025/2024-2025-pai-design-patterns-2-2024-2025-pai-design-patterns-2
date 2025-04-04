/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Martín José Marrero Quintans, Abian Santana Ledesma, Sonia Sonia Frías Jiménez
 * @since Mar 19 2025
 * @desc Class Bedrock to the blocks classes 
 */

import { Block } from '../block';

export class Bedrock extends Block {
  public constructor() {
    super('Bedrock', 0, 1);
  }
 
  /**
    * Do not break the bedrock
    * @returns void
    */
  protected break(): void { 
    console.log('You cannot break bedrock');
  }
  
  /**
   * Do not drop the bedrock
   * @returns Block[] - A empty Array 
   */
  public getDrops(): Block[] {
    // DANGER: This violate the Liskov Substitution Principle
    // throw new Error('You cannot break bedrock');
    return [];
  }
}
