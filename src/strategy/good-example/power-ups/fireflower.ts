/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Martín José Marrero Quintans, Abian Santana Ledesma, Sonia Sonia Frías Jiménez
 * @since March 16th, 2025
 * @brief File that contains the definition of the FireFlower class
 */

import { PowerUpStrategy } from './powerup-strategy';

export class FireFlower implements PowerUpStrategy {
  
  /**
   * @brief Performs the action of the FireFlower power-up
   * @returns void
   */
  performAction(): void {
    console.log('Mario shoots a fireball!');
  }
}