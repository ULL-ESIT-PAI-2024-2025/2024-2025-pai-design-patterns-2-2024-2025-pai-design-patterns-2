/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Sonia Frías Jiménez, Martín José Marrero Quintans, Abian Santana Ledesma
 * @since Mar 15 2025
 * @desc defines the Enemy interface
 * 
 *
 * In the Factory Pattern, factories create `products`
 * These products can be different but must have a 
 * common base class or interface
 */

/**
 * Interface for enemy
 */
export interface Enemy {
  move(): void;
  attack(): void;
}