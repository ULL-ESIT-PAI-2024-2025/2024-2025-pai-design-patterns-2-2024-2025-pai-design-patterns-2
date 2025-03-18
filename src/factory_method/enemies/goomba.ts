/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Sonia Frías Jiménez
 * @since Mar 15 2025
 * @desc Goomba is a concrete implementation of Enemy interface
 *
 */

import { Enemy } from './enemy';

export class Goomba implements Enemy {
  public move(): void {
    console.log('Goomba is walking');
  }

  public attack(): void {
    console.log('Goomba attacked you!');
  }
}