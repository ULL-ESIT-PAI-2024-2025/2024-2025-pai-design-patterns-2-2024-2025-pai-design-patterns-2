/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Martín José Marrero Quintans
 * @since March 16th, 2025
 * @brief File that contains the definition of the mushroom class
 */

import { PowerUpStrategy } from './powerup-strategy';

export class Mushroom implements PowerUpStrategy {
  performAction(): void {
    console.log('Mario grows in size!');
  }
}