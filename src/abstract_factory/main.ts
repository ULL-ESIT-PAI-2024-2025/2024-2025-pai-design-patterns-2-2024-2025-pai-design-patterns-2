/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Sonia Frías Jiménez, Martín José Marrero Quintans, Abian Santana Ledesma
 * @since Mar 18 2025
 * @desc Main program to test Abstract Factory
 * 
 * Creates objects using their respective factory 
 * instead of intantiating them directly with the 
 * `new` operator
 * 
 */

import { Factory } from './factories/factory';
import { Block } from './products/block/block';
import { Tube } from './products/tube/tube';
import { GameBoyFactory } from './factories/gameboy-factory';
import { NintendoDsFactory } from './factories/nintendo-ds-factory';

function main() {
  let factory: Factory = new GameBoyFactory();

  console.log('GameBoy style products');
  let blockProduct: Block = factory.createBlock();
  let tubeProduct: Tube = factory.createTube();
  
  blockProduct.render(); // 2d block
  blockProduct.punch();
  tubeProduct.render(); // 2d tube
  tubeProduct.enter()

  console.log('\nNintendo Ds style products');
  factory = new NintendoDsFactory();

  blockProduct = factory.createBlock();
  tubeProduct = factory.createTube();

  blockProduct.render(); // 3d block
  tubeProduct.render(); // 3d tube
}

if (require.main === module) {
  main();
}