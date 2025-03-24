/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Martín José Marrero Quintans, Abian Santana Ledesma, Sonia Sonia Frías Jiménez
 * @since March 16th, 2025
 * @brief File that contains the definition of the mushroom class
 */

import { PowerUpStrategy } from './powerup-strategy';

export class Mushroom implements PowerUpStrategy {

  /**
   * @brief Performs the action of the Mushroom power-up
   * @returns void
   */
  performAction(): void {
    console.log('Mario grows in size!');
  }
}