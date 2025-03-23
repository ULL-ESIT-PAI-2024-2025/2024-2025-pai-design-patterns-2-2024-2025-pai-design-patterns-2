/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Sonia Frías Jiménez, Martín José Marrero Quintans, Abian Santana Ledesma 
 * @since Mar 15 2025
 * @desc example of an implementation of Factory Interface
 * which creates a random object
 *
 */

import { EnemyFactory } from './enemy-factory';
import { Enemy } from '../enemies/enemy';
import { Goomba } from '../enemies/goomba';
import { Boo } from '../enemies/boo';
import { Koopa } from '../enemies/koopa';

/**
 * Factory that creates Enemies Randomly
 */
export class RandomEnemyFactory implements EnemyFactory {
  /**
   * Factory Method that creates the Enemy object
   * @returns {Enemy} Random Enemy
   */
  public createEnemy(): Enemy {
    let randomNumber: number = Math.random();
    if (randomNumber > 0.66) return new Goomba();
    if (randomNumber > 0.33) return new Koopa();
    return new Boo();
  }
}