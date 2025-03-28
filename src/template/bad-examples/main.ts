/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Martín José Marrero Quintans, Abian Santana Ledesma, Sonia Sonia Frías Jiménez
 * @since Mar 19 2025
 * @desc main function to test the bad examples classes
 *
 * @see README.md for more information
 */

import { Bedrock } from './bedrock';
import { Dirt } from './dirt';
import { Grass } from './grass';

function main() {
  const bedrock: Bedrock = new Bedrock();
  const dirt: Dirt = new Dirt();
  const grass: Grass = new Grass

  bedrock.interact();
  console.log();

  dirt.interact();
  console.log();

  grass.interact();
  console.log();
}

main();
