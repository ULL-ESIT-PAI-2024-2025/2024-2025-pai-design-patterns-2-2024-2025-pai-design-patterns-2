/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Martín José Marrero Quintans
 * @since March 18th 2025
 * @desc Definition file for the ScoreSystem class
 */

import { Observer } from './observer';

export class ScoreSystem implements Observer {
  private score: number = 0;

  /**
   * Updates the score
   * @param message The message to update the score
   * @returns void
   */
  update(message: string): void {
    if (message === 'Enemy defeated!') {
      this.score += 100;
      console.log(`Score: ${this.score}`);
    }
  }
}