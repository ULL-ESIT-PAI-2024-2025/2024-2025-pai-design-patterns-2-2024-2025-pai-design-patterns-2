/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Sonia Frías Jiménez
 * @since Mar 15 2025
 * @desc Defines the interface of a factory
 *
 */

import { Block } from '../products/block/block'
import { Tube } from '../products/tube/tube';

/**
 * Factory for creating Enemies
 */
export interface Factory {
  /**
   * Factory Method that creates a block
   * @returns {Block} 
   */
  createBlock(): Block;

  /**
   * Factory Method that creates a tube
   * @returns {Tube} 
   */
  createTube(): Tube;
}
