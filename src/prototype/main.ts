/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Abian Santana Ledesma 
 * @since Mar 19 2025
 * @desc Main function to test the cloning classes
 */

import { Pickaxe } from './tools/pickaxe';
import { Sword } from './tools/sword';

function main() {
  const pickaxe: Pickaxe = new Pickaxe('Diamond', 1561);
  const sword: Sword = new Sword('Iron', 250);

  const pickaxeClone: Pickaxe = pickaxe.clone();
  pickaxeClone.setMaterial('Netherite');

  const swordClone: Sword = sword.clone();
  swordClone.setDurability(200);

  pickaxe.displayInfo();
  pickaxeClone.displayInfo();
  sword.displayInfo();
  swordClone.displayInfo();
}

main();
