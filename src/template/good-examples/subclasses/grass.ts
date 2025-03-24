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

export class Grass extends Block {
  public constructor() {
    super('Grass', 3, 0.1);
  }

  /**
   * Special effect of the grass
   * @returns void
   */
  protected specialEffect(): void {
    console.log('The grass expands to the next dirt block');
  }

  /**
   * Drop the grass
   * @returns Block[] - A empty Array 
   */
  public getDrops(): Block[] {
    return [this];
  }
}
