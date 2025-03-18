/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Sonia Frías Jiménez
 * @since Mar 15 2025
 * @desc Main program to test Factory Method
 */

import { RandomEnemyFactory } from './factory/random-enemy-factory';
import { DificultEnemyFactory } from './factory/dificult-enemy-factory';
import { GoombaEnemyFactory } from './factory/goomba-factory';


function main() {
  // Random Factory 
  let factory = new RandomEnemyFactory();
  let firstEnemy = factory.createEnemy();
  let secondEnemy = factory.createEnemy();
  firstEnemy.move();
  secondEnemy.attack();

  // Goomba Factory
  factory = new GoombaEnemyFactory();
  for (let i = 0; i < 3; ++i) {
    let iteratorEnemy = factory.createEnemy();
    iteratorEnemy.move();
  }

  // Dificult Factory
  factory = new DificultEnemyFactory();
  for (let i = 0; i < 3; ++i) {
    let iteratorEnemy = factory.createEnemy();
    iteratorEnemy.attack();
  }

}

if (require.main == module) {
  main();
}