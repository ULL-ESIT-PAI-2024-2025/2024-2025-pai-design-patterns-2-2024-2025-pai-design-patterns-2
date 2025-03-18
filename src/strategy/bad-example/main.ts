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

import { Enemy } from './enemies';

function main(): void {
  const goomba = new Enemy('Goomba');
  const koopa = new Enemy('Koopa');
  const boo = new Enemy('Boo');

  goomba.move();
  goomba.attack();

  koopa.move();
  koopa.attack();

  boo.move();
  boo.attack();
}

main();
