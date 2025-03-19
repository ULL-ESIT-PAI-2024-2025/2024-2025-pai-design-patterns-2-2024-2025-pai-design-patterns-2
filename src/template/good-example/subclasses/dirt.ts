/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Abian Santana Ledesma 
 * @since Mar 19 2025
 * @desc Class Bedrock to the blocks classes 
 */

import { Block } from '../block';

export class Dirt extends Block {
  public constructor() {
    super('Dirt', 2, 0.1);
  }

  /**
    * Do not break the dirt
    * @returns void
    */
  protected break(): void { 
    console.log('You cannot break dirt');
  }
}
