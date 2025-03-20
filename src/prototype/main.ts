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

import { Pickaxe } from './pickaxe';
import { Sword } from './sword';
import { Tool } from './tool';

function main() {
  const pickaxe: Tool = new Pickaxe('Diamond', 1561);
  const sword: Tool = new Sword('Iron', 250);

  const pickaxeClone: Tool = pickaxe.clone();
  pickaxeClone.setMaterial('Netherite');

  const swordClone: Tool = sword.clone();

  pickaxe.displayInfo();
  pickaxeClone.displayInfo();
  sword.displayInfo();
  swordClone.displayInfo();
}
