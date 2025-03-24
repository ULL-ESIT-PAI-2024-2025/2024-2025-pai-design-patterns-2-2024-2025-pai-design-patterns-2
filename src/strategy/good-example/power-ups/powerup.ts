/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Martín José Marrero Quintans, Abian Santana Ledesma, Sonia Sonia Frías Jiménez
 * @since March 16th, 2025
 * @brief File that contains the definition of the PowerUp class
 */

import { PowerUpStrategy } from './powerup-strategy';

export class PowerUp implements PowerUpStrategy {
  private powerUpStrategy: PowerUpStrategy;

  /**
   * @brief Constructor for the PowerUp class
   * @param powerUpStrategy Strategy to be used
   */
  constructor(powerUpStrategy: PowerUpStrategy) {
    this.powerUpStrategy = powerUpStrategy;
  }

  /**
   * @brief Performs the action of the power up
   * @returns void
   */
  performAction(): void {
    this.powerUpStrategy.performAction();
  }
}