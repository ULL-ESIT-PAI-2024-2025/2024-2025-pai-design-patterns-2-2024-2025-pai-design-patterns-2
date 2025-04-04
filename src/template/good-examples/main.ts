/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Martín José Marrero Quintans, Abian Santana Ledesma, Sonia Sonia Frías Jiménez
 * @since Mar 19 2025
 * @desc main function to test the good examples classes
 *
 * @see README.md for more information
 */

import { Bedrock } from './subclasses/bedrock';
import { Dirt } from './subclasses/dirt';
import { Grass } from './subclasses/grass';
import { Block } from './block.js';

function main() {
  const bedrock: Block = new Bedrock();
  const dirt: Block = new Dirt();
  const grass: Block = new Grass

  bedrock.interact();
  const bedrockDrops = bedrock.getDrops();
  console.log(bedrockDrops.length + '\n');

  dirt.interact();
  console.log(dirt.getDrops()[0].getName() + '\n');

  grass.interact();
  console.log(grass.getDrops()[0].getName() + '\n');
}

main();
