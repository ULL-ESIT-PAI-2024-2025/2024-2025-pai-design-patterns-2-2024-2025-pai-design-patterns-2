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

export class Grass extends Block {
  public constructor() {
    super('Grass', 3, 0.1);
  }

}
