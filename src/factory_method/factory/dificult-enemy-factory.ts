/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Sonia Frías Jiménez
 * @since Mar 15 2025
 * @desc example of an implementation of Factory Interface
 *
 */

import { EnemyFactory } from './enemy-factory';
import { Enemy } from '../enemies/enemy';
import { Lakitu } from '../enemies/lakitu';
import { Koopa } from '../enemies/koopa';

/**
 * Implementation of EnemyFactory that creates 
 * difficul enemies, alterning between them
 */
export class DificultEnemyFactory implements EnemyFactory {
  private lastEnemy: string = '';

  /**
   * Factory Method
   * @returns {Enemy} Alternates between dificult enemies
   */
  public createEnemy(): Enemy {
    if (this.lastEnemy !== 'Lakitu') {
      this.lastEnemy = 'Lakitu';
      return new Lakitu();
    }
    this.lastEnemy = 'Koopa';
    return new Koopa();
  }
}
