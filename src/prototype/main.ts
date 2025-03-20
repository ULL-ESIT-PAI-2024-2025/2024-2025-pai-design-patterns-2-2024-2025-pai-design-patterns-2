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
  const pickaxe: Pickaxe = new Pickaxe();
  pickaxe.setMaterial('Diamond');
  pickaxe.setDurability(1561);

  // AVOID THIS
  // ----------------------------
  // const pickaxeClone: Pickaxe = new Pickaxe();
  // pickaxeClone.setMaterial('Diamond');
  // pickaxeClone.setDurability(1550);
  // pickaxe.displayInfo();
  // pickaxeClone.displayInfo();
  // ----------------------------

  // ALERT: THIS IS NOT A CLONE
  // ----------------------------
  // const pickaxeClone: Pickaxe = pickaxe;
  // pickaxeClone.setMaterial('Iron');
  // pickaxeClone.setDurability(1561);
  // pickaxe.displayInfo();
  // pickaxeClone.displayInfo();
  // ----------------------------
  // That code will change the material and durability of both pickaxe and pickaxeClone

  const sword: Sword = new Sword();
  sword.setMaterial('Iron');
  sword.setDurability(250);

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
