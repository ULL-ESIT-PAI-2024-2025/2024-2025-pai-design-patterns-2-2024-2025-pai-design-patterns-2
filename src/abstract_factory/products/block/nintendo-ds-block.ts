/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Sonia Frías Jiménez
 * @since Mar 18 2025
 * @desc Defines the interface of product
 *
 */

import { Block } from './block';

/**
 * Interface for Block
 */
export class NintendoDsBlock implements Block {
  private state: boolean = true;

  /**
   * Renders a block with 3d style
   * 
   * For simplicity, we'll just print a message
   */
  public render(): void {
    console.log('I am a Nintendo 3DS styled block!');
  }

  /**
   * Manages the state of the block
   * 
   * It could drop an item, but again for simplicity
   * we print a message
   */
  public punch(): void {
    if (this.state) {
      console.log('I dropped a 3D item');
      this.state = false;
    } else {
      console.log('Auch! I already dropped the item, don\'t punch me');
    }
  }
}