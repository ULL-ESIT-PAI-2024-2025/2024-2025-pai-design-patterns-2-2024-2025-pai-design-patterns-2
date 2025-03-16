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

import { Enemy } from "../enemies/enemy";

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
