/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Sonia Frías Jiménez, Martín José Marrero Quintans, Abian Santana Ledesma
 * @since Mar 15 2025
 * @desc boo is a concrete implementation of Enemy interface
 *
 */

import { Enemy } from './enemy';

export class Boo implements Enemy {
  public move(): void {
    console.log('Boo is floating');
  }

  public attack(): void {
    console.log('Boo attacked you!');
  }
}