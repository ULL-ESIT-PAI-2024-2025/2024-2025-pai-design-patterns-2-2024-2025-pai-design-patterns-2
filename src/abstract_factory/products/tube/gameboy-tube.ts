/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Sonia Frías Jiménez, Martín José Marrero Quintans, Abian Santana Ledesma
 * @since Mar 18 2025
 * @desc Defines the interface of product Tube
 *
 */

import { Tube } from './tube';

/**
 * Interface for Tube
 */
export class GameBoyTube implements Tube {
  /**
   * Renders a block with 2d style
   * 
   * For simplicity, we'll just print a message
   */
  public render(): void {
    console.log('I am a gameboy styled tube!');
  }

  /**
   * Manages the state of the block
   */
  public enter(): void {
    console.log('You entered in the 2D tube, it\s pretty dark here');
  }
}