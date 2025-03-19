/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Martín José Marrero Quintans
 * @since March 16th, 2025
 * @brief Main file for the good example of the strategy pattern
 */

import { PowerUp } from './power-ups/powerup';
import { Mushroom } from './power-ups/mushroom';
import { FireFlower } from './power-ups/fireflower';

function main(): void {
  let marioPowerUp: PowerUp = new PowerUp(new Mushroom());
  marioPowerUp.performAction();

  marioPowerUp = new PowerUp(new FireFlower());
  marioPowerUp.performAction();
}

main();
