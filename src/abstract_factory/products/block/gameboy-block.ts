/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Sonia Frías Jiménez, Martín José Marrero Quintans, Abian Santana Ledesma
 * @since Mar 18 2025
 * @desc Defines the interface of product
 *
 */

import { Block } from './block';

/**
 * Interface for Block
 */
export class GameBoyBlock implements Block {
  private state: boolean = true;

  /**
   * Renders a block with 2d style
   * 
   * For simplicity, we'll just print a message
   */
  public render(): void {
    console.log('I am a Gameboy styled block!');
  }

  /**
   * Manages the state of the block
   */
  public punch(): void {
    if (this.state) {
      console.log('I dropped a 2D item');
      this.state = false;
    } else {
      console.log('Auch! I already dropped the item, don\'t punch me');
    }
  }
}