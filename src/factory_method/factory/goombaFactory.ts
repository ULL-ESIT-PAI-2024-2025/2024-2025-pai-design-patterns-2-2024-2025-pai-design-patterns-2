/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Sonia Frías Jiménez
 * @since Mar 15 2025
 * @desc example of an implementation of Factory Interface
 * which creates the same object
 *
 */

import { EnemyFactory } from "./EnemyFactory";
import { Enemy } from "../enemies/enemy";
import { Goomba } from "../enemies/goomba";

/**
 * Factory that creates Goombas
 */
export class GoombaEnemyFactory implements EnemyFactory {
  /**
   * Factory Method that creates the Enemy object
   * @returns {Enemy} 
   */
  public createEnemy(): Enemy {
    return new Goomba();
  }
}