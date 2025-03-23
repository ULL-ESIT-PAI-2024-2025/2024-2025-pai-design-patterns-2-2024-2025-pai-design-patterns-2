/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Sonia Frías Jiménez, Martín José Marrero Quintans, Abian Santana Ledesma 
 * @since Mar 15 2025
 * @desc Defines the interface of a factory
 * 
 * It has one method called the `factory method`
 * which is in charge of creating the objects
 *
 */

import { Enemy } from '../enemies/enemy';

/**
 * Factory for creating Enemies
 */
export interface EnemyFactory {
  /**
   * Factory Method that encapsulates the 
   * object creation logic
   * @returns {Enemy} 
   */
  createEnemy(): Enemy;
}
