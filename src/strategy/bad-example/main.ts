/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Martín José Marrero Quintans, Abian Santana Ledesma, Sonia Sonia Frías Jiménez
 * @since March 16th, 2025
 * @brief Main file for the bad example of the strategy pattern
 */

import { PowerUp } from './powerups';

function main(): void {
  const mushroom = new PowerUp('Mushroom');
  const fireFlower = new PowerUp('Fire Flower');

  mushroom.performAction();
  fireFlower.performAction();
}

main();
