/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Sonia Frías Jiménez, Martín José Marrero Quintans, Abian Santana Ledesma
 * @since Mar 18 2025
 * @desc Defines the interface of a product: Block
 * 
 */

/**
 * Interface for Block
 */
export interface Block {
  render(): void;
  punch(): void;
}