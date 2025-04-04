/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Martín José Marrero Quintans, Abian Santana Ledesma, Sonia Sonia Frías Jiménez
 * @since March 18th 2025
 * @desc Main file for the bad example of the Observer pattern
 */

import { DefeatedEnemyCounter } from './enemy-counter';
import { Enemy } from './enemy';
import { ScoreSystem } from './score-system';

function main() {
  const defeatedEnemyCounter: DefeatedEnemyCounter = new DefeatedEnemyCounter();
  const scoreSystem: ScoreSystem = new ScoreSystem();
  const enemy: Enemy = new Enemy();

  enemy.defeat();
  scoreSystem.increase();
  defeatedEnemyCounter.increase();

  enemy.defeat();
  scoreSystem.increase();
  defeatedEnemyCounter.increase();
}

if (require.main === module) {
  main();
}