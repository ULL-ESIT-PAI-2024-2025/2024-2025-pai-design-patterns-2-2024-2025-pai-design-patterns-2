/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Martín José Marrero Quintans
 * @since March 16th, 2025
 * @brief Main file for the bad example of the strategy pattern
 */

import { PowerUp } from './powerups';

function main(): void {
  const mushroom = new PowerUp('Mushroom');
  const fireFlower = new PowerUp('Fire Flower');
  const star = new PowerUp('Star');
  const oneUp = new PowerUp('1-Up');

  mushroom.performAction();
  fireFlower.performAction();
  star.performAction();
  oneUp.performAction();
}

main();
