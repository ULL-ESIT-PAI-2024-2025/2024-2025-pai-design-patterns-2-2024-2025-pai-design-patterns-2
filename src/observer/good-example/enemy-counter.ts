/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Martín José Marrero Quintans
 * @since March 18th 2025
 * @desc Definition file for the EnemyCounter class
 */

import { Observer } from './observer';

export class EnemyCounter implements Observer {
  private enemyCount: number = 0;

  update(message: string): void {
    if (message === 'Enemy defeated!') {
      this.enemyCount++;
      console.log(`Enemy count: ${this.enemyCount}`);
    }
  }
}