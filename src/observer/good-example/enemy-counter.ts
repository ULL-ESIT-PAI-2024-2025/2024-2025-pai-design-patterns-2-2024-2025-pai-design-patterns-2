/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Martín José Marrero Quintans, Abian Santana Ledesma, Sonia Sonia Frías Jiménez
 * @since March 18th 2025
 * @desc Definition file for the EnemyCounter class
 */

import { Observer } from './observer';

export class DefeatedEnemyCounter implements Observer {
  private defeatedEnemyCount: number = 0;

  /**
   * Updates the enemy count
   * @param message The message to update the enemy count
   * @returns void
   */
  update(message: string): void {
    if (message === 'Enemy defeated!') {
      this.defeatedEnemyCount++;
      console.log(`Enemy count: ${this.defeatedEnemyCount}`);
    }
  }
}