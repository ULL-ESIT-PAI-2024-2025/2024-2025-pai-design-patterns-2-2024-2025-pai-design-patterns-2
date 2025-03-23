/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Sonia Frías Jiménez, Martín José Marrero Quintans, Abian Santana Ledesma
 * @since Mar 15 2025
 * @desc Defines the interface of an abstract factory
 *
 * An abstract factory can have as much `factory methods`
 * as products can create
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
