/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Martín José Marrero Quintans
 * @since March 18th 2025
 * @desc Main file for the bad example of the Observer pattern
 */

import { EnemyCounter } from './enemy-counter';
import { Enemy } from './enemy';
import { ScoreSystem } from './score-system';

function main() {
  const enemyCounter: EnemyCounter = new EnemyCounter();
  const scoreSystem: ScoreSystem = new ScoreSystem();
  const enemy: Enemy = new Enemy();

  enemy.defeat();
  scoreSystem.increase();
  enemyCounter.increase();

  enemy.defeat();
  scoreSystem.increase();
  enemyCounter.increase();
}

if (require.main === module) {
  main();
}