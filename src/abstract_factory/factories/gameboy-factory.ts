/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Sonia Frías Jiménez
 * @since Mar 15 2025
 * @desc example of an implementation of Factory Interface
 * which creates products with the GameBoy style
 *
 */

import { Factory } from './factory';
import { GameBoyBlock } from '../products/block/gameboy-block';
import { GameBoyTube } from '../products/tube/gameboy-tube';
import { Block } from '../products/block/block'
import { Tube } from '../products/tube/tube';

/**
 * Factory that creates Goombas
 */
export class GameBoyFactory implements Factory {
  /**
   * Factory Method that creates a block
   * @returns {Block} 
   */
  public createBlock(): Block {
    return new GameBoyBlock();
  }

  /**
   * Factory Method that creates a Tube
   * @returns {Tube} 
   */
  public createTube(): Tube {
    return new GameBoyTube();
  }
}