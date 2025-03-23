/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Martín José Marrero Quintans
 * @since March 18th 2025
 * @desc Main file for the Observer pattern good example
 */

import { Enemy } from './enemy';
import { ScoreSystem } from './score-system';
import { DefeatedEnemyCounter } from './enemy-counter';

function main() {
  const enemy = new Enemy();
  const scoreSystem = new ScoreSystem();
  const defeatedEnemyCounter = new DefeatedEnemyCounter();

  enemy.addObserver(scoreSystem);
  enemy.addObserver(defeatedEnemyCounter);

  enemy.defeat();
  enemy.defeat();
}

if (require.main === module) {
  main();
}